const form = document.getElementById('feedbackForm');
const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
const subjectField = document.getElementById('subjectField');
const messageField = document.getElementById('messageField');

form.addEventListener('submit', function(e){
  e.preventDefault();
  checkInputs();
})

function checkInputs(){
  const nameValue = nameField.value.trim();
  const emailValue = emailField.value.trim();
  const subjectValue = subjectField.value.trim();
  const messageValue = messageField.value.trim();

  if(nameValue === '') {
    setErrorFor(nameField, 'Name cannot be blank');
  } else if (nameValue.length > 255) {
    setErrorFor(nameField, 'Name cannot be more then 255 characters');
  } else {
    clearError(nameField);
  }

  if(emailValue === '') {
    setErrorFor(emailField, 'Email cannot be blank');
  } else if(!isEmail(emailValue)) {
    setErrorFor(emailField, 'Email is not valid');
  } else {
    clearError(emailField);
  }

  if(subjectValue === '') {
    setErrorFor(subjectField, 'Subject cannot be blank');
  } else if (subjectValue.length > 255) {
    setErrorFor(subjectField, 'Subject cannot be more then 255 characters');
  } else {
    clearError(subjectField);
  }

  if(messageValue === '') {
    setErrorFor(messageField, 'Message cannot be blank');
  } else if (messageValue.length > 255) {
    setErrorFor(messageField, 'Message cannot be more then 255 characters');
  } else {
    clearError(messageField);
  }
}

function clearError(input){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = '';
  formControl.className = 'form_control';
}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form_control error';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

