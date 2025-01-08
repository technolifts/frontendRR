document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animated');
      }, index * 300); // Delay each animation by 300ms
    });
  });
  