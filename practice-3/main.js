import { getData, createTable } from "./table.js";

const arr = await getData();
// console.log(arr);

const body = document.querySelector("body");
const userIdColumn = document.querySelector("thead th:nth-child(1)");
const postIdColumn = document.querySelector("thead th:nth-child(2)");
const postTitleColumn = document.querySelector("thead th:nth-child(3)");
const postBodyColumn = document.querySelector("thead th:nth-child(4)");
const tbody = document.querySelector("tbody");
const searchInput = document.querySelector("input");
const resetButton = document.querySelector(".clear-filter");
let sorted = false;
let currentFilter = arr;


createTable(arr);

//Сортировка
userIdColumn.addEventListener("click", () => {
  let sortedUsersAscending = currentFilter.toSorted((a, b) => a.userId - b.userId);
  // let sortedUsersDescending = currentFilter.toSorted((a, b) => b.userId - a.userId);
  let sortedUsersDescending = sortedUsersAscending.toReversed();


  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  if (!sorted) {
    createTable(sortedUsersDescending);
    sorted = true;
    currentSorting = sortedUsersDescending;
  } else {
    createTable(sortedUsersAscending);
    sorted = false;
    currentSorting = sortedUsersAscending;

  }

})

postIdColumn.addEventListener("click", () => {
  let sortedPostIdAscending = currentFilter.toSorted((a, b) => a.id - b.id);
  // let sortedPostIdDescending = currentFilter.toSorted((a, b) => b.id - a.id);
  let sortedPostIdDescending = sortedPostIdAscending.toReversed();


  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  if (!sorted) {
    createTable(sortedPostIdDescending);
    sorted = true;
    currentSorting = sortedPostIdDescending;

  } else {
    createTable(sortedPostIdAscending);
    sorted = false;
    currentSorting = sortedPostIdAscending;

  }

})

postTitleColumn.addEventListener("click", () => {
  let sortedPostTitleAscending = currentFilter.toSorted((a, b) => a.title.localeCompare(b.title));
  // let sortedPostTitleDescending = currentFilter.toSorted((a, b) => b.title.localeCompare(a.title));
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
  // let sortedPostBodyDescending = currentFilter.toSorted((a, b) => b.body.localeCompare(a.body));
  let sortedPostBodyDescending = sortedPostBodyAscending.toReversed();


  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  if (!sorted) {
    createTable(sortedPostBodyDescending);
    sorted = true;
    currentSorting = sortedPostBodyDescending;

  } else {
    createTable(sortedPostBodyAscending);
    sorted = false;
    currentSorting = sortedPostBodyAscending;

  }

})

searchInput.addEventListener("keyup", () => {
  currentFilter = arr;

  if (searchInput.value.length > 2) {
    console.log("filtered");
    let filter = searchInput.value.trim().toLowerCase();
    console.log(filter);

    let filteredArray = currentFilter.filter((el) => {
      return el.title.toLowerCase().includes(filter) ||
        el.body.toLowerCase().includes(filter);
    });

    while (tbody.firstChild) {
      tbody.firstChild.remove();
    }

    createTable(filteredArray);
    currentFilter = filteredArray;
  }
})

resetButton.addEventListener("click", () => {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
  createTable(arr);
  currentFilter = arr;
})