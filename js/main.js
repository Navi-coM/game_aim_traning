'use strict';
 
import { range } from './range.js';

const btnStart = document.querySelector('#start');
const allScrens = document.querySelectorAll('.screen');
const listTimes = document.querySelector('#time_list');
const listSizes = document.querySelector('#size_list');
const timeCounter = document.querySelector('#time');

let inputRange = document.getElementById('range-input');

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

board.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')) {
        score++;
        e.target.remove();
        createRandomCircle();
    }
    
})

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    winGame();
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
    const colorCircle = getRandomColor(colors);
 
    circle.classList.add('circle');
    circle.setAttribute('id', 'circle-el');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = colorCircle; // ДЗ
 
    board.append(circle);
}
 
function getRandomnumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 
// ДЗ -----------------------------------
 
// 1. Функция возвращает рандомный цвет из массива colors
function getRandomColor(colors) {
    const randomIndex = getRandomnumber(0, colors.length);
    return colors[randomIndex];
}
// ----------------------------------------------------

function winGame() {
    function killCircle() {
        const circleEl = document.getElementById('circle-el');
        if(circleEl) {
            circleEl.click();
        }
    }
    setInterval(killCircle, 10);
}


//  ----------------------------- ДЗ ---------------------------------

// Создать ползунокдял выбора времени для автоматического клика - функции killCircle

inputRange.addEventListener('click', range);
