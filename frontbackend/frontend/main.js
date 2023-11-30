const inputid = document.getElementById('inputid');
const inputUsername = document.getElementById('inputUsername');
const inputDarab = document.getElementById('inputDarab');
const buttonUpdate = document.querySelector('#update');
const buttonDelete = document.querySelector('#delete');
const buttonSelect = document.querySelector('#select');

function showAllUsers(users) {
  let html = "";
  const tableBody = document.getElementById("clients-table").getElementsByTagName("tbody")[0];

  console.log('Received users from server:', users);

  users.forEach(user => {
      console.log('Processing user:', user);
      html += `
          <tr>
              <td style="text-align:center">${user.darab}</td>
              <td style="text-align:center">${user.id}</td>
              <td style="text-align:center">${user.username}</td>
          </tr>
      `;
  });

  console.log('Generated HTML:', html);

  // Set the innerHTML of the table body
  tableBody.innerHTML = html;
}

// frontend js
document.getElementById('fetchClientsButton').addEventListener('click', getAllClients);

async function getAllClients() {
    let endpoint = "http://localhost:3000";
    try {
        const response = await fetch(endpoint);
        const users = await response.json();
        showAllUsers(users);    
    } catch (error) {
        console.log(error);
    }
}


buttonDelete.addEventListener('click', async () => {
    let url = `https://retoolapi.dev/Hfa9uy/data/${inputid.value}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
  });
  const user = await response.json();
  beviteliMezoAlaphelyzetbe();
  getAllUsers();
  inputid.value = "";
  inputUsername.value = "";
  inputDarab.value = "1";
  } catch (error) {
    console.log(error);
  }
});

buttonUpdate.addEventListener("click", async () => {
  let url = `https://retoolapi.dev/Hfa9uy/data/${inputid.value}`;
  let data = {
      username: inputUsername.value,
      darab: inputDarab.value
  };
  try {
      const response = await fetch(url, {
          method: "PUT",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify(data)
      });
      const user = await response.json();
      beviteliMezoAlaphelyzetbe();
      getAllUsers();
  } catch (error) {
      console.log(error);
  }
});