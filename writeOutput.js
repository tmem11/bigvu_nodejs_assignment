const fs=require('fs');
function savePath(videoName) {
    const newObject={
        file:__dirname+"/"+videoName+".mp4"
    }
    const jsonString=JSON.stringify(newObject);
    fs.writeFile('./output.json',JSON.stringify(newObject),err => {
        if(err){
            console.log(err);}
    })
}
module.exports.savePath=savePath;
