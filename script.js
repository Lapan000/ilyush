'use strict';

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

function myAnimation(){
    let pos = 0;
    
    const id = setInterval(frame, 10);

    function frame(){
        if(pos === 300){
            clearInterval(id);
        } else{
            box.style.top = `${pos}px`;
            box.style.left = `${pos}px`;
            pos++;
        }
    }
}

btn.addEventListener('click', myAnimation);









