const isValidEmail = (email) => {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
}

const form = document.querySelector('.form');
form.addEventListener("submit", (e)=>{
   
    e.preventDefault();

    const inputs = document.querySelectorAll('input');
    inputs.forEach((input)=>{
        let isemail=input.getAttribute('name')=='email';
        if( input.value == '' || (isemail && !isValidEmail(input.value))){
            let sib = input.nextElementSibling;
            sib.classList.add('error');//label
            sib.nextElementSibling.classList.add('error');//p
            input.classList.add('border-error');
            if(!isemail)
                input.placeholder='';
            else{
                input.classList.add('text-red');
            }
        }
        else{
            let sib = input.nextElementSibling;
            sib.classList.remove('error');//label
            sib.nextElementSibling.classList.remove('error');//p
            input.classList.remove('border-error');
            input.classList.remove('text-red');
        }
    });
});
