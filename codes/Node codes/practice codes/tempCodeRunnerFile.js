
    if(err){
        console.log(err);
    }else{
        files.forEach((file)=>{
            let a  = regex.exec(file)
            if(a!=null){
                
                fs.renameSync(`${folder}/${file}`,`${folder}/${a[0]+" "+file.replace(a[0],"").toUpperCase()}`);

            }
        });
    }
});