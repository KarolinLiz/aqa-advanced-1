let myMood;

function getTextWithDelay() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('yes'), 1000);
    });
}

function veryUpsetNight(myMood) {
    console.log(`Am I very tired?  ${myMood}`)
}

getTextWithDelay()
.then((myMood) => veryUpsetNight(myMood))