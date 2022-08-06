window.addEventListener('load', ()=>{
   
    let play = document.querySelector('.play');
    let reset = document.querySelector('.reset');
    let pause = document.querySelector('.pause');
   
     let seconds = 0;
     let minutes = 0;
     let hours = 0;

     let leadingSeconds = 0;
     let leadingMinutes = 0;
     let leadingHours = 0;
    


    function stopWatch () {
        seconds++
            if (seconds/60 === 1){
            seconds = 0;
            minutes++
        
            if (minutes/60 === 1){
            minutes = 0;
            hours++
        }
        }

        if (seconds < 10){
            leadingSeconds = '0' + seconds
        }
        else {
            leadingSeconds= seconds;
        }
        if (minutes< 10){
            leadingMinutes= '0' + minutes
        }
        else {
            leadingMinutes = minutes;
        }
        if ( hours < 24){
            leadingHours = '0' + hours
        }

              let timer = document.querySelector('.timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;

}

        let timerInterval= null;
        let timerStatus = 'start'

        play.addEventListener('click', ()=>{
            if (timerStatus === 'start')    {
                timerInterval = window.setInterval(stopWatch , 100);
                document.querySelector('.play').classList.add('pause');
                document.querySelector('.play').innerHTML= 'PAUSE'
                timerStatus= 'stop'
            }
            else{
                timerInterval= window.clearInterval(timerInterval);
                document.querySelector('.play').classList.remove('pause');
                document.querySelector('.play').innerHTML = "PLAY";
                timerStatus= 'start';
                
            }
        })
        reset.addEventListener('click', ()=>{
            timerInterval= window.clearInterval(timerInterval);
            seconds=0;
            minutes=0;
            hours=0;

            document.querySelector('.timer').innerText= "00:00:00";
            document.querySelector('.play').classList.remove('pause');
            document.querySelector('.play').innerHTML = "PLAY";

        })  



let clicker = document.querySelector('.ccontainer')
let questions= document.querySelectorAll('.question')
let answers = document.querySelectorAll('.answer');

questions[0].addEventListener('click' , (e)=>{
    answers[0].classList.toggle('active')
})
questions[1].addEventListener('click' , (e)=>{
    answers[1].classList.toggle('active')
})

questions[2].addEventListener('click' , (e)=>{
    answers[2].classList.toggle('active')
})


})