from tkinter import *
import tkinter.messagebox as tmsg
def getdollar():
	tmsg.showinfo(f'amount added {slid.get()}',f'{slid.get()} is added to your bank account')


root = Tk()
root.geometry("800x500")
root.title("silder")

Label(root,text='tranfer dollar').pack()

slid = Scale(root ,tickinterval = 500, from_=0,to=1000,orient=HORIZONTAL)
slid.set(200)
slid.pack()

Button(root,text='get dollar',command=getdollar).pack()
root.mainloop()