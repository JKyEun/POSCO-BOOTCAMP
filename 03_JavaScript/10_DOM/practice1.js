const orangeLi = document.querySelector('.orange');
const skyBlueLi = document.getElementById('skyblue');
const secondLi = document.querySelector('li:nth-child(2)');
const firstOrangeLi = document.querySelector('.orange:first-child');

console.log(orangeLi);

console.log(skyBlueLi);

secondLi.classList.add('orange');
console.log(secondLi);

if (firstOrangeLi.classList.contains('orange')) {
  firstOrangeLi.classList.remove('orange');
  firstOrangeLi.classList.add('skyblue');
}
console.log(firstOrangeLi);

const skyblue = document.getElementsByClassName('skyblue');
console.log(skyblue);

skyblue[0].innerText = 'hi';