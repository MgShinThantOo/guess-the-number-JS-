let answer = Math.floor(Math.random() * 50)
let guess_no =document.querySelector('#guess_no');
let msg1 = document.querySelector('.msg1');
let msg2 = document.querySelector('.msg2');
let msg3 = document.querySelector('.msg3');
let guess_btn = document.querySelector('#guess_btn');
let record = [];
let chance = 10;
msg2.innerHTML = `Answer chance - <span class="warning"> ${chance}</span>`
console.log(answer)

function play() {
    if(chance != 1){
        if(guess_no.value <= 0 || guess_no.value >= 50){
            msg1.innerHTML = `<span class="warning">Please Enter Number between 0 and 50.</span>`
        }else{ 
                record.push(guess_no.value);
                if(guess_no.value > answer){
                    msg1.innerHTML = `<span class="warning">Your answer is hight </span>`;
                    chance--;
                    msg2.innerHTML = `Answer chance - <span class="warning"> ${chance}</span>`;
                    msg3.innerHTML = `Your guess Record - ${record}`;
                    document.querySelector('.container').classList.add('wrong')
                }else if(guess_no.value < answer){
                    msg1.innerHTML = `<span class="warning">Your answer is low </span>`;
                    chance--;
                    msg2.innerHTML = `Answer chance - <span class="warning"> ${chance}</span>`;
                    msg3.innerHTML = `Your guess Record - ${record}`
                    document.querySelector('.container').classList.add('wrong')
                }else if(guess_no.value == answer){
                    msg1.innerHTML = `<span class="good">Congratulation! Your guess correct.Please click Restart Button </span>`;
                    msg2.innerHTML = `Answer chance - <span class="warning"> ${chance}</span>`;
                    msg3.innerHTML = `Your guess Record - ${record}`;
                    document.querySelector('.container').classList.add('success')
                    guess_btn.disabled = true;
                    guess_no.disabled = true;
                }
            }
    }else{
        record.push(guess_no.value);
        guess_no.disabled = true;
        guess_btn.disabled = true;
        msg1.innerHTML = `<span class="warning">Your answer chance is done.Please click restart button. </span>`;
        msg2.innerHTML = `Answer chance - <span class="warning"> ${chance-1}</span>`;
        msg3.innerHTML = `Your guess Record - ${record}`;
    }
    guess_no.value = '';
}

function restart() {
    document.querySelector('.container').classList.remove('success');
    document.querySelector('.container').classList.remove('wrong');
    guess_btn.disabled = false;
    guess_no.disabled = false;
    chance = 10;
    record =[];
    msg1.innerHTML = ``;
    msg2.innerHTML = `Answer chance - <span class="warning"> ${chance}</span>`;
    msg3.innerHTML = ``
}