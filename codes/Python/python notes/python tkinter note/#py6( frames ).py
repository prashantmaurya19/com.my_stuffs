from tkinter import *
#this note is wirten by notemaker
root = Tk()
root.geometry("800x500")
root.title("frame in tkinter")
f = Frame(root,bg='orange',borderwidth=10)

f.pack(side=LEFT,fill="y")

l = Label(f,text='prashant tkinter - pycharm')
l.pack()


root.mainloop()
