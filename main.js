 const mail = document.getElementById("mail");
 mail.addEventListener('click', (e)=>{
    let erreur;
    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++){
        if(!inputs[i].value){
            erreur = "please check your email";
        }
        
    }
    if(erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false
    }else{
        alert('formulaire envoyé!');
    }
 })
