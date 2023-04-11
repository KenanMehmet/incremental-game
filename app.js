let clicks = 0;
let clickers_level_one = 0;
let clickers_level_two = 0;
document.querySelector('#click-amount').innerHTML = clicks

clickAdd = () => {
    clicks++;
    document.querySelector('#click-amount').innerHTML = clicks
}



