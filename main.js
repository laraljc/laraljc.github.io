var modal = document.getElementById('simplemodal');
var projectCard1 = document.getElementsByClassName('project-card')[0];
var projectCard2 = document.getElementsByClassName('project-card')[1];
var projectCard3 = document.getElementsByClassName('project-card')[2];

var closebutton = document.getElementsByClassName('closebutton')[0];

projectCard1.addEventListener('click', openModal);
projectCard2.addEventListener('click', openModal);
projectCard3.addEventListener('click', openModal);

closebutton.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal1() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(e) {
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
