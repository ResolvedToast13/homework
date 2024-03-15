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
                <h1 id="head">Coding quiz challenge</h1>
                <p id="description"> Try to answer the following code related questions within the time<br> limit. Keep in mind that incorrect answers will penalize yout time<br> score by ten seconds! </p>
                <button id="button-screen1" onclick="buttons.start(this)"> Start quiz! </button>
            </div>
        `
    },
    quizScreen1: function () {
        return `
            <div>
                <button class="button-screen" onclick="buttons.quizScreen1.button1(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen1.button2(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen1.button3(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen1.button4(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen1.button5(this)"> hello world </button>
            </div>
        `
    },
    quizScreen2: function () {
        return `
            <div>
                <button class="button-screen" onclick="buttons.quizScreen2.button1(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen2.button2(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen2.button3(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen2.button4(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen2.button5(this)"> hello world </button>
            </div>
        `
    },
    quizScreen3: function () {
        return `
            <div>
                <button class="button-screen" onclick="buttons.quizScreen3.button1(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen3.button2(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen3.button3(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen3.button4(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen3.button5(this)"> hello world </button>
            </div>
        `
    },
    quizScreen4: function () {
        return `
            <div>
                <button class="button-screen" onclick="buttons.quizScreen4.button1(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen4.button2(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen4.button3(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen4.button4(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen4.button5(this)"> hello world </button>
            </div>
        `
    },
    quizScreen5: function () {
        return `
            <div>
                <button class="button-screen" onclick="buttons.quizScreen5.button1(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen5.button2(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen5.button3(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen5.button4(this)"> hello world </button>
                <button class="button-screen" onclick="buttons.quizScreen5.button5(this)"> hello world </button>
            </div>
        `
    },
    scoreScreen: function () {
        return `
            <div>
                <p>Score Screen!!</p>
                <input id="user-name" type="text" name="name">
                <button id="button-screen" onclick="buttons.buttonHighScoresScreen(this)"> hello world </button>
            </div>
        `
    },
    highScoresScreen: function() {
        const highscores = Array.from(JSON.parse(localStorage.getItem('highscores')));

        let scoresTables = '<table id="scores-table">';
        for (let i = 0; i < highscores.length; i++) {
            scoresTables = `${scoresTables}<tr>`; //row
            
            const scoreKeys = Object.keys(highscores[i]);
            for (let j = 0; j < scoreKeys.length; j++) {
                scoresTables = `${scoresTables}<td>${highscores[i][scoreKeys[j]]}</td>` //column
            }
            
            scoresTables = `${scoresTables}</tr>`
        }
        scoresTables = `${scoresTables}</table>`

        return `
            <div>
                <p>High scores!!</p>
                ${scoresTables}
                <button id="button-screen" onclick="buttons.buttonGoToStartScreen(this)"> Go back!</button>
                <button id="button-screen" onclick="buttons.clearHighScores(this)"> Clear scores</button>
            </div>
        `
    },
}

let timer = 0;
let interval = undefined;
const startTimer = function (screensHTML, screen) {
    const interval = setInterval(function () {
        if (timer > -1) {
            document.getElementById('countdown').innerHTML = timer;
            timer--;
        } else {
            screensHTML.innerHTML = screens.scoreScreen();
            clearInterval(interval);
        }
        if (timer  == 74) {
            screensHTML.innerHTML = screen();
        }
    }, 1000);
    return interval;
};

const buttons = {
    screens: screens,
    start: function (btn) {
        if (btn) {
            btn.disabled = true;
            const screen = btn.parentNode;
            const screens = screen.parentNode;

            timer = 75;
            interval = startTimer(screens, this.screens.quizScreen1);
        }
    },
    quizScreen1: {
        screens: screens,
        button1: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen2();
            }
        },
        button2: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen2();
            }
        },
        button3: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen2();
            }
        },
        button4: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;

                screens.innerHTML = this.screens.quizScreen2();
            }
        },
        button5: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen2();
            }
        },
    },
    quizScreen2: {
        screens: screens,
        button1: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;

                screens.innerHTML = this.screens.quizScreen3();
            }
        },
        button2: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen3();
            }
        },
        button3: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen3();
            }
        },
        button4: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;

                timer -= 10;
                screens.innerHTML = this.screens.quizScreen3();
            }
        },
        button5: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen3();
            }
        },
    },
    quizScreen3: {
        screens: screens,
        button1: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen4();
            }
        },
        button2: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen4();
            }
        },
        button3: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;

                screens.innerHTML = this.screens.quizScreen4();
            }
        },
        button4: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;

                timer -= 10;
                screens.innerHTML = this.screens.quizScreen4();
            }
        },
        button5: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen4();
            }
        },
    },
    quizScreen4: {
        screens: screens,
        button1: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen5();
            }
        },
        button2: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;

                screens.innerHTML = this.screens.quizScreen5();
            }
        },
        button3: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen5();
            }
        },
        button4: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;

                timer -= 10;
                screens.innerHTML = this.screens.quizScreen5();
            }
        },
        button5: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                screens.innerHTML = this.screens.quizScreen5();
            }
        },
    },
    quizScreen5: {
        screens: screens,
        button1: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;

                clearInterval(interval);
                screens.innerHTML = this.screens.scoreScreen();
            }
        },
        button2: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                clearInterval(interval);
                screens.innerHTML = this.screens.scoreScreen();
            }
        },
        button3: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                clearInterval(interval);
                screens.innerHTML = this.screens.scoreScreen();
            }
        },
        button4: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;

                timer -= 10;
                clearInterval(interval);
                screens.innerHTML = this.screens.scoreScreen();
            }
        },
        button5: function(btn) {
            if (btn) {
                const screen = btn.parentNode;
                const screens = screen.parentNode;
                
                timer -= 10;
                clearInterval(interval);
                screens.innerHTML = this.screens.scoreScreen();
            }
        },
    },
    buttonHighScoresScreen: function (btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;

            const highscores = JSON.parse(localStorage.getItem('highscores'));
            
            const name = document.getElementById('user-name');
            const score = document.getElementById('countdown');
            highscores.push({
                name: name.value,
                score: score.textContent
            });
            localStorage.setItem('highscores', JSON.stringify(highscores));
        
            score.innerHTML = '';
            screens.innerHTML = this.screens.highScoresScreen();
        }
    },
    viewHighScores: function (btn) {
        if (btn) {
            const screens = document.getElementById('screens');

            screens.innerHTML = this.screens.highScoresScreen();
        }
    },
    buttonGoToStartScreen: function (btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;
            
            const score = document.getElementById('countdown');
            if (score) {
                score.innerHTML = null;
            }

            screens.innerHTML = this.screens.startScreen();
        }
    },
    clearHighScores: function(btn) {
        if (btn) {
            const screen = btn.parentNode;
            const screens = screen.parentNode;

            localStorage.setItem('highscores', JSON.stringify([]))
            screens.innerHTML = this.screens.highScoresScreen();
        }
    }
}

const highscores = [];
localStorage.setItem('highscores', JSON.stringify(highscores))