const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  const formData = {
    Email: `${email}`,
    Password: `${password}`,
  };
  console.log(formData);

  event.target.reset();
}
