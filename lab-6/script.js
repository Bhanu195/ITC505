document.addEventListener('DOMContentLoaded', () => {
    const interactiveDiv = document.getElementById('js-interactive');
  
    const button = document.createElement('button');
    button.textContent = 'Click me for a message!';
    button.addEventListener('click', () => {
        alert('Hello! This is a JavaScript interaction.');
    });
    
    interactiveDiv.appendChild(button);
});
