document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.js-spanize');
  
    elements.forEach(function(element) {
      var text = element.textContent.trim();
      var spanizedText = text.split('').map(function(char) {
        return '<span>' + char + '</span>';
      }).join('');
  
      element.innerHTML = spanizedText;
    });
  });
  

  