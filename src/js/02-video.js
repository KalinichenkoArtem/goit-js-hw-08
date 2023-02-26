import Player from '@vimeo/player';
console.log(Player);
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const KEY_LOCAL = "videoplayer-current-time";

const player = new Player(iframe);

player.on('timeupdate', throttle(function (data) {
    const timeOff = JSON.stringify(Math.round(data.seconds));
   localStorage.setItem(KEY_LOCAL, timeOff);
}), 1000);

const timeOn = JSON.parse(localStorage.getItem(KEY_LOCAL));
console.log(timeOn);
player.setCurrentTime(timeOn);