const { error } = require("console");
const fs = require("fs");

//writeFile
fs.writeFile("created.txt","file created",(error)=>{
    if(error){
        console.log("Error",error);
    }else{
        console.log("done");
    }
});






//appendFile (Append file means the file which is created already an you want to add some text then we use appendFile)

fs.appendFile("created.txt","added some more text using appendfile sunny",(error)=>{
    if(error){
        console.log("Error occur",error);
    }else{
        console.log("done to append text");
    }
});






//rename (renamefile is used to rename the existing file name)
fs.rename("Created.txt","sunnyRename.txt",(error)=>{
    if(error){
        console.log("error occur to renaming the files",error);
    }else{
        console.log("successfully renaming the file name");
    }
});



//copyfile(this is used to copy the existing file ) 
fs.copyFile("sunnyRename.txt","./added/copyFile.txt",(err)=>{
    if(err){
        console.log("error ocuur",err.message);
    }else{
        console.log("done working properly");
    }
});

fs.appendFile("./added/copyFile.txt","added some text",(err)=>{
    if(err){
        console.log("Error Occur",err.message);
    }else{
        console.log("Added successfully text");
    }
});

//unlink(this is used to delete the file ) 
fs.unlink("./added/copyFile.txt",(error)=>{
    if(error){
        console.log("Error Occur",error.message);
    }else{
        console.log("Working Properly Deleted This");
    }
});

//rmdir(this file is used to delete the directory if dirctory that cannot contain anyfile inside it. If it contain any file inside it then we use {recursive:true} which is mention below this is used to delete the file forecly bydefault it contain recursive:false )

fs.rmdir("./path",{recursive:true},(error)=>{
    if(error){
        console.log("rmdir is used to delete the directory bole tho folder",error.message);
    }else{
        console.log("deleted folder successfully");
    }
})