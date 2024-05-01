export { getData, createTable };

async function getData() {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  catch (error) {
    console.error(error.message);
  }
}

//В этом задании общую часть таблицы для удобства создала в index.html
 async function createTable(array) {
  // const array = await getData();

  // const body = document.querySelector("body");
  // const table = document.querySelector("table");
  // const thead = document.querySelector("thead");
  const tbody = document.querySelector("tbody");
  const users = tbody.getElementsByTagName("th");

  for (let i = 0; i < array.length; i++) {
    const userId = array[i].userId;
    const postId = array[i].id;
    const postTitle = array[i].title;
    const postBody = array[i].body;

    const row = document.createElement("tr");
    tbody.appendChild(row);


    if (i === 0 ||
      (i > 0 && userId !== array[i - 1].userId)) {
      const userRow = document.createElement("th");
      userRow.textContent = userId;
      row.appendChild(userRow);
    } else {
      users[users.length - 1].rowSpan += 1;
    }


    const postIdCell = document.createElement("td");
    const postTitleCell = document.createElement("td");
    const postBodyCell = document.createElement("td");

    postIdCell.textContent = postId;
    postTitleCell.textContent = postTitle;
    postBodyCell.textContent = postBody;

    row.append(postIdCell, postTitleCell, postBodyCell);

  }
}
