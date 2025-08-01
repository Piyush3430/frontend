let sliderval=document.querySelector('.input-slider');
let para=document.querySelector('.paras');
let indicate=document.querySelector('.indicator')
const uppercaseCheck = document.querySelector(".uppercase");
const lowercaseCheck = document.querySelector(".lowercase");
const numbersCheck = document.querySelector(".numbers");
const symbolsCheck = document.querySelector(".symbols");
// let copybtn=document.querySelector('.copyimg');
let passwordlength=10;
function handleSlider(){
  sliderval.value=passwordlength;
  para.innerText=passwordlength;
  const min=sliderval.min;
  const max=sliderval.max;
  sliderval.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"

  
}
function myFunction() {
  // Get the element by ID
  var copyText = document.querySelector(".vish");

  if (copyText) {  // Check if element exists
      // Create a Range object
      var range = document.createRange();
      
      // Select the text node inside the element
      range.selectNode(copyText);

      // Clear existing selections
      window.getSelection().removeAllRanges();
      
      // Add the range to the selection
      window.getSelection().addRange(range);
      
      // Copy the selected text
      document.execCommand("copy");
      
      // Clear selection after copying
      window.getSelection().removeAllRanges();

      alert("Text copied: " + copyText.innerText);
  } else {
      console.error("Element with ID 'myInput' not found.");
  }
}

sliderval.addEventListener('input',function(e){
  passwordlength=e.target.value;
  handleSlider();


})
