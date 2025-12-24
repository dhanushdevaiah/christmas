const birthdaywish = document.getElementById('birthdaywish');
  const messageParagraph = document.getElementById('messagecontainer');

  function displaybirthdaywish() {
    messagecontainer.textContent = 'MERRY CHRISTMAS!!! 🎉🎉🎉!!';
  }

  birthdaywish.addEventListener('click', displaybirthdaywish);
