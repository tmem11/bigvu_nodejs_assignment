const Pageres = require('pageres');

async function screenshot(url,filename) {
    await new  Pageres({filename:filename})
        .src(url,['1280x1024'])
        .dest(__dirname)
        .run();

    console.log('Finished generating screenshot!');
}
module.exports.takeScreenShot=screenshot;


