import { getData, createTable } from "./table.js";

const arr = await getData();
// console.log(arr);

const userIdColumn = document.querySelector("thead th:nth-child(1)");
const postIdColumn = document.querySelector("thead th:nth-child(2)");
const postTitleColumn = document.querySelector("thead th:nth-child(3)");
const postBodyColumn = document.querySelector("thead th:nth-child(4)");
const tbody = document.querySelector("tbody");
const searchInput = document.querySelector("input");
let sorted = false;
let currentFilter = arr;

createTable(arr);

//Сортировка
userIdColumn.addEventListener("click", () => {
  let sortedUsersAscending = currentFilter.toSorted((a, b) => a.userId - b.userId);
  let sortedUsersDescending = sortedUsersAscending.toReversed();

  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  if (!sorted) {
    createTable(sortedUsersDescending);
    sorted = true;
    currentFilter = sortedUsersDescending;
  } else {
    createTable(sortedUsersAscending);
    sorted = false;
    currentFilter = sortedUsersAscending;
  }

})

postIdColumn.addEventListener("click", () => {
  let sortedPostIdAscending = currentFilter.toSorted((a, b) => a.id - b.id);
  let sortedPostIdDescending = sortedPostIdAscending.toReversed();

  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  if (!sorted) {
    createTable(sortedPostIdDescending);
    sorted = true;
    currentFilter = sortedPostIdDescending;

  } else {
    createTable(sortedPostIdAscending);
    sorted = false;
    currentFilter = sortedPostIdAscending;
  }

})

postTitleColumn.addEventListener("click", () => {
  let sortedPostTitleAscending = currentFilter.toSorted((a, b) => a.title.localeCompare(b.title));
  let sortedPostTitleDescending = sortedPostTitleAscending.toReversed();

  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  if (!sorted) {
    createTable(sortedPostTitleDescending);
    sorted = true;
    currentFilter = sortedPostTitleDescending;

  } else {
    createTable(sortedPostTitleAscending);
    sorted = false;
    currentFilter = sortedPostTitleAscending;
  }

})

postBodyColumn.addEventListener("click", () => {
  let sortedPostBodyAscending = currentFilter.toSorted((a, b) => a.body.localeCompare(b.body));
  let sortedPostBodyDescending = sortedPostBodyAscending.toReversed();

  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  if (!sorted) {
    createTable(sortedPostBodyDescending);
    sorted = true;
    currentFilter = sortedPostBodyDescending;

  } else {
    createTable(sortedPostBodyAscending);
    sorted = false;
    currentFilter = sortedPostBodyAscending;
  }

})

searchInput.addEventListener("keyup", () => {

  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  if (searchInput.value.length > 2) {
    currentFilter = arr;
    let filter = searchInput.value.trim().toLowerCase();
    console.log(filter);

    let filteredArray = currentFilter.filter((el) => {
      return el.title.toLowerCase().includes(filter) ||
             el.body.toLowerCase().includes(filter);
    });

    createTable(filteredArray);
    currentFilter = filteredArray;
  } else {
    createTable(arr);
  }
})