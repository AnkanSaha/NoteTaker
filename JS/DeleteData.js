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
           alert("No Data Available with this title");
       }
    }
    else{
        alert("Data Deletation opearation is Cancelled");
        console.log("Data Deletation opearation is Cancelled By The User");
    }
});