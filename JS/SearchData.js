//  Data Searching Progress Start Here
let search = document.getElementById('searchnow');
search.addEventListener('click', ()=>{
const searchtitle = document.getElementById('searchtext').value
const searched = localStorage.getItem(searchtitle);
console.log(searched);

if(searchtitle != ""){
    if(searched == null){
        alert("No Data Found By This Title");
        document.getElementById('DeleteData').style.visibility = "hidden"
    }
    else if(searched == "Current Time"){
       searchtime()
    }
    else{
        document.getElementById('result').innerHTML = searched
    document.getElementById('DeleteData').style.visibility = "Visible"
    document.getElementById('result').style.visibility = "visible"
    }
    
}
else if(searchtitle == ""){
    alert("You Haven't Entered Any Title");
}
});


document.getElementById('result').addEventListener('contextmenu', (m)=>{
    m.preventDefault();
    alert("Don't Try To Be Oversmart");
}, false);





function searchtime(){
// Time Generator
setInterval(()=>{
    const ctime = document.getElementById('result');
    const ctimer = new Date();
    let hour = ctimer.getHours();
    let minutes = ctimer.getMinutes();
    let seconds = ctimer.getSeconds();
    let divider
    
    // Placing AM/PM System
    if(hour > 12){
        divider = "PM"
    }
    else if(hour == 12){
        divider = "PM"
    }
    else if(hour < 12){
        divider = "AM"
    }
    
    // placing 0 in front of minutes
    if(minutes < 9){
        minutes = "0"+minutes
    }
    else if(minutes == 9){
        minutes = "0"+minutes
    }
    
    // Placing 0 in Front of seconds
    if(seconds < 9){
        seconds = "0"+seconds
    }
    else if(seconds == 9){
        seconds = "0"+seconds
    }
    
    // Correction at After PM
    if(hour == 13){
        hour = "01"
    }
    else if(hour == 14){
        hour = "02"
    }
    else if(hour == 15){
        hour = "03"
    }
    else if(hour == 16){
        hour = "04"
    }
    else if(hour == 17){
        hour = "05"
    }
    else if(hour == 18){
        hour = "06"
    }
    else if(hour == 19){
        hour = "07"
    }
    else if(hour == 20){
        hour = "08"
    }
    else if(hour == 21){
        hour = "09"
    }
    else if(hour == 22){
        hour = "10"
    }
    else if(hour == 23){
        hour = "11"
    }
    
    let finaltime = "Current Time is - "+ hour+" : "+ minutes+" : "+ seconds+" "+ divider

    localStorage.setItem('Current Time', finaltime);
    let timeshow = localStorage.getItem('Current Time');

    ctime.innerText = timeshow
    }, 50);
}