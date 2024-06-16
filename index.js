function stopWatch(){
    let time = '00 : 00'  // represent time in string
    let timerId = null;   // store the id of running timer

    // method to toggle button between start and stop and their functionality too.
    function changeBtnState(){
        const btn = document.querySelector('#startStop');
        
        if(btn.textContent.toLowerCase() === 'start'){
            btn.setAttribute('onclick','stopTimer()');
            btn.textContent = 'Stop';
        }else{
            btn.setAttribute('onclick','startTimer()');
            btn.textContent = 'Start';
        }

        btn.classList.toggle('start');
        btn.classList.toggle('stop');
        
    }

    function startTimer(){
        applyTimer();

        // change the button state 
        changeBtnState();
    }
    
    function stopTimer(){
        clearInterval(timerId);  // clear the running timer
        timerId = null;    // set it value null as no timer is running

        // change the button state 
        changeBtnState();
    }
    
    function resetTimer(){
        timerId && stopTimer();
        time = '00 : 00';
        document.querySelector('.displayTime').textContent = '00 : 00';

    }

    function applyTimer(){

        // set a timer which update time every 1sec
        timerId = setInterval(() => {
            updateTime();
        }, 1000);
    }

    function updateTime(){
        const timeArray = time.split(' : ');   // [00,00]  -> [min, sec]
        let min = Number(timeArray[0]);
        let sec = Number(timeArray[1]);

        sec += 1;

        // sec >= 60 then increase min by 1
        if(sec >= 60){
            min += 1
            sec = 0
        }

        // now forming time string to show ->  min : sec
        const modifiedTime = (min < 10 ? `0${min}` : String(min)) + ' : ' + (sec < 10 ? `0${sec}` : String(sec));

        time = modifiedTime
        document.querySelector('.displayTime').textContent = modifiedTime;
        
    }


    return {startTimer, stopTimer, resetTimer};
}

const {startTimer, stopTimer, resetTimer} = stopWatch();

