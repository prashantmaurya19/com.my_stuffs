using Toybox.WatchUi;

class AnswerView extends WatchUi.View {
	private var text;
	public var t = "hellow";
    function initialize(text) {
        View.initialize();
        t = text;
    }
    
    

    // Load your resources here
    function onLayout(dc) {
        setLayout(Rez.Layouts.MainLayout(dc));
    }

    // Called when this View is brought to the foreground. Restore
    // the state of this View and prepare it to be shown. This includes
    // loading resources into memory.
    function onShow() {
    	text = new WatchUi.TextArea({
            :color=>Graphics.COLOR_WHITE,
            :locX =>WatchUi.LAYOUT_HALIGN_CENTER,
            :locY=>WatchUi.LAYOUT_VALIGN_CENTER,
            :width=>190,
            :height=>190
        });
        text.setJustification(Graphics.TEXT_JUSTIFY_LEFT);
        text.setFont( Graphics.FONT_XTINY);
        text.setText(t);
    }

    // Update the view
    function onUpdate(dc) {
        // Call the parent onUpdate function to redraw the layout
        dc.setColor(Graphics.COLOR_PINK, Graphics.COLOR_BLACK);
        dc.clear();
        text.draw(dc);
    }

    // Called when this View is removed from the screen. Save the
    // state of this View here. This includes freeing resources from
    // memory.
    function onHide() {
    }
	
}
