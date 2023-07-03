function isValid(pole, regex){
    if (regex.test(pole.value)){
        console.log('true')
        style(pole, true);
        return true;
    }else {
        console.log('false');
        style(pole, false);
        return false;
    }
}

function isNotEmpty(pole){
    if (pole.value==''){
        style(pole,true);
        return false;
    }else{
        style(pole, true);
        return true;
    }
}

function isChecked(pole){
    if (pole.checked == false){
        style(pole, false);
        return false;
    }else{
        style(pole, true);
        return true;
    }
}

function isSelected(pole){
    let radio =document.getElementsByTagName(pole);
    for (let i=0;i<radio.length;i++){
        if (radio[i].checked == true){
            document.getElementById('i'+pole).innerHTML='';
            return true;
        }
    }
    document.getElementById('i'+pole).innerHTML="Proszę zaznaczyć ocenę!";
    return false;
}

function onSubmit(form){
    if(
        isNotEmpty(form.pers) &&
        isNotEmpty(form.email) &&
        isNotEmpty(form.usluga) &&
        isSelected("ocena") &&
        isNotEmpty(form.komentarz) &&
        isChecked(form.zgoda) 
    ){
        return true;
    }else{
        return false;
    }
}

    function style(pole, status){
    if (status){
        document.getElementById(i+pole.id).innerHTML = '';
        pole.className = 'ok';
    }else {
        document.getElementById(i+pole.id).innerHTML="Uzupełnij to pole!";
        pole.className="Bląd";
    }
}
window.onload = Init;

function Init(){
    let pers = document.getElementById ('pers');
    let persReq = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    pers.onblur = function(){
        isValid(this, persReq);
        }
        let nrklienta=document.getElementById('nrklienta');
        //si:1111-11:10ab
        let nrklientaReg = /^si:\d{4}-\d{2}:\d{1,2}[ab]+$/;
        pers.onblur = function(){
            isValid(this, nrklientaReg);
        }
        let email=document.getElementById('email');
        let emailReq = /^\w+@\w+[.]\w+$/;
        email.onblur = function(){
            isValid(this, emailReg);
        }
        let usluga=document.getElementById('usluga');
        usluga.onblur = function(){
            isNotEmpty(this);
        }
        let komentarz=document.getElementById('komentarz');
        komentarz.onblur= function(){
            isNotEmpty(this);
        }
        let zgoda = document.getElementById('zgoda');
        zgoda.click=function(){
            isChecked(this);
        }
        document
    }