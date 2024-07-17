// script.js
let score = 0;
let count = 0;
const audio2 = new Audio('stage.mp3')
const audio = new Audio('pew.mp3');
const johangjae = document.getElementById('johangjae1');
const scoreDisplay = document.getElementById('score');

const images = ['1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG',
'8.JPG','9.JPG','10.JPG','11.JPG','12.JPG','13.JPG','14.JPG',
'15.JPG','16.JPG','17.JPG','18.JPG','19.JPG','20.JPG','21.JPG',
'22.JPG','23.JPG','24.JPG','25.JPG'];//사진 순서대로

let CurrentImageIndex = 0;

johangjae.addEventListener('click', () => {
    audio.play();
    score++; //점수를 증가시켜주는 함수
    count++; //카운트
    johangjae.classList.add('bounce');
    setTimeout(() => {
        johangjae.classList.remove('bounce');
    }, 250);

    scoreDisplay.textContent = score;
    if(count === 10){
    audio2.play();
        CurrentImageIndex = (CurrentImageIndex + 1) % images.length;
    johangjae.src = images[CurrentImageIndex];
    count = 0;
    }

    if(count >= 0){
        scoreDisplay.classList.add('bounce');
    setTimeout(() => {
        scoreDisplay.classList.remove("bounce");
    }, 250);   
    }
});
