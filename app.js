const screenShotTaker=require('./takeScreenShot');
var videoshow = require('videoshow')
//screenShotTaker.takeScreenShot('https://google.com/');
var images = [
     'screenshot.png'
]
var videoOptions = {
    fps: 25,
    loop: 10, // seconds
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

videoshow(images)
    .save('video.mp4')
    .on('start', function (command) {
        console.log('ffmpeg process started:', command)
    })
    .on('error', function (err) {
        console.error('Error:', err)
    })
    .on('end', function (output) {
        console.log('Video created in:', output)
    })

