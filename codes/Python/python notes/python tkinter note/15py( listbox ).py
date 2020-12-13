from tkinter import *

def add():
	global i
	lis.insert(ACTIVE,f"item {i}")
	i+=1
i = 0
root = Tk()
root.geometry("800x500")
root.title("Listbox in python")

lis = Listbox(root)
lis.pack()
lis.insert(END,'first item')
lis.insert(END,'second item')

Button(text="add items",command=add).pack()


root.mainloop()