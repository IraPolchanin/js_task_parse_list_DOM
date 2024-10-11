'use strict';

const listEl = document.querySelector('ul');

const convertToNumber = (str) => Number(str.replace('$', '').replace(',', ''));

const sortList = (list, sortParam) =>
  list.sort(
    (a, b) =>
      convertToNumber(b.dataset[sortParam]) -
      convertToNumber(a.dataset[sortParam]),
  );

const getEmployees = (sortedList, element) => (element.innerHTML = sortedList);

const visibleEmployeesHTML = sortList([...listEl.children], 'salary')
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
