document.addEventListener('DOMContentLoaded', function () {
  const DCV = document.getElementById('DCV');

  DCV.addEventListener('click', function () {
      const downloadLink = document.createElement('a');
      downloadLink.href = 'cv/Fassil.pdf'; 
      downloadLink.download = 'Fassil.pdf'; 
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  });
});

;