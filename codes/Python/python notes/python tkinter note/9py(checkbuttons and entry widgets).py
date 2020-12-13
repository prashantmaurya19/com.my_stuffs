from tkinter import *

def getvals():
	print('it works')

root = Tk()
root.geometry("800x500")
root.title("checkbutttons and entry widgets")

Label(root,text='welcome to prashant travels',font='conmicsanms 15 bold').grid(row=0,column=3)
name = Label(root,text='name')
phone = Label(root,text='phone')
gender = Label(root,text='gender')
email = Label(root,text='email')
payment = Label(root,text='payment mode')

name.grid(row=1,column=2)
phone.grid(row=2,column=2)
gender.grid(row=3,column=2)
email.grid(row=4,column=2)
payment.grid(row=5,column=2)

namevalue = StringVar()
phonevalue = StringVar()
gendervalue = StringVar()
emailvalue = StringVar()
paymentvalue= StringVar()
foodservicevalue = IntVar()

nameentry = Entry(root,textvariable=namevalue)
phoneentry = Entry(root,textvariable=phonevalue)
genderentry = Entry(root,textvariable=gendervalue)
emailentry = Entry(root,textvariable=emailvalue)
paymententry = Entry(root,textvariable=phonevalue)

nameentry.grid(row=1,column=3)
phoneentry.grid(row=2,column=3)
genderentry.grid(row=3,column=3)
emailentry.grid(row=4,column=3)
paymententry.grid(row=5,column=3)

# checkbox
foodservice = Checkbutton(text="went prebook your meal",variable=foodservicevalue)
foodservice.grid(row=6,column=3)

Button(text='submit',command=getvals).grid(row=7,column=3)


root.mainloop()