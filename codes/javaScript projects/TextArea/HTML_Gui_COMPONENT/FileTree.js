
class fileTree{
    constructor(element){
        this.container = element;
        this.diskName = "root";
        this.tree = this.createFolder(this.diskName);
    }

    setDiskName(name){
        (name) ? this.diskName = name : false;
    }

    getCurrentFolder(folderPath){
        let folder = this.tree["value"]; //array
        let path = this.parser(folderPath); //array
        if(path){
            for(let i = 0;i<path.length;i++){
                let temp = folder[path[i]]; 
                folder = temp.value;
            }
            return folder;
        }else if(folderPath==this.diskName || folderPath=="/" || folderPath == this.diskName+"/"){
            return this.tree["value"];
        }else{
            return null;
        }
    }

    add(folderPath,fileName){
        let folder = this.getCurrentFolder(folderPath);
        if(folder){
            if(fileName!="" && fileName!=null){
                if(!folder.includes(fileName)){
                    folder.push(fileName);
                }
            }
        }
    }

    parser(path){
        if(this.isPath(path)){
            let folders = path.split("/");
            let pathIndex = [];
            let folder = this.tree["value"];
            for(let j = 1 ; j < folders.length ; j++){
                let found = false;
                for(let i=0;i<folder.length;i++){
                    if(folder[i].constructor.name != "string" ){
                        if(folder[i].name == folders[j]){
                            pathIndex.push(i);
                            folder = folder[i].value;
                            found = true;
                            break;    
                        }
                    }
                }
                if(!found){
                    let newfolder = this.createFolder(folders[j]);
                    folder.push(newfolder);
                    folder = newfolder.value;
                    pathIndex.push(0);
                }
            }
            return pathIndex;  
        }else{
            return null;
        }
    }

    remove(path,fileName){
        let folder = this.getCurrentFolder(path);
        if(fileName){
            let index = folder.indexOf(fileName);
            (index==-1) ? index = this.isSameFolderContain(folder,fileName) : false;
            if(index!=-1){
                folder.splice(index,1);
            }
        }
    }

    createFileElement(name){

    }

    createFolderElement(parent,parentFolder){
        let f = document.createElement("span");
        f.className = "directorTree";
        let label = document.createElement("label");
        label.innerHTML = `<span class="name">${parentFolder.name}</span><input type="checkbox">
        <span class="ico">></span>
        <ul></ul>`;
        f.appendChild(label);
        for(let i = 0 ;i<parentElement.value.lenght;i++){
            if(parentElement.value[i].constructor.name=="string"){
                let fn =document.createElement("li");
                fn.innerHTML = parentFolder.value[i];
                label.lastElementChild.appendChild(fn);
            }else{
                this.createFolderElement(f,parentFolder.value[i]);
            }
        }
        parent.appendChild(f);
    }

    createFolder(name){
        return {"name":name,"value":[]};
    }

    isSameFolderContain(folder,newFolder){
        for(let i = 0;i<folder.length;i++){
            try {
                if(folder[i].name==newFolder){
                    return i;
                }
            } catch (error) {
                
            }
        }
        return -1;
    }

    isPath(path){
        try {
            return new RegExp(`(${this.diskName})*/(\\w+/)*(\\w+)[/]*`,"g").exec(path)[0].length==path.length;
        } catch (error) {
            return false;
        }
    }
}