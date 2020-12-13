from tkinter import *
from PIL import Image , ImageTk

root = Tk()

root.geometry("800x500")

# for jpg image 
image = Image.open("11.png")
photo = ImageTk.PhotoImage(image)

# photo = PhotoImage(file="./11.png")

label = Label(image=photo)

label.pack()


root.mainloop()