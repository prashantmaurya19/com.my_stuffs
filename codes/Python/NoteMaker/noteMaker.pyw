import re
import subprocess
import json
from tkinter import *
import tkinter.messagebox as fmsg
import tkinter.filedialog as fd
from tkfontchooser import askfont
from tkinter.colorchooser import askcolor
import tkinter.font as tkf
import os

file_name = None # for file hendling
issaved = True # for file hendling
isopenedfile = False # for file hendling
cbg = '#ffffff'  # for textarea customization
cfg = '#000000'  # for textarea customization
font_family = 'arial'  # for textarea customization
font_size = 20  # for textarea customization
font_style = 'normal'  # for textarea customization
disable_enter = False # for hendling enter
tabs_Num = ""
Line_Num = 0
hascode = False
def configure():
	global font_family,font_size,font_style,file_name
	try:
		with open('conf.json','r') as f:
			confes = json.loads(f.read())
	except Exception as e:
		return
	font_size = int(confes['font_size'])
	font_family = confes['font_family']
	font_style = confes['font_style']
	if confes['file'] is not None:
		file_name = confes['file']

	if confes["wrap"] == 1:
		wraps.set(1)
	colors = confes["theme"].split("/")
	try:
		theme_update(colors[0],colors[1])
	except Exception as e:
		pass

def theme_night_owl():
	global cfg,cbg
	cbg = '#282c34'
	cfg = '#ffffff'
	theme_update('#282c34','#ffffff')

def custom_Background():
	global cbg,cfg
	color = askcolor()
	cbg = color[1]
	theme_update(cbg,cfg)

def custom_Foreground():
	global cbg, cfg
	color = askcolor()
	cfg = color[1]
	theme_update(cbg, cfg)

def theme_update(tbg_para,tfg_para):
	try:
		main_textarea.config(bg=tbg_para,fg=tfg_para,insertbackground=tfg_para)
	except Exception as e:
		global cbg,cfg
		cbg = tbg_para
		cfg = tfg_para


def exit_window():
	global cbg,cfg,font_family,font_size,font_style,isopenedfile,issaved,file_name
	with open('conf.json','w') as f:
		conf = json.dumps({
		"font_family":font_family,
		"font_size":font_size,
		"font_style":font_style,
		"theme":f"{cbg}/{cfg}",
		'wrap':wraps.get(),
		'file':file_name
		})
		num = len(conf)
		f.write("{\n")
		for index , line in enumerate(conf[1:(num-1)].split(",")):
			if(index==len(conf[1:(num-1)].split(","))-1):
				f.write(line+"\n")
			else:
				f.write(line+",\n")
		f.write("}")

	if isopenedfile:
		Save_file()
		close_file()
		isopenedfile = False
		root.destroy()
	elif not issaved:
		op = fmsg.askyesnocancel("Save the file","You want to save the file .")
		if op:
			create_file()
		elif op is None:
			root.destroy()
	else:
		root.destroy()

def about():
	fmsg.showinfo('NoteMaker - Create Efficient notes','Developer name:- Prashant Maurya'
													   '\nVersion :- 11.1.0\n\n\t'
													   'there are some shorcuts\n\t'
													   'Editor mode(on) :- startcode->enter\n\t'
													   'Editor mode(off) :- .scq\n\t'
													   'for getting tree like structure :- any_word: \n\t'
													   'plese do not use multiple dots(....) In the starting of numbered line\n\t'
													   'use it for eqiting from tree or numbered line\n\t'
													   'for open cmd :- control+shift+a\n\t'
													   '\n\t'
													   'if you are not able to control skip over the word then \n\t'
													   'just disable all lock keys disableing num lock is optional\n\t'
													   '\nThanks To using this notemaker plese loving this.')

def Tabbing(arrow,n):
	index = getIndex()
	i = int(index[1])
	sign = 1
	if arrow=="Left":
		sign = -1
	while True:
		i += sign
		if not checkChar(main_textarea.get(f"{index[0]}.{i}", f"{index[0]}.{i + 1}")):
			break
	if n is 1:
		return [f"{index[0]}.{i}",f"{index[0]}.{index[1]}"]
	elif n is 2:
		if arrow == "Right":
			return [f"{index[0]}.{index[1]}",f"{index[0]}.{i}",f"{index[0]}.{index[1]}"]
		else :
			return [f"{index[0]}.{i}",f"{index[0]}.{index[1]}",f"{index[0]}.{index[1]}"]

def checkSelectionCursorHelper(arrow,index):
	if (arrow == "Left" and main_textarea.index("sel.last") == index) \
			or (arrow == "Right" and main_textarea.index("sel.first") == index):
		return True
	else:
		return False

def Shift_arrow_helper(index,arrow,fun):
	if arrow == "Right":
		fun(f"{index[0]}.{index[1]}", f"{index[0]}.{int(index[1]) + 1}")
	else:
		fun(f"{index[0]}.{int(index[1]) - 1}", f"{index[0]}.{index[1]}")

def setCursorHelper(arrow,trueValue,falseValue,fun):
	if arrow == "Right":
		fun(trueValue)
	else:
		fun(falseValue)

def Shift_Arrow_shorcut(event):
	index = getIndex()
	try:
		if checkSelectionCursorHelper(event.keysym,f"{index[0]}.{index[1]}"):
			Shift_arrow_helper(index,event.keysym,setDelection)
		else:
			Shift_arrow_helper(index, event.keysym,setSelection)
	except Exception as e:
		Shift_arrow_helper(index,event.keysym,setSelection)
	setCursorHelper(event.keysym,f"{index[0]}.{int(index[1])+1}",f"{index[0]}.{int(index[1])-1}", setCursorPosition)
	return "break"


def Control_Shift_Arrow_shorcut(event):
	selpos = Tabbing(event.keysym, 2)
	try:
		if checkSelectionCursorHelper(event.keysym,selpos[2]):
			setDelection(selpos[0], selpos[1])
		else:
			setSelection(selpos[0], selpos[1])
	except Exception as e:
		setSelection(selpos[0], selpos[1])
	setCursorHelper(event.keysym, selpos[1], selpos[0], setCursorPosition)
	return "break"


def Tab_spacing_shorcut(event):
	main_textarea.tag_remove(SEL, "1.0", END)
	setCursorPosition(Tabbing(event.keysym, 1)[0])
	return "break"

def delete_to_space(event):
	delPos = Tabbing("Left",1)
	main_textarea.delete(delPos[0],INSERT)
	return "break"

def backspace_shorcuts(event):
	index = getIndex()
	previos = main_textarea.get(f"{index[0]}.{int(index[1]) - 1}", INSERT)
	symbol = {"(": ")", "{": "}", "[": "]", "'": "'", '"': '"', "`": "`"}
	if previos in ["{", "[", "(", "'", '"', "`"]:
		if symbol[previos] == main_textarea.get(INSERT,f"{index[0]}.{int(index[1]) + 1}"):
			main_textarea.delete(INSERT,f"{index[0]}.{int(index[1]) + 1}")
	if index[1] == "3" and Line_Num==0 and not hascode and index[0]!="1":
		main_textarea.delete(f'{int(index[0])}.0',INSERT)
	del symbol

def close_file():
	global isopenedfile,file_name,issaved
	file_name = None
	root.title("Untitled - NoteMaker")
	isopenedfile = False
	issaved = True

def Save_file():
	global issaved,isopenedfile,disable_enter
	if isopenedfile and file_name is not None:
		try:
			with open(file_name,'w') as f:
				f.write(main_textarea.get("1.0",END).strip())
		except Exception as e:
			fmsg.showerror('Error',str(e))
		root.title(file_name)
		issaved = True
	else:
		create_file()

def save_shortcut(event):
	if isopenedfile:
		Save_file()
	else:
		create_file()


def check_shortcut(event):
	global issaved,isopenedfile,tabs_Num,Line_Num,hascode
	index = getIndex()
	if not hascode and check_tree_line(get_curr_line(index[0])) is None and tabs_Num!="":
		tabs_Num=""
		Line_Num=0
		return

def get_number_in_line(line,n):
	return re.compile("\d+").findall(line)[n]

def check_tree_line(line):
	return  re.compile("\s+\d+").match(line)

def get_curr_line(start_column,position=""):
	if position is "":
		position = main_textarea.index(INSERT)
	return main_textarea.get(f'{start_column}.0',position)

def sync_lines_in_tree(start_column,line):
	global tabs_Num,Line_Num
	try:
			tabs_Num = get_space(line)
			Line_Num = int(get_number_in_line(line,0))+1
			block = len(tabs_Num)
			diff = 1
			start_column+=1
			line = get_curr_line(start_column,f"{start_column}.100")
			if int(get_number_in_line(line,0)) != Line_Num:
				while check_tree_line(line) is None:
					start_column+=1
					line = main_textarea.get(f'{start_column}.0', f"{start_column}.100")
				diff = ((int(get_number_in_line(line,0))-Line_Num)-1)*-1
			while check_tree_line(line) is not None :
				block_line = get_number_in_line(line,0)
				if get_space(line)==tabs_Num:
					main_textarea.delete(f"{start_column}.{block}",f"{start_column}.{block+len(block_line)}")
					main_textarea.insert(f"{start_column}.{block}",f"{int(block_line)+diff}")
				start_column+=1
				line = main_textarea.get(f'{start_column}.0',f"{start_column}.100")
			return
	except Exception as e:
		pass

def getIndex():
	return re.compile("\\d+").findall(main_textarea.index(INSERT))

def checkChar(x):
	valid_char = re.compile('[a-zA-Z0-9\n]')
	if valid_char.match(x) is None:
		return False
	else :
		return True

def Return_shortcuts(event):
	global  tabs_Num,hascode,Line_Num,disable_enter
	index = getIndex()
	if index[1] == "3" and Line_Num==0 and not hascode:
		main_textarea.delete(f'{index[0]}.0', INSERT)
	if main_textarea.get(f'{index[0]}.{int(index[1]) - 9}',INSERT) == "startcode":
		tabs_Num = "\t"
		hascode = True

	# change apply here
	if main_textarea.get(f"{index[0]}.{int(index[1]) - 1}", INSERT) == "{":
		tabs_Num = get_space(get_curr_line(index[0]))
		pos = main_textarea.index(INSERT)
		main_textarea.insert(INSERT, '\n'+tabs_Num)
		setCursorPosition(pos)
		return

	if hascode:
		tabs_Num =  get_space(main_textarea.get(f"{index[0]}.0",INSERT))[0:-1]
		return

	if main_textarea.get(f"{index[0]}.{int(index[1]) - 1}", INSERT) == ":":
		tabs_Num = get_space(get_curr_line(index[0]))+"\t"
		Line_Num = 1
		return
	line = get_curr_line(index[0],f"{index[0]}.100")
	if line[-2:]=="..":
		if setCursorToBack(index[0]):
			disable_enter = True
			return "break"
		else:
			tabs_Num = ""
			Line_Num = 0
	elif check_tree_line(line) is not None:
		sync_lines_in_tree(int(index[0]),line)
		return

def Return_Rlease_shortcut(event):
	global  disable_enter,tabs_Num,Line_Num,hascode

	if file_name is None:
		root.title('*' + 'Untitled - NoteMaker')
	elif not issaved:
		root.title("*" + file_name)

	if disable_enter:
		disable_enter = False
	elif tabs_Num != "" or hascode:
		if hascode:
			main_textarea.insert(INSERT,tabs_Num+"\t")
		else:
			main_textarea.insert(INSERT,tabs_Num+f"{Line_Num} >")
			Line_Num+=1
	else:
		event.widget.insert(INSERT,">> ")

def setCursorToBack(index):
	index = int(index)+1
	try:
		nextLine = len(check_tree_line(get_curr_line(index,f"{index}.100")).group())
		setCursorPosition(f"{index}.{nextLine + 2}")
		return True
	except Exception as e:
		return False

def get_space(line):
	try:
		return re.compile("\\s+").match(line).group()
	except Exception as e:
		return ""

def keyrelease_shortcuts(event):
	global disable_enter,tabs_Num,Line_Num,hascode,issaved

	try:
		matches = getIndex()
		start_row=int(matches[1])
		start_column=int(matches[0])

		if checkChar(event.char):
			if file_name is None :
				root.title('*' + 'Untitled - NoteMaker')
			elif not issaved:
				root.title("*"+file_name)
			command = main_textarea.get(f'{start_column}.{start_row - 4}', f'{start_column}.{start_row}')
			if command == ".scq":
				main_textarea.delete(f'{start_column}.{start_row-4}',f'{start_column}.{start_row}')
				hascode = False
				tabs_Num = ""
				Line_Num = 0
			issaved = False
			return
	except Exception as e:
		pass


def open_cmd(event):
	global disable_enter
	curr = os.getcwd()
	os.chdir("C://Users//prashant")
	disable_enter = True
	subprocess.run(['start'], shell=True, check=True)
	os.chdir(curr)

def setCursorPosition(position):
	main_textarea.mark_set("insert",position)


def setSelection(p1,p2):
	main_textarea.tag_add("sel",p1,p2)

def setDelection(p1,p2):
	main_textarea.tag_remove("sel",p1,p2)

def selection_shorcuts(event):
	symbol = {"(": ")", "{": "}", "[": "]","'":"'",'"':'"',"`":"`"}
	try:
		main_textarea.insert("sel.first", event.char)
		main_textarea.insert("sel.last",symbol[event.char])
		return "break"
	except Exception as e:
		pos = main_textarea.index(INSERT)
		main_textarea.insert(INSERT,symbol[event.char])
		setCursorPosition(pos)
	del symbol

def Create_file_shortcut(event):
	global isopenedfile
	if isopenedfile:
		Save_file()
		close_file()
	main_textarea.delete('1.0',END)

def create_file():
	global file_name,isopenedfile,disable_enter,issaved
	if isopenedfile:
		Save_file()
		close_file()
	disable_enter = True
	try:
		with fd.asksaveasfile(filetypes=[('Text Files','*.txt')],defaultextension='*.txt') as f:
			f.write(main_textarea.get("1.0", END).strip())
			file_name = f.name
		root.title(file_name)
		isopenedfile = True
		issaved = True
	except Exception as e:
		close_file()

def Open_file_shortcut(event):
	Open_file()

def Open_file():
	global isopenedfile,file_name,issaved,disable_enter
	disable_enter = True
	if isopenedfile:
		Save_file()
		close_file()
	main_textarea.delete('1.0',END)
	root.title("Untitled - NoteMaker")
	try:
		with fd.askopenfile(mode='r',filetypes=[('Text Files','*.txt')]) as f:
			main_textarea.insert(INSERT,f.read())
			file_name = f.name
		isopenedfile = True
		root.title(file_name)
		issaved = True
	except Exception as e:
		pass

def change_font():
	global font_family,font_size,font_style
	f = askfont()
	if f is not '':
		font_family = f['family']
		font_size = int(f['size'])
		font_style = f['weight']
		main_textarea.config(font=(f['family'],f['size'],f['weight']))
		main_textarea.update()

def zoom_in_out(event):
	global font_size,font_family,font_style
	if (event.state==12 or event.state ==4) and event.delta < 0 and font_size >= 20:
		font_size-=1
	elif (event.state==12 or event.state ==4) and event.delta > 0 and font_size <= 70:
		font_size+=1
	main_textarea.config(font = (font_family, font_size, font_style))
	main_textarea.update()


def setText_wrap():
	try:
		if wraps.get() == 1:
			main_textarea.config(wrap=WORD)
		else:
			main_textarea.config(wrap=NONE)
	except Exception as e:
		pass

root = Tk()
root.geometry(f"1000x500+190+100")
root.title(file_name)
root.iconbitmap(r".\nmico.ico")
root.protocol("WM_DELETE_WINDOW", exit_window)
wraps = IntVar()
root.title('Untitled - NoteMaker')
configure()

# creating menu
menu = Menu(root)

# creating submenu file
m1 = Menu(menu,tearoff=0)
m1.add_command(label='New File',command=create_file)
m1.add_command(label='Open file',command=Open_file)
m1.add_command(label='save file',command=Save_file)
m1.add_command(label='close file',command=close_file)
m1.add_separator()
m1.add_command(label='Exit		',command=exit_window)


# creating submenu edit
menu.add_cascade(label='File',menu=m1)
m2 = Menu(menu,tearoff=0)
m2.add_command(label='Font',command=change_font)
m2.add_checkbutton(label='Word Wrap',onvalue=1, offvalue=0,variable=wraps,command=setText_wrap)

# creating theme menu in edit
theme = Menu(m2,tearoff=0)
theme.add_command(label='Dark mode',command = theme_night_owl)
theme.add_command(label="custom Background",command = custom_Background)
theme.add_command(label="custom Foreground",command = custom_Foreground)
m2.add_cascade(label='Theme',menu=theme)
menu.add_cascade(label='Edit',menu=m2)

# creating submenu tools
m3 = Menu(menu,tearoff=0)
m3.add_command(label='about		',command=about)
menu.add_cascade(label='help',menu=m3)


text_frame = Frame(root)
text_frame.pack(side=TOP,expand=True,fill="both")

# creating scrolbar fot main text_area
sc_y = Scrollbar(text_frame,troughcolor="red")
sc_y.pack(side=RIGHT,fill=Y)

sc_x = Scrollbar(text_frame,orient=HORIZONTAL,width=20)
sc_x.pack(side=BOTTOM,fill=X)

# creating textarea
main_textarea = Text(text_frame,insertbackground=cfg,tabs="0.5i",bg=cbg,fg=cfg,font=(font_family,font_size,font_style),yscrollcommand=sc_y.set,xscrollcommand=sc_x.set,wrap=NONE)
main_textarea.pack(fill='both',expand=True)
sc_y.config(command=main_textarea.yview)
sc_x.config(command=main_textarea.xview)


main_textarea.bind("<KeyRelease>",keyrelease_shortcuts)
main_textarea.bind("<Key>",check_shortcut)
main_textarea.bind("<Control-BackSpace>",delete_to_space)
main_textarea.bind("<Control-MouseWheel>",zoom_in_out)
main_textarea.bind("<Control-s>",save_shortcut)
main_textarea.bind("<Control-o>",Open_file_shortcut)
main_textarea.bind("<Control-n>",Create_file_shortcut)
main_textarea.bind("<Control-Shift-KeyPress-Right>", Control_Shift_Arrow_shorcut)
main_textarea.bind("<Control-Shift-KeyPress-Left>", Control_Shift_Arrow_shorcut)
main_textarea.bind("<Shift-Right>",Shift_Arrow_shorcut)
main_textarea.bind("<Shift-Left>",Shift_Arrow_shorcut)
main_textarea.bind("<Alt-a>",open_cmd)
main_textarea.bind("<KeyRelease-Return>", Return_Rlease_shortcut)
main_textarea.bind("<BackSpace>",backspace_shorcuts)
main_textarea.bind("<Return>",Return_shortcuts)
main_textarea.bind("<Control-Right>",Tab_spacing_shorcut)
main_textarea.bind("<Control-Left>",Tab_spacing_shorcut)
main_textarea.bind("<'>",selection_shorcuts)
main_textarea.bind('<">',selection_shorcuts)
main_textarea.bind('<`>',selection_shorcuts)
main_textarea.bind("<{>",selection_shorcuts)
main_textarea.bind('<[>',selection_shorcuts)
main_textarea.bind('<(>',selection_shorcuts)


if file_name is not None:
	with open(file_name) as f:
		main_textarea.insert(INSERT,f.read())
setText_wrap()
root.config(menu=menu)
root.mainloop()

# project is completed