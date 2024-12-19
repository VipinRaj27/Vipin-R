// Function to open the product popup with dynamic details
function openPopup(title, price, imageSrc, color1, color2) {
    // Set product details
    document.getElementById('product-title').innerText = title;
    document.getElementById('product-price').innerText = price;
    document.getElementById('product-image').src = imageSrc;
    document.getElementById('color1').innerText = color1;
    document.getElementById('color2').innerText = color2;
  
    // Reset color classes
    document.getElementById('color1div').className = '';
    document.getElementById('color2div').className = '';
  
    // Set color1 class based on the selected color
    switch (color1.toLowerCase()) {
      case 'blue':
        document.getElementById('color1div').className = 'blue';
        break;
      case 'red':
        document.getElementById('color1div').className = 'red';
        break;
      case 'white':
        document.getElementById('color1div').className = 'white';
        break;
      case 'grey':
        document.getElementById('color1div').className = 'grey';
        break;
    }
  
    // Set color2 class based on the selected color
    switch (color2.toLowerCase()) {
      case 'black':
        document.getElementById('color2div').className = 'black';
        break;
      case 'grey':
        document.getElementById('color2div').className = 'grey';
        break;
    }
  
    // Display the popup
    document.getElementById('popup').style.display = 'flex';
  }
  
  // Function to close the product popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // Function to handle selection of color1
  function selectedColor1() {
    document.getElementById('color1').style.backgroundColor = 'black';
    document.getElementById('color1').style.color = 'white';
    document.getElementById('color2').style.backgroundColor = 'white';
    document.getElementById('color2').style.color = 'black';
  }
  
  // Function to handle selection of color2
  function selectedColor2() {
    document.getElementById('color2').style.backgroundColor = 'black';
    document.getElementById('color2').style.color = 'white';
    document.getElementById('color1').style.backgroundColor = 'white';
    document.getElementById('color1').style.color = 'black';
  }