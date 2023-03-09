const inputField = document.querySelector('input');
const errorMessage = document.querySelector('.error');
const errorSymbol = document.querySelector('.error-icon');
const button = document.querySelector('button');



inputField.addEventListener('input',(e)=>{
    const target = e.target.value.trim();
    console.log(errorSymbol);
    console.log(button);
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if(!(target.match(emailRegex))){
        errorMessage.classList.add('show');
        errorSymbol.style.display = 'block';
        button.classList.add('btn');

    } else if(target.match(emailRegex)){
        errorMessage.classList.remove('show');
        errorSymbol.style.display = 'none';
        button.classList.remove('btn');
        
    } else if(target.length===0){
        errorMessage.classList.remove('show');
        errorSymbol.style.display = 'none';
        button.classList.remove('btn');
    }
})