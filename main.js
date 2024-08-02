document.addEventListener('DOMContentLoaded', function () {
    const DCV = document.getElementById('DCV');
  
    DCV.addEventListener('click', function () {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'cv/FASS-CV.pdf'; 
      downloadLink.download = 'FASS-CV.pdf'; 
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  });
  


  var text = "I am currently pursuing a Master of Business Administration (MBA) specializing in Business Analytics at Saveetha Engineering College, Chennai, with a CGPA of 8.2 up to the first semester (2023-2025). In parallel, I am undertaking a Diploma in Human Resource Management from the University of Madras, Chennai, which I started in 2023 and is ongoing. Previously, I completed my Bachelor of Commerce (B.Com) from Jamal Mohamed College, Trichy, with a CGPA of 8.1 (2020-2023). These academic achievements reflect my commitment to gaining comprehensive knowledge and skills in business, finance, and human resource management, equipping me to contribute effectively to the corporate world.";

  var index = 0;
  var speed = 30; // Speed of typing in milliseconds

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start typing animation when page loads
  window.addEventListener('DOMContentLoaded', function() {
    typeWriter();
  });