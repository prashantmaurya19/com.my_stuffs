from tkinter import *

def fun():
	print('hellow prashant')

root = Tk()
root.geometry("800x500")
root.title("menu bars")

# create non drop-down menu
# menu = Menu(root)
# menu.add_command(label='File',command=fun)
# menu.add_command(label='exit',command=quit)
# root.config(menu=menu)

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

root.config(menu=menu)

root.mainloop()