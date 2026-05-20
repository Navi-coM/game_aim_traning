'use strict';

const btnStart = document.querySelector('#start');
const allScrens = document.querySelectorAll('.screen');
const listTimes = document.querySelector('#time_list');
const listSizes = document.querySelector('#size_list');
const timeCounter = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#15e943', '#f31212', '#12c3f0', '#f3e51e', '#e914a9'];

let time = 0;
let score = 0;

btnStart.addEventListener('click', (e) => {
    e.preventDefault();
    allScrens[0].classList.add('up');
});

listTimes.addEventListener('click', (e) => {
    if (!e.target.dataset.time) return;
    time = parseInt(e.target.dataset.time);
    allScrens[2].classList.add('up');
    startGame();
});

listSizes.addEventListener('click', (e) => {
    allScrens[1].classList.add('up');

    if (!e.target.dataset.width || !e.target.dataset.height) {
        return;
    } else {
        board.style.width = e.target.dataset.width + 'px';
        board.style.height = e.target.dataset.height + 'px';
    };

});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let currentTime = --time;
        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }
        setTime(currentTime);
    }
}

function setTime(value) {
    timeCounter.innerHTML = `00:${value}`;
}

function finishGame() {
    timeCounter.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomnumber(15, 40);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomnumber(0, width - size);
    const y = getRandomnumber(0, height - size);
    // 

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    // 

    board.append(circle);
}

function getRandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

//  ДЗ -----------------------------------

// 1. Написать функцию которая будет брать массив цветов colors и генераировать рандомный 
// цвет из тех что в массиве и добавить этот цвет в createRandomCircle