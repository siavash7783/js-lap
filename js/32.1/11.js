function charNumbergenerator(length) {
    
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let number ='0123456789'
    let charactersLength = characters.length;
    let numberLength= number.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength + numberLength));
}
}
document.body.textContent=charNumbergenerator(8);