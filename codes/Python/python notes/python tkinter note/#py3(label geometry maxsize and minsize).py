#py3(label geometry maxsize and minsize).py
from tkinter import *

root = Tk()

#width x height
root.geometry("500x300")

#width x height
root.maxsize(500,300)

#minisize() same as maxsize

# creating a label
text = Label(text = "hey i am prashant")
text.pack()


root.mainloop()