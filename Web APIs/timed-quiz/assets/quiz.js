(function () {

    document.addEventListener('DOMContentLoaded', function (screen, buttons) {
        const screensDiv = document.getElementById('screens');
        
        screensDiv.innerHTML = screens.startScreen();
    }, false);
})();

const screens =  {
    startScreen: function () {
        return `
            <div id="screen1" class="column">
                <h1>Coding quiz challenge</h1>
                <p id="description"> In this quiz, you'll test your knowledge of fundamental
                 programming concepts. You'll be presented with five multiple-choice questions
                  covering various aspects of programming languages and development. 
                  Each question will have four possible answers, but only one is correct. </p>
                  <p>
                    You have ${75} seconds to complete the quiz.
                  </p>
                <button id="button-screen1" onclick="buttons.start(this)"> Start quiz! </button>
            </div>
        `
    },
    quizScreen1: function () {
        return `
            <div>
                <h2>Question 1: What is the purpose of a loop in programming?</h2>
                <button class="button-screen" onclick="buttons.quizScreen1.button1(this)"> To execute a block of code multiple times </button>
                <button class="button-screen" onclick="buttons.quizScreen1.button2(this)"> To define a function </button>
                <button class="button-screen" onclick="buttons.quizScreen1.button3(this)"> To perform mathematical calculations </button>
                <button class="button-screen" onclick="buttons.quizScreen1.button4(this)"> To print output to the console </button>
            </div>
        `
    },
    quizScreen2: function () {
        return `
            <div>
                <h2>Question 2: Which data type is used to store a single character in most programming languages?</h2>
                <button class="button-screen" onclick="buttons.quizScreen2.button1(this)"> Integer </button>
                <button class="button-screen" onclick="buttons.quizScreen2.button2(this)"> String </button>
                <button class="button-screen" onclick="buttons.quizScreen2.button3(this)"> Boolean </button>
                <button class="button-screen" onclick="buttons.quizScreen2.button4(this)"> Character </button>
            </div>
        `
    },
    quizScreen3: function () {
        return `
            <div>
                <h2>Question 3: What does the acronym "HTML" stand for in web development?</h2>
                <button class="button-screen" onclick="buttons.quizScreen3.button1(this)"> Hyper Text Markup Language </button>
                <button class="button-screen" onclick="buttons.quizScreen3.button2(this)"> High-level Text Manipulation Language </button>
                <button class="button-screen" onclick="buttons.quizScreen3.button3(this)"> Home Tool Markup Language </button>
                <button class="button-screen" onclick="buttons.quizScreen3.button4(this)"> Hyperlinks and Text Markup Language </button>
            </div>
        `
    },
    quizScreen4: function () {
        return `
            <div>
                <h2>Question 4: In JavaScript, what is the property used to get the length of a list or a string?</h2>
                <button class="button-screen" onclick="buttons.quizScreen4.button1(this)"> size </button>
                <button class="button-screen" onclick="buttons.quizScreen4.button2(this)"> length </button>
                <button class="button-screen" onclick="buttons.quizScreen4.button3(this)"> count </button>
                <button class="button-screen" onclick="buttons.quizScreen4.button4(this)"> len </button>
                <button class="button-screen" onclick="buttons.quizScreen4.button5(this)"> amount </button>
            </div>
        `
    },
    quizScreen5: function () {
        return `
            <div>
                <h2>Question 5: What does the term "IDE" stand for in the context of programming?</h2>
                <button class="button-screen" onclick="buttons.quizScreen5.button1(this)"> Integrated Development Environment </button>
                <button class="button-screen" onclick="buttons.quizScreen5.button2(this)"> Interactive Debugging Environment </button>
                <button class="button-screen" onclick="buttons.quizScreen5.button3(this)"> Internet Development Extension </button>
                <button class="button-screen" onclick="buttons.quizScreen5.button4(this)"> Integrated Design Engine </button>
                <button class="button-screen" onclick="buttons.quizScreen5.button5(this)"> Industrial Design Entrepreneur </button>
            </div>
        `
    },
    scoreScreen: function () {
        return `
            <div class="column">
                <h2>Score Screen!!</h2>
                <input id="user-name" type="text" name="name" placeholder="What's your name">
                <button id="button-screen" onclick="buttons.buttonHighScoresScreen(this)"> Submit </button>
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
                <h1>High scores!!</h1>
                ${scoresTables}
                <div class="row">
                <button id="button-screen" onclick="buttons.buttonGoToStartScreen(this)"> Go back!</button>
                <button id="button-screen" onclick="buttons.clearHighScores(this)"> Clear scores</button></div>
                
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
            document.getElementById('timeleft').innerText = 'Time: '
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

                timer -= 10;
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

                timer -= 10;
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
                document.getElementById('timeleft').innerText = '';
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

var highscores = localStorage.getItem('highscores ');

if (!highscores) {
    highscores = [];
    localStorage.setItem('highscores', JSON.stringify(highscores));
}