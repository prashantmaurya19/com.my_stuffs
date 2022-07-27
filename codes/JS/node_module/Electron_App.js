module.exports = {
    create: class {
        constructor(lib) {
            this.lib = lib;
            this.app = this.lib.electron.app;
            this.windows = {};
            this.winTemplate = {};
            this.default = {
                webPreferences: {
                    contextIsolation: false,
                    nodeIntegration: true
                },
                windows_exit:(name)=>{
                    this.windows[name] = null;
                },
                app_ready:()=>{
                    for(let i in this.winTemplate){
                        this.createWinHelper(i,this.winTemplate[i]);
                    }
                    this.winTemplate = null;
                },
                app_will_quit:function (){

                }
            };
        }

        setDefault(name, value) {
            this.default[name] = value;
        }

        createWindow(name,obj) {
            this.winTemplate[name] = obj;
        }

        on(name,fun){
            this.lib.ipc.handle(name,fun.bind(this));
        }

        createWinHelper(name,obj){
            this.windows[name] = new this.lib.BrowserWindow({
                webPreferences:this.default["webPreferences"],
                ...obj.options
            });
            this.windows[name].loadFile(obj.url);
            this.windows[name].webContents.openDevTools();
            this.windows[name].on("closed",this.default["windows_exit"].bind(this,name));
        }

        init(){
            this.app.on("ready",this.default["app_ready"].bind(this));
            this.app.on("will-quit",this.default["app_will_quit"].bind(this));
        }
    }
}