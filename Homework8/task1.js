let myMood;

function iHaveNoIdea() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('yes'), 1000);
    });
}

function veryUpsetNight(myMood) {
    console.log(`Am I very tired?  ${myMood}`)
}

iHaveNoIdea()
.then((myMood) => veryUpsetNight(myMood))