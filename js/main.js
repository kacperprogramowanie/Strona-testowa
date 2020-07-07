function getData(id) {
    return document.getElementById(id).value;
}


function checkEmpty() {
    const elements = ['imie', 'nazwisko', 'email', 'haslo', 'haslo2', 'data','telefon']
    for (let item of elements) {
        if (getData(item) === '') {
            return false;
        }
    }
}

function checkboxCheck(){
    const check = document.getElementById('check');
    if(check.checked === false){
        return false;
    }
}

function passwordCheck(){
    if(getData('haslo') !== getData('haslo2')){
        return false;
    }
}

function emailCheck(){
    const test = /^([A-Za-z0-9\-]*\w)+@+([A-Za-z0-9\-]*\w)+(\.[A-Za-z]*\w)+$/

    if(getData('email').match(test)===null){
        return false;
    }
}


function submit() {
    if(checkEmpty() === false) {
        alert('Wszystkie pola muszą być wypełnione.');
    } else if(passwordCheck() === false){
        alert('Hasła muszą się zgadzać.');
    }else if(emailCheck() === false){
        alert('Niepoprawny adres e-mail');
    }else if (checkboxCheck() === false) {
        alert('Należy zakceptować regulamin.');
    } else {
     document.getElementById('dodano').innerHTML="Pomyślnie dodano użytkownika";
    }
    return;
}