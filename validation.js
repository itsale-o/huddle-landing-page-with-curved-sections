const input = document.getElementById('input');
const span = document.getElementById('span-error');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(){
    input.style.border = '1px solid #FF4242';
    span.style.display = 'block';     
}

function removeError(){
    input.style.border = '';
    span.style.display = 'none';
}

function emailValidate(){
    if(!emailRegex.test(input.value)){
        setError();       
    }else{
        removeError();        
    }
} 