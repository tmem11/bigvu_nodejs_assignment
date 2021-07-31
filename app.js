const videoCreator=require('./videoCreator');
const input=require('./input.json');
// async function run(url, imageName, videoName, length) {
    await videoCreator.videoCreator(input.url, 'facebook', 'facebook', 10);



// }
// run(input.url, 'facebook', 'facebook', 10);
