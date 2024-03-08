(function () {
    /* 
    * We  can code here also
    */

    document.addEventListener('DOMContentLoaded', function () {
        const screensDiv = document.getElementById('screens');
        
        screensDiv.innerHTML = screens.screen1();
    }, false);
})();

const screens =  {
    screen1: function () {
        return `
            <div id="screen1">
                <button id="button-screen1" onclick="buttons.buttonScreen1(this)"> hello world </button>
            </div>
        `
    },
    screen2: function () {
        return `
            <div>
                <button id="button-screen2" onclick="buttons.buttonScreen2(this)"> hello world </button>
            </div>
        `
    },
    screen3: function () {
        return `
            <div>
                <p> Hello from screen 3</p>
            </div>
        `
    }
}

const buttons = {
    screens: screens,
    buttonScreen1: function (btn) {
        if (btn) {
    
            const screen1 = btn.parentNode;
            const screens = screen1.parentNode;
    
            screens.innerHTML = this.screens.screen2();
        }
    },
    buttonScreen2: function (btn) {
        if (btn) {
    
            const screen1 = btn.parentNode;
            const screens = screen1.parentNode;
    
            screens.innerHTML = this.screens.screen3();
        }
    }
}