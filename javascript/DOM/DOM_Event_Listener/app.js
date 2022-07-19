/**Dom Manipulation */

//Event listner

//element.addEventListener("click", function())

const button2 = document.querySelector('.btn-2');

function alertBtn(){
    alert('I love javascript too')
}

button2.addEventListener("click", alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector('.box3');

function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'blue';

};

newBackgroundColor.addEventListener("mouseover",changeBgColor)

//reveal event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn');
    }else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click',revealContent)



