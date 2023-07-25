'use strict';

const paragraph = document.createElement('p');

const input = document.createElement('input');
input.type = 'text';
input.addEventListener('input', () => {
  setTimeout(() => {
    paragraph.textContent = input.value;
  }, 300);
});

document.body.append(input, paragraph);

