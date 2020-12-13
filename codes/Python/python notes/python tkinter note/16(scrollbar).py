from tkinter import *


root = Tk()
root.geometry("800x500")
root.title("scrollbar in tkinter")

# connecting scrollbar 
# 1. widget(yscrollcommand = scrollbar.set)
# 2 scrollbar.config(command=widget.yview)
sc = Scrollbar(root)
sc.pack(side=RIGHT,fill=Y)


# lis = Listbox(root,yscrollcommand=sc.set)
# for i in range(100):
# 	lis.insert(END,str(i))
# lis.pack(fill='x')

lis = Text(root,yscrollcommand=sc.set)
lis.pack(fill='y',side=LEFT)
sc.config(command=lis.yview)






root.mainloop()