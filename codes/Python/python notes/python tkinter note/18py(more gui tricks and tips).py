from tkinter import *

root = Tk()
root.geometry("800x500")
root.title("tiicks and tip")
root.wm_iconbitmap('app.ico')
root.configure(background='gray')
width = root.winfo_screenwidth()
height = root.winfo_screenheight()

Button(text="destroy",command=root.destroy).pack()

root.mainloop()