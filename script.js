console.log('Hello!');

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const selectedColor = document.getElementById('selectedColor');

console.log('buttons->', buttons.length);
//body.style.backgroundColor = item.value;
buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor = button.value;
    selectedColor.innerText = button.value;
  });
});
