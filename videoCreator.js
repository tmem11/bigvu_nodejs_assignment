const screenShotTaker=require('./takeScreenShot');
var videoshow = require('videoshow')
function initImagesList(imageName){
    var images = [
        imageName+'.png'
    ]
    return images
}
function initVideoOptions(lenth){
    var videoOptions = {
        fps: 25,
        loop: lenth, // seconds
        transition: true,
        transitionDuration: 1, // seconds
        videoBitrate: 1024,
        videoCodec: 'libx264',
        size: '640x?',
        audioBitrate: '128k',
        audioChannels: 2,
        format: 'mp4',
        pixelFormat: 'yuv420p'
    }
    return videoOptions

}

function convertImageToVideo(videoName,imageName,lengh) {
    videoshow(initImagesList(imageName), initVideoOptions(lengh))
        .save(videoName+'.mp4')
        .on('start', function (command) {
            console.log('ffmpeg process started:', command);
        })
        .on('error', function (err) {
            console.error('Error:', err);
        })
        .on('end', function (output) {
            console.log('the video is ready !!');
            console.log('Video created in:', output);
        })

}
async function createVideo(url, imageName, videoName, lengh) {
    await screenShotTaker.takeScreenShot('https://youtube.com/', imageName);
    convertImageToVideo(videoName, imageName, lengh)
}
module.exports.videoCreator=createVideo;
