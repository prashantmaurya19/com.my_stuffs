
class Menu{

    constructor(element,menuobj){
        this.menuElement = document.createElement("span");
        this.menuVal = menuobj;
        this.initBar();
        this.createMenu(menuobj);
        element.appendChild(this.menuElement);
    }

    initBar(){
        this.menuElement.className = "menubar";
    }

    createMenu(menuobj){
        for (let item in menuobj) {
            this.createMenuHelper(item,menuobj[item]);
        }
    }

    menuEventHelper(e){
        if(this.click){
            this.click(e);
        }
    }
    
    subMenuEventHelper(e){
        if(this.click){
            this.click(e);
        }
    }

    createMenuHelper(name,obj){
        let m = document.createElement("span");
        m.className = "menu";
        m.getInstance = () => { return this};
        if(obj.click){
            m.click = obj.click;
        }
        m.innerHTML = this.createFontHtml(name);
        m.addEventListener("click",this.menuEventHelper);
        let p = document.createElement("ul");
        p.className = "submenu";
        if(obj['submenu']){
            for(let i = 0;i<obj.submenu.length;i++){
                this.createSubMenu(p,"submenu",obj['submenu'][i]);
            }
            m.appendChild(p);
        }
        this.menuElement.appendChild(m);
        return m;
    }
    
    createSubMenu(parent,cls,obj){
        let sm = document.createElement("li");
        parent.className = cls;
        (obj.shortcut) ? sm.insertAdjacentHTML("afterbegin",this.createFontHtml(obj.shortcut)) : null;
        (obj.name) ? sm.insertAdjacentHTML("afterbegin",this.createFontHtml(obj.name)) : null;
        sm.addEventListener("click",this.subMenuEventHelper);
        if(obj.click){
            sm.click = obj.click;
        }
        sm.getInstance = () => { return this};
        let parentMenu = document.createElement("ul");
        (cls!="") ? parentMenu.className = cls : null;
        if(obj.submenu){
            for(let i = 0;i<obj["submenu"].length;i++){
                this.createSubMenu(parentMenu,"innerSubMenu",obj['submenu'][i]);
                sm.appendChild(parentMenu);
            }
        }
        parent.appendChild(sm);
        return sm;
    }

    createFontHtml(text){
        return `<span>${text}</span>`;
    }


}