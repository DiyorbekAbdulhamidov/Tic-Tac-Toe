const gamezones = document.querySelectorAll('.gamezone1');
const gamezones2 = document.querySelectorAll('.gamezone2');
const gamezones3 = document.querySelectorAll('.gamezone3');
const game1 = document.querySelector('.game1');
const game2 = document.querySelector('.game2');
const game3 = document.querySelector('.game3');
const xPlayer = document.querySelector('.xPlayer');
const oPlayer = document.querySelector('.oPlayer');
const player1 = document.querySelector('.player1');
const cen = document.querySelector('.cen');
const player2 = document.querySelector('.player2');

function golibIns() {
    if (gamezones[0].innerText === 'X') xPlayer.innerText = +xPlayer.innerText + 1;
    else oPlayer.innerText = +oPlayer.innerText + 1;

    game1.classList.remove('active');
    game1.style.pointerEvents = 'none';
    gamezones.forEach(gamezone => {
        gamezone.style.pointerEvents = 'none';
        gamezone.classList.remove('active');
    });

    game2.classList.add('active');
    gamezones2.forEach(gamezone => {
        gamezone.classList.add('active');
    })
}

function golibIns2() {
    if (gamezones2[0].innerText === 'X') xPlayer.innerText = +xPlayer.innerText + 1;
    else oPlayer.innerText = +oPlayer.innerText + 1;

    game2.classList.remove('active');
    game2.style.pointerEvents = 'none';
    gamezones2.forEach(gamezone => {
        gamezone.style.pointerEvents = 'none';
        gamezone.classList.remove('active');
    });

    game3.classList.add('active');
    gamezones3.forEach(gamezone => {
        gamezone.classList.add('active');
    })
}

function golibIns3() {
    if (gamezones3[0].innerText === 'X') xPlayer.innerText = +xPlayer.innerText + 1;
    else oPlayer.innerText = +oPlayer.innerText + 1;
    if(+xPlayer.innerText > +oPlayer.innerText) {
        cen.innerText = "IS";
        cen.style.color = "white";
        player2.innerText = "WINNER!";
        player2.style.color = "red";
    }
    else {
        player1.innerText = "PLAYER2";
        cen.innerText = "IS";
        cen.style.color = "white";
        player2.innerText = "WINNER!";
        player2.style.color = "red";
    }
    setTimeout(() => {
        location.reload();
    }, 5000);
}

function golib() {
    if (gamezones[0].innerText === gamezones[1].innerText && gamezones[1].innerText == gamezones[2].innerText && gamezones[0].innerText !== '') {
        golibIns();
    }
    if (gamezones[0].innerText === gamezones[3].innerText && gamezones[3].innerText == gamezones[6].innerText && gamezones[0].innerText !== '') {
        golibIns();
    }
    if (gamezones[1].innerText === gamezones[4].innerText && gamezones[4].innerText == gamezones[7].innerText && gamezones[1].innerText !== '') {
        golibIns();
    }
    if (gamezones[2].innerText === gamezones[5].innerText && gamezones[5].innerText == gamezones[8].innerText && gamezones[2].innerText !== '') {
        golibIns();
    }
    if (gamezones[3].innerText === gamezones[4].innerText && gamezones[4].innerText == gamezones[5].innerText && gamezones[3].innerText !== '') {
        golibIns();
    }
    if (gamezones[6].innerText === gamezones[7].innerText && gamezones[7].innerText == gamezones[8].innerText && gamezones[6].innerText !== '') {
        golibIns();
    }
    if (gamezones[0].innerText === gamezones[4].innerText && gamezones[4].innerText == gamezones[8].innerText && gamezones[0].innerText !== '') {
        golibIns();
    }
    if (gamezones[2].innerText === gamezones[4].innerText && gamezones[4].innerText == gamezones[6].innerText && gamezones[2].innerText !== '') {
        golibIns();
    }
}

function golib2() {
    if (gamezones2[0].innerText === gamezones2[1].innerText && gamezones2[1].innerText == gamezones2[2].innerText && gamezones2[0].innerText !== '') {
        golibIns2();
    }
    if (gamezones2[0].innerText === gamezones2[3].innerText && gamezones2[3].innerText == gamezones2[6].innerText && gamezones2[0].innerText !== '') {
        golibIns2();
    }
    if (gamezones2[1].innerText === gamezones2[4].innerText && gamezones2[4].innerText == gamezones2[7].innerText && gamezones2[1].innerText !== '') {
        golibIns2();
    }
    if (gamezones2[2].innerText === gamezones2[5].innerText && gamezones2[5].innerText == gamezones2[8].innerText && gamezones2[2].innerText !== '') {
        golibIns2();
    }
    if (gamezones2[3].innerText === gamezones2[4].innerText && gamezones2[4].innerText == gamezones2[5].innerText && gamezones2[3].innerText !== '') {
        golibIns2();
    }
    if (gamezones2[6].innerText === gamezones2[7].innerText && gamezones2[7].innerText == gamezones2[8].innerText && gamezones2[6].innerText !== '') {
        golibIns2();
    }
    if (gamezones2[0].innerText === gamezones2[4].innerText && gamezones2[4].innerText == gamezones2[8].innerText && gamezones2[0].innerText !== '') {
        golibIns2();
    }
    if (gamezones2[2].innerText === gamezones2[4].innerText && gamezones2[4].innerText == gamezones2[6].innerText && gamezones2[2].innerText !== '') {
        golibIns2();
    }
}

function golib3() {
    if (gamezones3[0].innerText === gamezones3[1].innerText && gamezones3[1].innerText == gamezones3[2].innerText && gamezones3[0].innerText !== '') {
        golibIns3();
    }
    if (gamezones3[0].innerText === gamezones3[3].innerText && gamezones3[3].innerText == gamezones3[6].innerText && gamezones3[0].innerText !== '') {
        golibIns3();
    }
    if (gamezones3[1].innerText === gamezones3[4].innerText && gamezones3[4].innerText == gamezones3[7].innerText && gamezones3[1].innerText !== '') {
        golibIns3();
    }
    if (gamezones3[2].innerText === gamezones3[5].innerText && gamezones3[5].innerText == gamezones3[8].innerText && gamezones3[2].innerText !== '') {
        golibIns3();
    }
    if (gamezones3[3].innerText === gamezones3[4].innerText && gamezones3[4].innerText == gamezones3[5].innerText && gamezones3[3].innerText !== '') {
        golibIns3();
    }
    if (gamezones3[6].innerText === gamezones3[7].innerText && gamezones3[7].innerText == gamezones3[8].innerText && gamezones3[6].innerText !== '') {
        golibIns3();
    }
    if (gamezones3[0].innerText === gamezones3[4].innerText && gamezones3[4].innerText == gamezones3[8].innerText && gamezones3[0].innerText !== '') {
        golibIns3();
    }
    if (gamezones3[2].innerText === gamezones3[4].innerText && gamezones3[4].innerText == gamezones2[6].innerText && gamezones2[2].innerText !== '') {
        golibIns3();
    }
}

let playerX0 = "X";

function round1() {
    gamezones.forEach((gamezone) => {
        gamezone.addEventListener('click', () => {
            if (gamezone.innerText === '') {
                gamezone.innerText = playerX0;
                playerX0 = playerX0 === "X" ? "O" : "X";
                golib();
            }
        });
    });
}
round1();

function round2() {
    gamezones2.forEach((gamezone) => {
        gamezone.addEventListener('click', () => {
            if (gamezone.innerText === '') {
                gamezone.innerText = playerX0;
                playerX0 = playerX0 === "X" ? "O" : "X";
                golib2();
            };
        });
    });
}
round2();

function round3() {
    gamezones3.forEach((gamezone) => {
        gamezone.addEventListener('click', () => {
            if (gamezone.innerText === '') {
                gamezone.innerText = playerX0;
                playerX0 = playerX0 === "X" ? "O" : "X";
                golib3();
            };
        });
    });
}
round3();
