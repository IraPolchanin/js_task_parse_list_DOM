'use strict';

const listEl = document.querySelector('ul');

const convertToNumber = str => Number(str.replace(/[^\d.-]/g, ''));

const sortList = (list, sortParam) =>
  [...list].sort(
    (a, b) =>
      convertToNumber(b.dataset[sortParam]) -
      convertToNumber(a.dataset[sortParam]),
  );

const getEmployees = (sortedList, element) => {
  element.innerHTML = '';

  sortedList.forEach(item => {
    const li = document.createElement('li');

    li.setAttribute('data-position', item.dataset.position);
    li.setAttribute('data-salary', item.dataset.salary);
    li.setAttribute('data-age', item.dataset.age);

    li.textContent = item.innerText;

    element.appendChild(li);
  });
};

const visibleEmployees = sortList([...listEl.children], 'salary');

getEmployees(visibleEmployees, listEl);
