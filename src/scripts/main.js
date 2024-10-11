'use strict';

const listEl = document.querySelector('ul');

const listItemEl = [...document.querySelectorAll('[data-salary]')];

const convertToNumber = (str) => Number(str.replace('$', '').replace(',', ''));

const sortList = (list) =>
  list.sort(
    (a, b) =>
      convertToNumber(b.dataset.salary) - convertToNumber(a.dataset.salary),
  );

const getEmployees = (sortedList, element) => (element.innerHTML = sortedList);

const visibleEmployeesHTML = sortList(listItemEl)
  .map(
    (item) =>
      `<li
        data-position="${item.dataset.position}"
        data-salary="${item.dataset.salary}"
        data-age="${item.dataset.age}"
      >
        ${item.innerText}
      </li>`,
  )
  .join('');

getEmployees(visibleEmployeesHTML, listEl);
