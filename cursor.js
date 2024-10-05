function spark(event) {
    let csor = document.createElement("csor");
    // Set the position of the element based on the mouse event
    csor.style.left = event.pageX + "px";
    csor.style.top = event.pageY + "px";
  
    // Randomly scale the element
    csor.style.transform = `scale(${Math.random() * 2 + 1})`;
  
    // Set random transition values
    csor.style.setProperty("--x", getRandomTransitionValue());
    csor.style.setProperty("--y", getRandomTransitionValue());
    document.body.appendChild(csor);
  
    // Remove the element after 2 seconds
    setTimeout(() => {
      document.body.removeChild(csor);
    }, 2000);
  };
  
  function getRandomTransitionValue() {
    // Generate a random value between -200 and 200 pixels
    return `${Math.random() * 400 - 200}px`;
  }
  
  // Add event listener to track mouse movements and create spark effect
  document.addEventListener("mousemove", spark);
  