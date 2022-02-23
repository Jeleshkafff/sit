"use strict";
let arr = [{
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  }
]

function createSelectEl(arr, str) {
  const body = document.body;
  const select = body.appendChild(document.createElement('select'));

  arr.forEach(function(el) {
    const option = document.createElement('option');
    option.value = el.value;
    option.innerHTML = el.label;

    select.appendChild(option)
    if (option.value === str) {
      option.setAttribute('selected', true);
    }
  });

  return select
}

createSelectEl(arr, '2')