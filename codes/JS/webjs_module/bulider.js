const LibLoader = require("C:/Users/prashant/Downloads/Stuff/codes/JS/node_module/LibLoader");
const lib = new LibLoader({
    fs: {
        requireType: "attribute",
        main: "C:/Users/prashant/Downloads/Stuff/codes/JS/node_module/file_i_o_util"
    },
    path: {
        requireType: "attribute",
        main: "path"
    }
});

class Builder {
    constructor() {
        /*
        
        */
        this.exceptions = {
            PATH_NOT_EXITS: "[Path is not Exits]",
            FILE_AlREADY_EXITS: "[File is Exits Already]",
            FILE_NOT_EXITS: "[File is Not Exits]",
            ITEMS_NOT_FOUND : "[Item Not Found]",
            DEPENDENCIE_SOURCE_NOT_EXITS: "[Dependencie's Source Does Not Exists]",
            INCUMPATABLE_REQUEST_TYPE: '[requests.type is Not a valid option : (function|class)]'
        }
        this.current_task = null;
        this.output = {
            fileString: ""
        }
        this.regex = {
            file_name: /\w+\.js/g,
            html_spliter: /<\/body>/g,
            libPath: "\\lib\\",
            server_script_tag: /<script.*src.*=.*"http:\/\/localhost:8800\/.*><\/script>/g,
            everything_except_last: /.+\w/g,
            everything_except_first: /\w.+/g,
            function: [/function\s*FUNCTION_NAME\s*\([^\)]*\)\s*\{/g, /window\s*\.\s*FUNCTION_NAME\s*=\s*function\s*\([^\)]*\)\s*\{/g]
        };
    }

    getLibPath(name) {
        return __dirname + this.regex.libPath + name;
    }

    createRegex(type, name, i) {
        return new RegExp(this.regex[type][i].toString().replace((type + "_name").toUpperCase(), name).replace(/^\//g, "").replace(/\/g$/, ""), "g");
    }

    getStringBetweenCurlyBrackets(str, index) {
        let stack = [str[index]];
        let i = index;
        while (stack.length > 0 && i < str.length) {
            i++;
            if (str[i] == "}") {
                stack.pop();
            }
            if (str[i] == "{") {
                stack.push("{");
            }
        }
        return str.slice(index, i);
    }

    mergeStr(obj) {
        switch (obj.use) {
            case "regex": {
                return obj.regex[0].exec(obj.str[0])[0] + obj.regex[1].exec(obj.str[1])[0];
            }
            break;
        case "slice": {
            return obj.str[0].slice(obj.x[0], obj.y[0]) + obj.str[1].slice(obj.x[1], obj.y[1])
        }
        break;
        }
    }

    displayError(msg, i) {
        console.log(`\t Build Request : ${i} > Expection ${msg}`);
    }

    handleRequests(obj, i, j) {
        let libpath = this.getLibPath(obj.file);
        if (lib.fs.exists(libpath)) {
            let denpend = lib.fs.readSync(libpath);
            if (this.regex[obj.type]) {
                for (let k in obj.items) {
                    let starter = this.createRegex(obj.type, obj.items[k], [0]).exec(denpend);
                    for (let r = 1; r < this.regex[obj.type].length && starter == null; r++) {
                        starter = this.createRegex(obj.type, obj.items[k], r).exec(denpend);
                    }
                    if (starter == null) {
                        this.displayError(this.exceptions.ITEMS_NOT_FOUND,`${i} \\${j} \\${obj.items[k]}`);
                        continue;
                    }
                    let index = starter.index + starter[0].length;
                    let body = this.getStringBetweenCurlyBrackets(denpend, index);
                    this.output.fileString = this.output.fileString + "\n" + starter[0] + body + "};";
                }
            } else {
                this.displayError(this.exceptions.INCUMPATABLE_REQUEST_TYPE, `${i} \\${j}`);
            }
        } else {
            this.displayError(this.exceptions.DEPENDENCIE_SOURCE_NOT_EXITS, `${i} \\${j}`);
        }
    }

    getScriptStr(scr) {
        return `<script src="${scr}"></script>`;
    }

    build(path) {
        if (lib.fs.exists(path)) {
            this.current_task = lib.fs.readJsonSync(path);
            for (let i in this.current_task) {
                console.time(`Build ${i} In `);
                if (lib.fs.exists(this.current_task[i].entry)) {
                    for (let j in this.current_task[i].requests) {
                        this.handleRequests(this.current_task[i].requests[j], i, j);
                    }
                    //reset the output
                    let htmlstr = lib.fs.readSync(this.current_task[i].entry).replace(this.regex.server_script_tag,"");
                    let arr = htmlstr.split(this.regex.html_spliter);
                    let output_info = lib.path.parse(this.mergeStr({
                        use: 'slice',
                        str: [this.current_task[i].root, this.current_task[i].output],
                        x: [0, 1],
                        y: [this.current_task[i].root[this.current_task[i].root.length-1]=="/"||this.current_task[i].root[this.current_task[i].root.length-1]=="\\" ? -1 : this.current_task[i].root.length, this.current_task[i].output.length]
                    }));
                    // console.log("dependencies located here",output_info.dir + (output_info.dir.indexOf("\\")!=-1 ? "\\" : "/") + output_info.base);
                    lib.fs.createFolder(output_info.dir);
                    lib.fs.writeSync(this.current_task[0].entry, arr[0]+ "</body>" + this.getScriptStr(this.current_task[i].output) + arr[1]);
                    lib.fs.writeSync(output_info.dir + "\\" + output_info.base,this.output.fileString.replace(/[\r\n\t]/g,"").replace(/\s+/g," "));
                    this.output.fileString = "";
                } else {
                    this.displayError(this.exceptions.FILE_NOT_EXITS, i);
                    continue;
                }
                console.timeEnd(`Build ${i} In `);
            }
        } else {
            throw this.exceptions.PATH_NOT_EXITS;
        }
    }
}
// console.log(process.argv);

const build = new Builder();

build.build(process.argv[2]);