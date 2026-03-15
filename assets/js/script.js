
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 


  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let password = document.getElementById('password').value;
  let confirm = document.getElementById('confirm').value;

  console.log('Full Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Password:', password);
  console.log('Confirm Password:', confirm);

  alert('Check the console for the submitted data!');

  form.reset();    
});