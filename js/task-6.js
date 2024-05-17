function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
    const boxesContainer = document.querySelector('#boxes');

    const createBtn = controls.querySelector('[data-create]');
    const destroyBtn = controls.querySelector('[data-destroy]');
    const input = controls.querySelector('input');

    createBtn.addEventListener('click', () => {
      const amount = Number(input.value);
      if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
      }
      
      createBoxes(amount);
      input.value = '';
    });

    destroyBtn.addEventListener('click', destroyBoxes);

    function createBoxes(amount) {
      destroyBoxes(); // Clear previous boxes
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(div);
      }
      boxesContainer.appendChild(fragment);
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }