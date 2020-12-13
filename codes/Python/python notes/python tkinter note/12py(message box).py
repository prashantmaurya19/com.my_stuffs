from tkinter import *
import tkinter.messagebox as tsmg #importing message box

def divya():
	ans = tsmg.askretrycancel('divya se dosti karoge','sorrt diviya nahi manegi appki dost')
	if ans:
		print('retry karne ka koi faeda nhi he')
	else:
		print('shi he chod diya nhi to bohot petthe')


def fun():
	print('you file onpened successfully')

def help():
	print('you got help very soon')
	#				  (title,message)  		
	a = tsmg.showinfo('help','prashant is comming your help you')
	print(a)

def rate():
	print('rate us')
	value= tsmg.askquestion('how was your experience','you used this gui')
	print(value)

root = Tk()
root.geometry("800x500")
root.title("message box")
menu = Menu(root)
m1 = Menu(menu,tearoff=0)
m1.add_command(label='file',command=fun)
m1.add_separator()
m1.add_command(label='exit',command=quit)
menu.add_cascade(label='File',menu=m1)


m2 = Menu(menu,tearoff=0)
m2.add_command(label='file',command=fun)
m2.add_separator()
m2.add_command(label='exit',command=quit)
menu.add_cascade(label='edit',menu=m2)

m3 = Menu(menu,tearoff=0)
m3.add_command(label='help',command=help)
m3.add_separator()
m3.add_command(label='rate',command=rate)
m3.add_command(label='divya',command=divya)
menu.add_cascade(label='edit',menu=m3)

root.config(menu=menu)
root.mainloop()