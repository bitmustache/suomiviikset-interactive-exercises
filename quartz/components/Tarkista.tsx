import { QuartzComponentConstructor } from "./types"

const tarkistaScript = `
function checkAnswer(button) {
  const id = button.dataset.id;
  const answer = button.dataset.answer;
  const input = document.getElementById(id);
  const res = document.getElementById(id + '-res');
  const userVal = input.value.trim().toLowerCase();

  if (userVal === answer) {
    res.innerHTML = '\u2705 Hienoa!';
    res.style.color = 'var(--secondary)';
    input.style.borderBottomColor = 'var(--secondary)';
  } else {
    res.innerHTML = '\u274c Yrit\u00e4 uudelleen';
    res.style.color = '#e74c3c';
    input.style.borderBottomColor = '#e74c3c';
  }
}

function attachListeners() {
  const inputs = document.querySelectorAll('.finnish-input');
  inputs.forEach(function(input) {
    if (input.dataset.enterAttached) return;
    input.dataset.enterAttached = 'true';
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const parentDiv = input.closest('div');
        const button = parentDiv.querySelector('.tarkista-btn');
        if (button) {
          button.click();
        }
      }
    });
  });

  const buttons = document.querySelectorAll('.tarkista-btn');
  buttons.forEach(function(button) {
    if (button.dataset.clickAttached) return;
    button.dataset.clickAttached = 'true';
    button.addEventListener('click', function() {
      checkAnswer(button);
    });
  });
}

document.addEventListener('DOMContentLoaded', attachListeners);
document.addEventListener('nav', attachListeners);
`

export default (() => {
  function Tarkista() {
    return null
  }

  Tarkista.afterDOMLoaded = tarkistaScript
  return Tarkista
}) satisfies QuartzComponentConstructor
