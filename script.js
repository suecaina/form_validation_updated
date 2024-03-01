function validation(){
    if (//enter a username 
        document.Formfill.Username.value == ""){
        document.getElementById('result').innerHTML='Enter Username';
        return false;
    } 
    //username if less than 6 characters
    else if (document.Formfill.Username.value.length < 6){
        document.getElementById('result').innerHTML= 'Username must contain at least 6 characters'
        return false;
    }
    //email
    else if (document.Formfill.Email.value == ""){
        document.getElementById('result').innerHTML = 'Enter your email';
        return false;
    }
   //password
   else if (document.Formfill.Password.value == ""){
    document.getElementById('result').innerHTML = 'Enter your password';
    return false;
   }
   //confirm password
   else if (document.Formfill.CPassword.value == ""){
    document.getElementById('result').innerHTML = 'Enter confirm password';
    return false;
   }
   //password match
   else if (document.Formfill.Password.value  !== document.Formfill.CPassword.value){
    document.getElementById('result').innerHTML = "Password doesn't match";
    return false
   }
   //if password is less than 6 characters
   else if (document.Formfill.Password.value.length < 6){
    document.getElementById('result').innerHTML = "Password must be at least 6 characters";
    return false;
   }
   //if cpassword is less than 6 characters
   else if (document.Formfill.CPassword.value.length < 6){
    document.getElementById('result').innerHTML = "Password must be at least 6 characters";
    return false;
    }
    //if password matches
   else if (document.Formfill.CPassword.value == document.Formfill.Password.value){
    popup.classList.add('open-slide');
    return false;
   }
}

let popup = document.getElementById('popup');

function closeSlide(){
   popup.classList.remove('open-slide')
}