from tkinter import *

def prashant(event):
	print(f'it is works click at {event.x} , {event.y}')

root = Tk()
root.geometry("800x500")
root.title("events in tkinter")

btn = Button(root,text='prashant')
btn.pack()
btn.bind('<Button-1>',prashant)
btn.bind('<Double-1>',quit)


root.mainloop()