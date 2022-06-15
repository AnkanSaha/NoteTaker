setInterval(()=>{
    let ctime = new Date();
    let hours = ctime.getHours();
    console.log(hours)
    if(hours > 0 && hours < 6){
        alert("This Website is under Daily Maintanance. Please Visit after 6 A.M")
    }
}, 10000)