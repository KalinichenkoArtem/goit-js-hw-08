import Player from '@vimeo/player';
console.log(Player);
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const KEY_LOCAL = "videoplayer-current-time";

const player = new Player(iframe);

player.on('timeupdate', function (data) {
    const timeOff = JSON.stringify(data);
    localStorage.setItem(KEY_LOCAL, timeOff);
});

const timeOn = JSON.parse(localStorage.getItem(KEY_LOCAL));
let timeMove = timeOn;

console.log(timeMove.seconds);

player.setCurrentTime(timeMove.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});