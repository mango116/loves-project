document.addEventListener('DOMContentLoaded', function() {
  const yesBtn = document.getElementById('yesbtn');
  const noBtn = document.getElementById('nobtn');
  const question = document.getElementById('klma');

  // Event listener for the "Yes" button
  yesBtn.addEventListener('click', function() {
      question.textContent = '😊 I knew it! I love you too!';
      yesBtn.style.display = 'none';
      noBtn.style.display = 'none';
  });

  // Event listener for the "No" button
  noBtn.addEventListener('click', function() {
      question.textContent = '😢 Oh... maybe next time!';
      yesBtn.style.display = 'none';
      noBtn.style.display = 'none';
  });
});
