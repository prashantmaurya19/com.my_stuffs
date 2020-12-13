from tkinter import *
import tkinter.messagebox as tsmg
def order():
	tsmg.showinfo("order recived",f"we recived your order for {var.get()}")

root = Tk()
root.geometry("800x500")
root.title("radio buttons")
Label(root,text='what you like to have sir',font='lusida 20 bold',justify=LEFT,padx=20).pack()
lis = [['dosa',1],['idili',2],['paratha',3],['samosa',4]]
var = StringVar()
var.set('prashant')
radio = Radiobutton(root,text ='vadapav',padx=14,variable=var,value=6).pack(anchor='w');
for name in lis:
	radio = Radiobutton(root,text =name[0],padx=14,variable=var,value=name[0]).pack(anchor='w')
Button(text="order",command=order).pack()
root.mainloop()