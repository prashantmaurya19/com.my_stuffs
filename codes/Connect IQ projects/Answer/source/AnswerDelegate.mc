using Toybox.WatchUi;

class AnswerDelegate extends WatchUi.BehaviorDelegate {
	private var data ,count = 0,id;
    function initialize(pnum,num) {
        BehaviorDelegate.initialize();
        count = num;
        id = pnum;
        data = new DataCenter().getData(id);
    }
	
	function onTap(clickEvent) {
       	
        return true;
    }
	
	function changeCount(operation){ 
		count+=operation;
	}
	
	function onSwipe(swipeEvent) { 
        
        return true;
    }
	function onNextPage(){
		
		if(data.size()-1==count){
			return true;
		}
        changeCount(1);
        WatchUi.switchToView(new AnswerView(data[count]), new AnswerDelegate(id,count), WatchUi.SLIDE_UP);
		return true;
	}
	
	function onPreviousPage(){
		if(count==0){
			return true;
		}
		changeCount(-1);
	    WatchUi.switchToView(new AnswerView(data[count]), new AnswerDelegate(id,count), WatchUi.SLIDE_DOWN);
		return true;
	}
    function onMenu() {
    	var menu = new WatchUi.Menu();
        menu.setTitle("My Menu");
        menu.addItem("Topic 1", :one);
        menu.addItem("Topic 2", :two);
        menu.addItem("Topic 3", :three);
        WatchUi.switchToView(menu,new AnswerMenuDelegate(), WatchUi.SLIDE_UP);
        return true;
    }

}