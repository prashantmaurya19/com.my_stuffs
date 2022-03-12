
class TitleBar{
    constructor(menuobj){
        this.init(menuobj);
        this.events = {
            "closeButtonClickEvent":(e)=>{},
            "minimizeButtonClickEvent":(e)=>{},
            "maximiseButtonClickEvent":(e)=>{}
        }
        document.querySelector("body").firstElementChild.insertAdjacentElement("beforebegin",this.titleBarElement);
    }
    
    init(menuobj){
        this.initHelper(false,"titleBarElement","div","titleBar");
        this.initHelper(this.titleBarElement,"iconElement","span","appIcon");
        this.initHelper(this.titleBarElement,"menuElement","span","");
        this.initHelper(this.titleBarElement,"titleElement","span","title");
        this.initHelper(this.titleBarElement,"controlButtonsElement","span","controlButtons");
        this.titleElement.innerText = "TitleBar a Gui component";
        this.createControlButtons();
        this.setMenu(menuobj);
    }

    initHelper(container,attname,type,cls){
        this[attname] = document.createElement(type);
        this[attname].getInstance = ()=>{
            return this;
        }
        this[attname].className = cls;
        (container) ? container.appendChild(this[attname]) : null;  
    }

    setTitle(title){
        this.title.innerHTML = title;
    }

    getTitle(){
        return this.title.innerText;
    }

    setMenu(menuobj){
        (this.menu==undefined && menuobj!=null) ? this.menu = new Menu(this.menuElement,menuobj) : null;
    }

    getMenu(){
        return this.menu;
    }

    createControlButtons(){
        this.initHelper(this.controlButtonsElement,"minimizeButton","span","minizeButton",true);
        this.initHelper(this.controlButtonsElement,"maximiseButton","span","maximiseButton",true);
        this.initHelper(this.controlButtonsElement,"closeButton","span","closeButton",true);
    }

    closeClickEvent(e){
        this.getInstance().events.closeButtonClickEvent(e);
    }
    
    minimizeClickEvent(e){
        this.getInstance().events.minimizeButtonClickEvent(e);
        
    }
    
    maximiseClickEvent(e){
        this.getInstance().events.maximiseButtonClickEvent(e);
    }

    onCloseClickEvent(fun){
        this.events.closeButtonClickEvent = fun;
    }
    
    onCinimizeClickEvent(fun){
        this.events.minimizeButtonClickEvent = fun;
    }
    
    onCaximiseClickEvent(fun){
        this.events.maximiseButtonClickEvent = fun;
    }

}