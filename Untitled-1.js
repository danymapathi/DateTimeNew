
function DateTime () {
    let hours, minutes, seconds,  displayTime;
    const timeIndicator = document.querySelector('.indicateur');        
   

    const date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();    

    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();

    // if (hours==0) {
    //     hours=12;
    // }else{
    //     hours= hours;
    // }


    displayTime = `${hours} : ${minutes} : ${seconds} `;
    timeIndicator.innerHTML = displayTime;
    setTimeout(displayDateTime, 1000);    
};
DateTime();