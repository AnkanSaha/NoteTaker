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