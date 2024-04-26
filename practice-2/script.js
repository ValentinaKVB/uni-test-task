createTable();

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

 async function createTable() {
  const arr = await getData();

  const body = document.querySelector("body");
  const table = document.createElement("table");
  body.appendChild(table);
  const thead = document.createElement("thead");
  const theadRow = document.createElement("tr");
  const userIdColumn = document.createElement("th");
  const postIdColumn = document.createElement("th");
  const postTitleColumn = document.createElement("th");
  const postBodyColumn = document.createElement("th");
  const tbody = document.createElement("tbody");

  userIdColumn.textContent = "ID пользователя";
  postIdColumn.textContent = "ID поста";
  postTitleColumn.textContent = "Название поста";
  postBodyColumn.textContent = "Текст поста";

  theadRow.append(userIdColumn, postIdColumn, postTitleColumn, postBodyColumn);
  thead.appendChild(theadRow);
  table.appendChild(thead);
  table.appendChild(tbody);

  for (let i = 0; i < arr.length; i++) {
    const userId = arr[i].userId;
    const postId = arr[i].id;
    const postTitle = arr[i].title;
    const postBody = arr[i].body;

    const users = tbody.getElementsByTagName("th");

    const row = document.createElement("tr");
    tbody.appendChild(row);


    if (i === 0 ||
      (i > 0 && userId !== arr[i - 1].userId)) {
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
