const videoCreator=require('./videoCreator');
const pathSaver=require('./writeOutput');
const input=require('./input.json');


function run(url, imageName, videoName, length) {
    videoCreator.videoCreator(url, imageName, videoName, length);
    pathSaver.savePath(videoName);

}
run(input.url, 'facebook', 'facebook', 10);
