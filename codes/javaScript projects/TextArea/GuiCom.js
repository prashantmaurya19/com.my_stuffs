class TabPanel{
    constructor(element){
        this.container = element;
        this.tabArea = document.createElement("div");
        this.initTabArea(this.tabArea);
        this.displayFrame = document.createElement("div");
        this.displayFrame.className = "displayFrame";
        this.tabs = {};
        this.currentTabName = null;
        element.appendChild(this.tabArea);
        element.appendChild(this.displayFrame);
        this.editorOption = {
            language: "json",
            lineNumbers: "on", 
            minimap : {"enabled" : false},
            automaticLayout: true,
            padding:{
                bottom: 0,
                top: 0
            } ,
            roundedSelection: true,
            scrollBeyondLastLine: true,
            readOnly: false,
            theme: "vs"
        }
        this.add("new");
        this.show("new");
    }

    initTabArea(ta){
        ta.className = "tabArea";
    }

    initTab(name){
        let tab = document.createElement("span");
        tab.classList.add("tab");
        tab.id = name;
        tab.tabName = name;
        tab.getInstance = ()=>{
            return this;
        };
        tab.innerHTML = `<font>${name}</font><a class='close-btn'>X</a>`;
        tab.lastElementChild.addEventListener("click",this.closeTabBtnEvent);
        tab.addEventListener("click",this.clickEvent);
        return tab;
    }
    
    initFrame(){
        let frame = document.createElement("span");
        frame.className = "frame";
        return frame;
    }

    closeTabBtnEvent(e){
        let parent = e.target.parentElement;
        if(parent.getInstance().tabArea.childElementCount>1 ){
            if(parent==parent.getInstance().tabArea.children[parent.getInstance().currentTabName]){
                if(parent.nextElementSibling){
                    parent.getInstance().show(parent.nextElementSibling.tabName);
                }else if(parent.previousElementSibling){
                    parent.getInstance().show(parent.previousElementSibling.tabName);
                }
            }
            parent.getInstance().remove(parent.tabName);
        }
    }

    clickEvent(e){
        this.getInstance().show(e.target.tabName);
    }

    add(name){
        if(this.tabs[name]==undefined){
            this.tabArea.appendChild(this.initTab(name));
            this.tabs[name] = this.initFrame();
            this.displayFrame.appendChild(this.tabs[name]);
            this.show(name);
            this.tabs[name].editor = monaco.editor.create(this.tabs[name],this.editorOption);
        }
    }

    remove(name){
        if(this.tabs[name]){
            this.tabs[name].remove();
            delete this.tabs[name];
            document.getElementById(name).remove();
        }
    }

    show(name){
        if(this.tabs[name] && this.currentTabName!=name){
            if(this.currentTabName){
                this.deactivateFrame(this.tabs[this.currentTabName]);
                this.deactivateTab(this.tabArea.children[this.currentTabName]);
            }
            this.currentTabName = name;
            this.activateTab(this.tabArea.children[name]);
            this.activateFrame(this.tabs[name]);
        }
    }

    activateFrame(frame){
        if(frame.classList.contains("inactive")){
            frame.classList.replace("inactive","active");
        }else{
            frame.classList.add("active"); 
        }
    }
    
    deactivateFrame(frame){
        if(frame.classList.contains("active")){
            frame.classList.replace("active","inactive");
        }else{
            frame.classList.add("inactive"); 
        }
    }
    activateTab(frame){
        if(frame.classList.contains("inactiveTab")){
            frame.classList.replace("inactiveTab","activeTab");
        }else{
            frame.classList.add("activeTab"); 
        }
    }
    
    deactivateTab(frame){
        if(frame.classList.contains("activeTab")){
            frame.classList.replace("activeTab","inactiveTab");
        }else{
            frame.classList.add("inactiveTab"); 
        }
    }

}



