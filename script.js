const qrImg = document.querySelector('#qr-img');
const input = document.querySelector('#input');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    const inputValue = input.value;
    if(!inputValue){
        alert('Please enter a valid url');
    }else{
        const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        qrImg.src = qrCode;
    }
   
});