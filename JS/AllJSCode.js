let submit = document.getElementById('submitdata');
submit.addEventListener('click', ()=>{
    const title =  document.getElementById('exampleInputEmail1').value
    const data = document.getElementById('exampleInputPassword1').value
    const titleindicator = document.getElementById('exampleInputEmail1');
    const Dataindicator = document.getElementById('exampleInputPassword1');
    if (title.length < 3){
        navigator.vibrate(300)
        alert('Minimum 3 Charecter Requied');
        titleindicator.style.border = "2px solid red"
    }
    else if(title.length == 3){
        if(data != ""){
            let permission = confirm("Are You Sure to Save This Data?");
            if(permission == true){
               let validate = localStorage.getItem(title);
               if(validate == null){
                localStorage.setItem(title, data);
                titleindicator.style.border = "2px solid green"
                Dataindicator.style.border ="2px solid green"
                alert("Data Saved Securely To The Internet");
               }
               else if(validate != null){
                alert("Title Aleady Exist on our Server, Please Choose Another title for this data");
               }
              
            }
            else if(permission == false){
                navigator.vibrate(250)
                alert("Oparetion Cancelled by the user");
            }
        }
        else if(data == ""){
            navigator.vibrate(250)
            Dataindicator.style.border = "2px solid red"
            alert("Blank Data Can't be Save");
        }

    }
    else if(title.length > 3){
        navigator.vibrate('100')
        if(data != ""){
            let permission = confirm("Are You Sure to Save This Data?");
            if(permission == true){
                let validate = localStorage.getItem(title);
                if(validate == null){
                 localStorage.setItem(title, data);
                 titleindicator.style.border = "2px solid green"
                 Dataindicator.style.border ="2px solid green"
                 alert("Data Saved Securely To The Internet");
                }
                else if(validate != null){
                    alert("Title Aleady Exist on our Server, Please Choose Another title for this data");
                }
     
        }
        else if(data == ""){
            navigator.vibrate(200)
            alert("Blank Data Can't be save");
            Dataindicator.style.border = "2px solid red"
        }
}
        else if(permission == false){
            navigator.vibrate(50)
            alert("Oparetion Cancelled by the user");
        }
    }
});

//  Data Searching Progress Start Here
let search = document.getElementById('searchnow');
search.addEventListener('click', ()=>{
const searchtitle = document.getElementById('searchtext').value
const searched = localStorage.getItem(searchtitle);
console.log(searched);

if(searchtitle != ""){
    if(searched == null){
        navigator.vibrate(150)
        alert("No Data Found By This Title");
        document.getElementById('DeleteData').style.visibility = "hidden"
    }
    else{
        document.getElementById('result').innerHTML = searched
    document.getElementById('DeleteData').style.visibility = "Visible"
    document.getElementById('result').style.visibility = "visible"
    }
    
}
else if(searchtitle == ""){
    navigator.vibrate(100)
    alert("You Haven't Entered Any Title");
}
});


document.getElementById('result').addEventListener('contextmenu', (m)=>{
    m.preventDefault();
    navigator.vibrate(400)
    alert("Don't Try To Be Oversmart");
}, false);

// Data Deletation Process Start Here
let deleter = document.getElementById('DeleteData');
deleter.addEventListener('click', ()=>{
    var searchtitle = document.getElementById('searchtext').value
    let permission = confirm("Are you Sure To Delete this Data ?");
    if(permission == true){
        let searched = localStorage.getItem(searchtitle);
       if (searched != null){
        localStorage.removeItem(searchtitle);
        document.getElementById('DeleteData').style.visibility = "hidden"
        document.getElementById('result').style.visibility = "hidden"
        alert("Your data has deleted succesfully From Our Server");
       }
       else{
           navigator.vibrate(500)
           alert("No Data Available with this title");
       }
    }
    else{
        navigator.vibrate(200)
        alert("Data Deletation opearation is Cancelled");
        console.log("Data Deletation opearation is Cancelled By The User");
    }
});

// Time Generator
setInterval(()=>{
    const ctime = document.getElementById('time');
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

    // Font Effect
const Title = document.getElementById('exampleInputEmail1');
const Data = document.getElementById('exampleInputPassword1');
const result = document.getElementById('result');


Title.addEventListener('paste', (T)=>{
    T.preventDefault();
    alert("Paste Not Allowed")
}, false);
Title.addEventListener('copy', (T)=>{
    T.preventDefault();
    alert("Copy Not Allowed");
}, false);


Data.addEventListener('paste', (D)=>{
    D.preventDefault();
    alert("Paste Not Allowed");
}, false);
Data.addEventListener('copy', (D)=>{
    D.preventDefault();
    alert('Copy Not Allowed');
}, false);

result.addEventListener('copy', (R)=>{
    R.preventDefault();
    alert("Copy Not Allowed")
})

// Disable Right Click
//  document.addEventListener("contextmenu", (A)=>{
//      A.preventDefault();
//      alert("Don't Try To Be Oversmart")
//    }, false);

// Mode Changer
document.getElementById('modechanger').addEventListener('click', ()=>{
    let Modes = document.getElementById('ModeText').innerText
    console.log(Modes)
    if(Modes == "Light Mode"){
        localStorage.setItem("Mode", Modes)
        document.getElementById('Bodys').style.backgroundColor = 'black'
        document.getElementById('Bodys').style.color = 'white'
        document.getElementById('ModeText').innerText = "Dark Mode"
    }
    else if(Modes == "Dark Mode"){
        localStorage.setItem("Mode", Modes)
        document.getElementById('Bodys').style.backgroundColor = 'white'
        document.getElementById('Bodys').style.color = 'black'
        document.getElementById('ModeText').innerText = "Light Mode"
    }
})

// version Details


// Version Value

Value = "5.1 (stable)"
let version = document.getElementById('version')
version.innerText = "Current Version"+" : "+Value

// Auto Mode 
function automodechanger(){
    let cmode = localStorage.getItem("Mode");
    if(cmode == "Light Mode"){
        document.getElementById('Bodys').style.backgroundColor = 'black'
        document.getElementById('Bodys').style.color = 'white'
        document.getElementById('ModeText').innerText = "Dark Mode"
    }
    else if(cmode == "Dark Mode"){
        document.getElementById('Bodys').style.backgroundColor = 'white'
        document.getElementById('Bodys').style.color = 'black'
        document.getElementById('ModeText').innerText = "Light Mode"
    }
}
// Run Auto Modes 
automodechanger()

// Website Maintanance Time 
setInterval(()=>{
    let ctime = new Date();
    let hours = ctime.getHours();
    console.log(hours)
    if(hours > 0 && hours < 6){
        alert("This Website is under Daily Maintanance. Please Visit after 6 A.M")
    }
}, 1000);

// Online/Offline Detector 
setInterval(OnlineDetector, 1000);

function OnlineDetector(){
    let statues = window.navigator.onLine
    console.log(statues)
    if(statues == true){
        console.log("You are online & Connected To server");
        document.getElementById('modechanger').style.visibility = "visible"
    }
    else if(statues == false){
        console.log("You are now offline & DisConnected To server");
        alert("You are offline & Disconnected from Server");
        document.getElementById('result').innerText = "You are currently offline"
        document.getElementById('modechanger').style.visibility = "hidden"
    }
}

// Run This Detector First Time only 
function OnlineDetectorForFirstTime(){
    let statues = window.navigator.onLine
    console.log(statues)
    if(statues == true){
        console.log("You are online & Connected To server");
        alert("Successfully Connected To Server");
        document.getElementById('modechanger').style.visibility = "visible"
    }
    else if(statues == false){
        console.log("You are now offline & DisConnected To server");
        alert("You are offline & Disconnected from Server");
        document.getElementById('result').innerText = "You are currently offline"
        document.getElementById('modechanger').style.visibility = "hidden"
    }
}
OnlineDetectorForFirstTime()
