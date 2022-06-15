setInterval(() => {
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
}, 1000);