from tkinter import *

def hellow():
	print('hellow world')

root = Tk()
root.geometry("800x500")
root.title("buttons")

frame = Frame(root,borderwidth=6,bg="orange",relief=SUNKEN)
frame.pack(fill='x')

b = Button(frame,bg='pink',fg='red',text='click here',command=hellow)
b.pack(side=LEFT,padx=10);

b1 = Button(frame,bg='pink',fg='red',text='click here',command=hellow)
b1.pack(side=LEFT,padx=10);

b2 = Button(frame,bg='pink',fg='red',text='click here',command=hellow)
b2.pack(side=LEFT,padx=10);


root.mainloop()
