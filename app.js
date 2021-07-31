const webshot = require('webshot');

webshot('google.com', 'google.png', function(err) {
    if(!err){
        console.log('screenshot saved!');
    }
});
