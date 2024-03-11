(function () {

    document.addEventListener('DOMContentLoaded', function (screen, buttons) {
        const screensDiv = document.getElementById('screens');
        
        screensDiv.innerHTML = screens.startScreen();
    }, false);
})();

const screens =  {
    startScreen: function () {
        return `
            <div id="screen1">
                <h1>Coding quiz challenge</h1>
                <p id="description"> description </p>
                <button id="button-screen1" onclick="buttons.start(this)"> Start quiz! </button>
            </div>
        `
    },
    quizScreen1: function () {
        return `
            <div>
                <button id="button-screen2" onclick="buttons.buttonqScreen2(this)"> hello world </button>
            </div>
        `
    },
    quizScreen2: function () {
        return `
            <div>
                <button id="button-screen2" onclick="buttons.buttonqScreen3(this)"> hello world </button>
            </div>
        `
    },
    quizScreen3: function () {
        return `
            <div>
                <button id="button-screen2" onclick="buttons.buttonqScreen4(this)"> hello world </button>
            </div>
        `
    },
    quizScreen4: function () {
        return `
            <div>
                <button id="button-screen2" onclick="buttons.buttonqScreen5(this)"> hello world </button>
            </div>
        `
    },
    quizScreen5: function () {
        return `
            <div>
                <button id="button-screen2" onclick="buttons.buttonScoreScreen(this)"> hello world </button>
            </div>
        `
    },
    scoreScreen: function () {
        return `
            <div>
                <p>Score Screen!!</p>
                <input id="user-name" type="text" name="name">
                <button id="button-screen2" onclick="buttons.buttonHighScoresScreen(this)"> hello world </button>
            </div>
        `
    },
    highScoresScreen: function() {
        console.log(JSON.parse(localStorage.getItem('highscores')));
        return `
            <div>
                <p>High scores!!</p>
                <button id="button-screen2" onclick="buttons.buttonGoToStartScreen(this)"> Go back!</button>
            </div>
        `
    },
}

let timer = 0
const startTimer = function (screens, screen) {
    setInterval(function () {
        if (timer > 0) {
            document.getElementById('countdown').innerHTML = timer
            timer--;
        }
        if (timer  == 74) {
            screens.innerHTML = screen();
        }
    }, 1000);
    
};

const buttons = {
    screens: screens,
    start: function (btn) {
        if (btn) {
            btn.disabled = true;
            const screen = btn.parentNode;
            const screens = screen.parentNode;

            timer = 75;
            startTimer(screens, this.screens.quizScreen1);
        }
    },
    buttonqScreen2: function (btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;
    
            screens.innerHTML = this.screens.quizScreen2();
        }
    },
    buttonqScreen3: function (btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;
    
            screens.innerHTML = this.screens.quizScreen3();
        }
    },
    buttonqScreen4: function (btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;
    
            screens.innerHTML = this.screens.quizScreen4();
        }
    },
    buttonqScreen5: function (btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;
    
            screens.innerHTML = this.screens.quizScreen5();
        }
    },
    buttonScoreScreen: function (btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;
            timer = 0;
            
            screens.innerHTML = this.screens.scoreScreen();
        }
    },
    buttonHighScoresScreen: function (btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;

            const highscores = JSON.parse(localStorage.getItem('highscores'));
            
            const name = document.getElementById('user-name');
            const score = document.getElementById('countdown');
            console.log(name, score);
            highscores.push({
                name: name.value,
                score: score.textContent
            });
            localStorage.setItem('highscores', JSON.stringify(highscores))

            
            screens.innerHTML = this.screens.highScoresScreen();
        }
    },
    buttonGoToStartScreen: function (btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;
            
            screens.innerHTML = this.screens.startScreen();
        }
    }
}

const highscores = [];
localStorage.setItem('highscores', JSON.stringify(highscores))