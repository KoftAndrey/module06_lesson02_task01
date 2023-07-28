'use strict';

// создание HTML
const paragraph = document.createElement('p');
const input = document.createElement('input');
input.type = 'text';
document.body.append(input, paragraph);

// функционал
const showInput = () => paragraph.textContent = input.value;

let timeout;

const debounce = () => {
  clearTimeout(timeout);
  timeout = setTimeout(showInput, 300);
};

input.addEventListener('keyup', debounce);

