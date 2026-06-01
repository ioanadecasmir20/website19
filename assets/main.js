const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
const form=document.querySelector('[data-form]');
if(form){form.addEventListener('submit',e=>{e.preventDefault();alert('Thank you. This demo form is ready to connect to your email/CRM.');});}
