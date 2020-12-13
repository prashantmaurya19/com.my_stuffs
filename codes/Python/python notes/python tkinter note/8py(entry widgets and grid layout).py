from tkinter import *

def getvals():
	print(user.get())
	print(password.get())

root = Tk()
root.geometry("800x500")
root.title("entry layout and grid layout")

a = Label(root,text='username')
b = Label(root,text='password')

a.grid()
b.grid(row=1)

user = StringVar()
password = StringVar()

uentry = Entry(root,textvariable = user)
pentry = Entry(root,textvariable = password)

uentry.grid(row=0,column=1)
pentry.grid(row=1,column=1)

b = Button(text='submit',command=getvals).grid()

root.mainloop()

# variable classes in tkinter
# Booleanvar,Doublevar,Intvar,Stringvar