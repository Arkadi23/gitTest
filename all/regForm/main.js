/*
    *Forms submit and validation for inputs
*/
let getDomELem = (id) => {
    return document.querySelector(id);
}

// let checkValue = () => { }

let validation = () => {
    let email = getDomELem('#email').value;
    let name = getDomELem('#name').value;
    let pwd = getDomELem('#pwd').value;
    if (email.length < 2 || name.length < 2 || pwd.length < 2) {
        console.log('error');
        return;
    }
    console.log('Ok');
}


getDomELem('#regForm').onsubmit = (event) => {
    event.preventDefault();
    validation();
}

getDomELem('#logForm').onsubmit = (event) => {
    event.preventDefault();
    console.log('a');
}

