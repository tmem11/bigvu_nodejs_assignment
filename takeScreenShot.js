import captureWebsite from 'capture-website';

async function screenshot(url) {
    await captureWebsite.file(url, 'screenshot3.png');
}
module.exports.takeScreenShot=screenshot;


