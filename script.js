const texts = [
    "Electronics Engineer",
    "Data Analyst",
    "AI Enthusiast",
    "Future Innovator"
  ];
  
  let speed = 100;
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  const typingElement = document.getElementById("typing");
  
  function typeEffect() {
  
    let currentText = texts[index];
  
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentText.substring(0, charIndex++);
    }
  
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
  
    setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
  }
  
  typeEffect();
  