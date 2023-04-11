let clicks = 0;
let clickers_level_one = 0;
let clickers_level_two = 0;
document.querySelector('#click-amount').innerHTML = clicks;

clickAdd = () => {
    clicks++;
    document.querySelector('#click-amount').innerHTML = clicks;
}

buyLevelOneClicker = () => {
    if (clicks >= 10) {
        clicks = clicks - 10;
        clickers_level_one++;
        document.querySelector('#level-one-click-amount');
    }
}

buyLevelTwoClicker = () => {
    if (clicks >= 50) {
        clicks = clicks - 50;
        clickers_level_two++;
        document.querySelector('#level-two-click-amount');
    }
}

window.setInterval(function() {
    if (clickers_level_one > 0) {
        clickAdd()
    }
    if (clickers_level_two > 0) {
        clickAdd()
        clickAdd()
    }
}, 1000)