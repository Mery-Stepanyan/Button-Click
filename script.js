const button = document.getElementById('changeTextButton');
  const paragraph = document.getElementById('textParagraph');

  
  button.addEventListener('click', function() {
    
    paragraph.textContent = 'New text after button click!';
  });