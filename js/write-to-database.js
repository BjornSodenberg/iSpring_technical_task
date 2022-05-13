document.querySelector('.feedback_fields').addEventListener('submit', function(e){
  if (e.preDefault) {
    e.preventDefault()
  } else {
    //IE 11 don't have preventDefault
    e.returnValue = false
  };

  const canSendForm = checkCanSendForm();
  console.log("🚀 ~ file: write-to-database.js ~ line 10 ~ document.querySelector ~ canSendForm", canSendForm)
  if (!canSendForm) {
    return;
  }

  const data = new URLSearchParams();
  const formData = new FormData(document.querySelector('form'))
  for (var pair of formData.entries()) {
    data.append(pair[0],pair[1]);
  }

  fetch('./main.php', {
    method: 'POST',
    body: data
  }).then(function(response){
    if (response.status === 200) {
      document.querySelector('.msg').innerHTML = 'Success send your feedback';
    }
  }).catch(function(error){
    document.querySelector('.msg').innerHTML = 'Sorry. We have a problem :(';
  })
})

function checkCanSendForm() {
  const errorFields = document.querySelectorAll('small');
  for(error of errorFields){
    if (error.innerText !== '') {
      return false;
    }
  }

  return true;
}
