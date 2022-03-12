using Toybox.Application;
using Toybox.WatchUi;

class AnswerApp extends Application.AppBase {
	private var view = new AnswerView(new DataCenter().getData("p1")[0]), event = new AnswerDelegate("p1",0);
    function initialize() {
        AppBase.initialize();
    }

    // onStart() is called on application start up
    function onStart(state) {
    	
    }

    // onStop() is called when your application is exiting
    function onStop(state) {
    }

    // Return the initial view of your application here
    function getInitialView() {
        return [ view , event];
    }

}
