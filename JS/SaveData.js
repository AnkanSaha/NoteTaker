// data submitting process start here
let submit = document.getElementById('submitdata');
submit.addEventListener('click', ()=>{
    const title =  document.getElementById('exampleInputEmail1').value
    const data = document.getElementById('exampleInputPassword1').value
    const titleindicator = document.getElementById('exampleInputEmail1');
    const Dataindicator = document.getElementById('exampleInputPassword1');
    if (title.length < 3){
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
                alert("Oparetion Cancelled by the user");
            }
        }
        else if(data == ""){
            Dataindicator.style.border = "2px solid red"
            alert("Blank Data Can't be Save");
        }

    }
    else if(title.length > 3){
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
            alert("Blank Data Can't be save");
            Dataindicator.style.border = "2px solid red"
        }
}
        else if(permission == false){
            alert("Oparetion Cancelled by the user");
        }
    }
});
