using Toybox.WatchUi;
using Toybox.System;

class AnswerMenuDelegate extends WatchUi.MenuInputDelegate {

    function initialize() {
        MenuInputDelegate.initialize();
    }
	
    function onMenuItem(item) {
        if (item == :one) {
            WatchUi.switchToView(new AnswerView(new DataCenter().getData("p1")[0]), new AnswerDelegate("p1",0), WatchUi.SLIDE_IMMEDIATE);   
        } else if (item == :two) {
        	WatchUi.switchToView(new AnswerView(new DataCenter().getData("p2")[0]), new AnswerDelegate("p2",0), WatchUi.SLIDE_IMMEDIATE);  
        } else if (item == :three) {
        	WatchUi.switchToView(new AnswerView(new DataCenter().getData("p3")[0]), new AnswerDelegate("p3",0), WatchUi.SLIDE_IMMEDIATE);  
        }
    }

}