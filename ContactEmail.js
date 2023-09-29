const ContactForm=document.getElementById('contact-form'),
ContactName=document.getElementById('contact-name'),
ContactNumber=document.getElementById('contact-nuber'),
ContactEmail=document.getElementById('contact-email'),
ContactDescription=document.getElementById('contact-project'),
ContactMessage=document.getElementById('contact-message')
const sendEmail = (e) =>{
e.preventDefault()

if(ContactName.value === '' || ContactEmail.value === '' || ContactDescription.value ===''||ContactNumber.value === '')
{
ContactMessage.classList.remove('colour-blue')
ContactMessage.classList.add('color-red')
ContactMessage.textContent='Write all the input fields'
}else{
emailjs.sendForm('service_17rvauc','template_gy7wgeb','#contact-form','9eXxswOEnIctpM_qC')
.then(()=>{
ContactMessage.classList.add('color-blue')
ContactMessage.textContent='Message sent ✅'

setTimeout(() =>{
ContactMessage.textContent=''
},5000)
},(error) =>{
alert('OOPS ! SOMETHING HAS FAILED....',error)
})

ContactName.value= ''
ContactEmail.value= ''
ContactDescription.value= ''
ContactNumber.value= ''
}
}
ContactForm.addEventListener('submit',sendEmail)