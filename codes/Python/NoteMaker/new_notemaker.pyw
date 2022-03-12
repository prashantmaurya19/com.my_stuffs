import re
import json
from tkinter import *
import tkinter.messagebox as fmsg
import tkinter.filedialog as fd
from tkfontchooser import askfont
from tkinter.colorchooser import askcolor
import tkinter.font as tkf

class NoteMaker(Tk):
    def __init__(self):
        super(NoteMaker, self).__init__()
        self.wraps = IntVar()
        self.titleText = 'Untitled - NoteMaker'
        self.file_name = None
        self.issaved = True
        self.cbg = '#ffffff'
        self.cfg = '#000000'
        self.font_family = 'arial'
        self.font_size = 20
        self.font_style = 'normal'
        self.symbols = {"(": ")", "{": "}", "[": "]", "'": "'", '"': '"', "`": "`"}
        self.textArea = None
        self.menuTree = {}
        self.title(self.titleText)
        self.configure()
        self.protocol("WM_DELETE_WINDOW", self.exit_window)

    # WINDOW RELATED FUCNTIONS I DIFINING HERE IS STARTED

    def configure(self):
        try:
            with open('conf.json', 'r') as f:
                confes = json.loads(f.read())
        except Exception as e:
            return
        self.font_size = int(confes['font_size'])
        self.font_family = confes['font_family']
        self.font_style = confes['font_style']
        if confes['file'] is not None:
            self.file_name = confes['file']
        if confes["wrap"] == 1:
            self.wraps.set(1)
        colors = confes["theme"].split("/")
        try:
            self.theme_update(colors[0], colors[1])
        except Exception as e:
            pass
        del colors, confes

    def exit_window(self):
        with open('conf.json', 'w') as f:
            f.write(json.dumps({
                "font_family": self.font_family,
                "font_size": self.font_size,
                "font_style": self.font_style,
                "theme": f"{self.cbg}/{self.cfg}",
                'wrap': self.wraps.get(),
                'file': self.file_name
            }))
        if self.isAnyFileOpened():
            self.SaveFile()
            self.CloseFile()
        elif not self.issaved:
            op = fmsg.askyesnocancel("Save the file", "You want to save the file .")
            if op:
                self.CreateNewFile()
        self.destroy()

    def theme_night_owl(self):
        self.cbg = '#282c34'
        self.cfg = '#ffffff'
        self.theme_update('#282c34', '#ffffff')

    def custom_Background(self):
        color = askcolor()
        self.cbg = color[1]
        self.theme_update(self.cbg, self.cfg)

    def custom_Foreground(self):
        color = askcolor()
        self.cfg = color[1]
        self.theme_update(self.cbg, self.cfg)

    def theme_update(self, tbg_para, tfg_para):
        try:
            self.textArea.config(bg=tbg_para, fg=tfg_para, insertbackground=tfg_para)
        except Exception as e:
            self.cbg = tbg_para
            self.cfg = tfg_para

    # WINDOW RELATED FUCNTIONS I DIFINING HERE IS ENDED

    # FILE RELATED FUNCTIONS I DIFINING HERE IS STARTED

    def fileHandler(self, operation, filename):
        if operation:
            self.file_name = filename
            self.title(filename)
            self.issaved = True
        else:
            self.file_name = None
            self.title(self.titleText)
            self.issaved = True

    def isAnyFileOpened(self):
        return self.file_name is not None

    def SaveFile(self):
        if self.isAnyFileOpened():
            try:
                with open(self.file_name, 'w') as f:
                    f.write(self.textArea.get("1.0", END).strip())
                self.fileHandler(True, self.file_name)
            except Exception as e:
                fmsg.showerror('Error', str(e))
        else:
            self.CreateNewFile()

    def CloseFile(self):
        self.fileHandler(False, "no")

    def OpenExistingFile(self):
        if self.isAnyFileOpened():
            self.SaveFile()
            self.CloseFile()
        self.textArea.delete('1.0', END)
        try:
            with fd.askopenfile(mode='r', filetypes=[('Text Files', '*.txt')]) as f:
                self.textArea.insert(INSERT, f.read())
                self.fileHandler(True, f.name)
        except Exception as e:
            pass

    def CreateNewFile(self):
        if self.isAnyFileOpened():
            self.SaveFile()
            self.CloseFile()
        try:
            with fd.asksaveasfile(filetypes=[('Text Files', '*.txt')], defaultextension='*.txt') as f:
                f.write(self.textArea.get("1.0", END).strip())
                self.fileHandler(True, f.name)
        except Exception as e:
            self.CloseFile()

    # FILE RELATED FUNCTIONS I DIFINING HERE IS ENDED

    # SHORTCUT RELATED FUNCTIONS I DEFINING HERE IS STARTED

    def create_New_File_Shortcut(self, event):
        if self.isAnyFileOpened():
            self.SaveFile()
            self.CloseFile()
            self.delete_curr_line_text(widget=event.widget, startpos='1.0', endpos=END)

    def zoom_in_out(self, event):
        if event.delta < 0 and self.font_size >= 20:
            self.font_size -= 1
        elif event.delta > 0 and self.font_size <= 70:
            self.font_size += 1
        self.textArea.config(font=(self.font_family, self.font_size, self.font_style))
        self.textArea.update()

    def openFileShorcut(self, event):
        self.OpenExistingFile()

    def saveShorcut(self, event):
        self.SaveFile()

    # SHORTCUT RELATED FUNCTIONS I DEFINING HERE IS ENDED

    # GUI RELATED FUNCTION I DEFINING HERE IS STATED

    def createTextArea(self):
        if self.textArea == None:
            self.textArea = Text(self, insertbackground=self.cfg, tabs="0.5i", bg=self.cbg, fg=self.cfg,
                                 font=(self.font_family, self.font_size, self.font_style), yscrollcommand=self.sc_y.set,
                                 xscrollcommand=self.sc_x.set, wrap=NONE)
            self.textArea.pack(fill='both', expand=True, side=TOP)
            self.sc_y.config(command=self.textArea.yview)
            self.sc_x.config(command=self.textArea.xview)
            self.textArea.bind("<Return>", self.Return_Key_Handler)
            self.textArea.bind("<BackSpace>", self.BackSpace_Handler)
            self.textArea.bind("<Key>", self.Key_Handler)
            self.textArea.bind("<Control-KeyPress-Right>", self.control_Arrow_handler)
            self.textArea.bind("<Control-KeyPress-Left>", self.control_Arrow_handler)
            self.textArea.bind("<Control-Shift-KeyPress-Right>", self.control_Shift_Arrow_Handler)
            self.textArea.bind("<Control-Shift-KeyPress-Left>", self.control_Shift_Arrow_Handler)
            self.textArea.bind("<Control-s>", self.saveShorcut)
            self.textArea.bind("<Control-o>", self.openFileShorcut)
            self.textArea.bind("<Control-n>", self.create_New_File_Shortcut)
            self.textArea.bind("<'>", self.bracketKeysHandler)
            self.textArea.bind('<">', self.bracketKeysHandler)
            self.textArea.bind('<`>', self.bracketKeysHandler)
            self.textArea.bind("<{>", self.bracketKeysHandler)
            self.textArea.bind('<[>', self.bracketKeysHandler)
            self.textArea.bind('<(>', self.bracketKeysHandler)
            self.textArea.bind('<Button-3>', self.PopUpMenuHandler)
            self.textArea.bind("<Control-MouseWheel>", self.zoom_in_out)
            self.textArea.bind('<Control-BackSpace>', self.control_Backspace_Handler)
            if self.file_name != None:
                try:
                    with open(self.file_name) as f:
                        self.textArea.insert(INSERT, f.read())
                    self.fileHandler(True, self.file_name)
                except Exception as e:
                    self.fileHandler(False , "no")
            self.setText_wrap()

    def scrolls(self):
        if self.textArea is None:
            self.sc_y = Scrollbar(self.textArea, troughcolor="red")
            self.sc_y.pack(side=RIGHT, fill=Y)

            self.sc_x = Scrollbar(self.textArea, orient=HORIZONTAL, width=20)
            self.sc_x.pack(side=BOTTOM, fill=X)

    def createSubMenu(self, parentName, name):
        self.menuTree[name] = Menu(parentName, relief=FLAT, tearoff=0, background="#ffd4d4", selectcolor='#4d0000',
                                   foreground="#4d0000", activebackground="#950005", activeforeground="#ffffff")

    def addActionInMenu(self, menuName, actionName, action):
        self.menuTree[menuName].add_command(label=actionName, command=action)

    def addSapratorInMenu(self, menuname):
        self.menuTree[menuname].add_separator()

    def addCheckButtonInMenu(self, menuName, btnName, var, action):
        self.menuTree[menuName].add_checkbutton(label=btnName, onvalue=1, offvalue=0, variable=var, command=action)

    def addCascadeInMenu(self, parentmenu, menuname, name):
        self.menuTree[parentmenu].add_cascade(label=name, menu=self.menuTree[menuname])

    def createPopMenu(self, parentElement):
        self.menuTree['popmenu'] = Menu(parentElement, border='-5p', tearoff=0, background="#ffd4d4",
                                        selectcolor='#4d0000', foreground="#4d0000", activebackground="#950005",
                                        activeforeground="#ffffff")

    # GUI RELATED FUNCTION I DEFINING HERE IS ENDED

    # FUNCTIONAL KEY Methods I DEFINING HERE IS STARTED

    def PopUpMenuHandler(self, event):
        self.menuTree['popmenu'].tk_popup(event.x_root, event.y_root)

    def Key_Handler(self, event):
        if self.isAnyFileOpened():
            self.title('*' + self.file_name)
            self.issaved = False
        else:
            self.title('*' + self.titleText)
            self.issaved = False

    def control_Backspace_Handler(self, event):
        indexs = self.nextCharPlace('Left', 2)
        self.delete_curr_line_text(widget=event.widget, startpos=indexs[0], endpos=indexs[1])
        return 'break'

    def control_Shift_Arrow_Handler(self, event):
        nextplace = self.nextCharPlace(event.keysym, 2)
        if self.tellSelectOrNot(event.keysym, nextplace[nextplace[2]]):
            self.setSelection(nextplace[0], nextplace[1])
        else:
            self.setDelection(nextplace[0], nextplace[1])
        self.setCursorPosition(event.widget, nextplace[1 - nextplace[2]])
        return 'break'

    def BackSpace_Handler(self, event):
        index = self.getIndex()
        try:
            previos = self.get_curr_line(index[0])[-1]
            if previos in ["{", "[", "(", "'", '"', "`"]:
                if self.symbols[previos] == self.textArea.get(INSERT, f"{index[0]}.{int(index[1]) + 1}"):
                    event.widget.delete(INSERT, f"{index[0]}.{int(index[1]) + 1}")
            elif index[1] == '3':
                self.delete_curr_line_text(widget=event.widget, startcolumn=index[0], start=0, end=3)
        except Exception as e:
            pass

    def bracketKeysHandler(self, event):
        try:
            event.widget.insert("sel.first", event.char)
            event.widget.insert("sel.last", self.symbols[event.char])
            return 'break'
        except Exception as e:
            pos = event.widget.index(INSERT)
            event.widget.insert(INSERT, self.symbols[event.char])
            self.setCursorPosition(event.widget, pos)

    def Return_Key_Handler(self, event):
        index = self.getIndex()
        line = self.get_curr_line(index[0])
        try:
            space = self.get_space(line)
            if line[-1] == ':':
                event.widget.insert(INSERT, f'\n{space}\t>')
            elif self.check_tree_line(line) != None:
                if line[-2:] == "..":
                    self.treeCancelHandler(int(index[0]) + 1)
                else:
                    event.widget.insert(INSERT, f'\n{space}>')
            elif line[0:3] == '>> ':
                if index[1] == '3':
                    self.delete_curr_line_text(widget=event.widget, startcolumn=index[0], start='0', end='3')
                self.createNoteBullet()
            elif space != "":
                if line[-1] == "{":
                    event.widget.insert(INSERT, f'\n{space}\t')
                    pos = event.widget.index(INSERT)
                    event.widget.insert(INSERT, f"\n{space}")
                    self.setCursorPosition(event.widget, pos)
                else:
                    event.widget.insert(INSERT, f'\n{self.get_space(line)}')
            else:
                event.widget.insert(INSERT, "\n>> ")
            del space
        except Exception as e:
            self.createNoteBullet()
        event.widget.yview_moveto(1)
        return 'break'

    def control_Arrow_handler(self, event):
        try:
            self.setDelection(self.textArea.index("sel.first"), self.textArea.index("sel.last"))
        except Exception as e:
            pass
        index = self.nextCharPlace(event.keysym, 1)
        self.setCursorPosition(event.widget, index)
        return 'break'

    # FUNCTIONAL KEY Methods I DEFINING HERE IS END

    # GUI HELPER METHODS I DEFINING HERE IS STARTED

    def setText_wrap(self):
        try:
            if self.wraps.get() == 1:
                self.textArea.config(wrap=WORD)
            else:
                self.textArea.config(wrap=NONE)
        except Exception as e:
            pass

    def about(self):
        fmsg.showinfo('NoteMaker - Create Efficient notes', 'Developer name:- Prashant Maurya\nVersion :- new.11.10.10')

    def change_font(self):
        f = askfont()
        if f != '':
            self.font_family = f['family']
            self.font_size = int(f['size'])
            self.font_style = f['weight']
            self.textArea.config(font=(f['family'], f['size'], f['weight']))
            self.textArea.update()

    def createNoteBullet(self, ):
        self.textArea.insert(INSERT, "\n>> ")

    def setSelection(self, p1, p2):
        self.textArea.tag_add("sel", p1, p2)

    def setDelection(self, p1, p2):
        self.textArea.tag_remove("sel", p1, p2)

    def setCursorPosition(self, widget, position):
        widget.mark_set("insert", position)

    # GUI HELPER METHODS I DEFINING HERE IS ENDED

    # FUCNTIONAL HELPER METHODS I DEFINING HERE IS STARTED

    def formatIndex(self, coloum, row):
        return f'{coloum}.{row}'

    def nextCharPlace(self, arrow, n):
        index = self.getIndex()
        i = int(index[1])
        sign = 1
        if arrow == "Left":
            sign = -1
            i += sign
        while True:
            i += sign
            if not self.checkChar(self.textArea.get(f"{index[0]}.{i}", f"{index[0]}.{i + 1}")):
                if sign == -1:
                    i += 1
                break
        if n == 1:
            return f"{index[0]}.{i}"
        elif n == 2:
            if arrow == "Right":
                return [f"{index[0]}.{index[1]}", f"{index[0]}.{i}", 0, index[0]]
            else:
                return [f"{index[0]}.{i}", f"{index[0]}.{index[1]}", 1, index[0]]

    def treeCancelHandler(self, lineNumber):
        result = self.check_tree_line(self.get_curr_line(lineNumber, 100))
        if result != None:
            self.setCursorPosition(self.textArea, self.formatIndex(lineNumber, result.span()[1] + 1))
        else:
            self.createNoteBullet()

    def tellSelectOrNot(self, arrow, index):
        try:
            if (arrow == "Left" and self.textArea.index("sel.last") == index) or (
                    arrow == "Right" and self.textArea.index("sel.first") == index):
                return False
            else:
                return True
        except Exception as e:
            return True

    def checkChar(self, x):
        valid_char = re.compile('[a-zA-Z0-9\n]')
        return valid_char.match(x) != None

    def getIndex(self):
        return re.compile("\\d+").findall(self.textArea.index(INSERT))

    def delete_curr_line_text(self, **kwargs):
        try:
            kwargs['widget'].delete(self.formatIndex(kwargs['startcolumn'], kwargs['start']),
                                    self.formatIndex(kwargs['startcolumn'], kwargs['end']))
        except Exception as e:
            kwargs['widget'].delete(kwargs['startpos'], kwargs['endpos'])

    def get_curr_line(self, start_column, position=""):
        if position == "":
            position = self.textArea.index(INSERT)
        else:
            position = self.formatIndex(start_column, position)
        return self.textArea.get(self.formatIndex(start_column, 0), position)

    def check_tree_line(self, line):
        return re.compile("\s+[>]").match(line)

    def get_space(self, line):
        try:
            return re.compile("\\s+").match(line).group()
        except Exception as e:
            return ""

    # FUCNTIONAL HELPER METHODS I DEFINING HERE IS ENDED


note = NoteMaker()
note.geometry("1000x500+190+100")
note.iconbitmap("nmico.ico")
note.scrolls()
note.createTextArea()
note.createPopMenu(note.textArea)
note.createSubMenu(note.menuTree['popmenu'], 'theme')
note.addActionInMenu('popmenu', 'New File    Ctrl+n', note.CreateNewFile)
note.addActionInMenu('popmenu', 'Open file   Ctrl+o', note.OpenExistingFile)
note.addActionInMenu('popmenu', 'Save file     Ctrl+s', note.SaveFile)
note.addActionInMenu('popmenu', 'Close file', note.CloseFile)
note.addSapratorInMenu('popmenu')
note.addCheckButtonInMenu('popmenu', 'Word Wrap', note.wraps, note.setText_wrap)
note.addActionInMenu('popmenu', 'Font ', note.change_font)
note.addSapratorInMenu('popmenu')
note.addCascadeInMenu('popmenu', 'theme', "Theme")
note.addActionInMenu('theme', 'Dark Mode', note.theme_night_owl)
note.addActionInMenu('theme', 'Change Background', note.custom_Background)
note.addActionInMenu('theme', 'Change Foreground', note.custom_Foreground)
note.addSapratorInMenu('popmenu')
note.addActionInMenu('popmenu', 'About ', note.about)
note.addSapratorInMenu('popmenu')
note.addActionInMenu('popmenu', 'Exit', note.exit_window)
note.mainloop()
