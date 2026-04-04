
function getUserData() {
  fetch('src/data/api.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Couldn't retrieve information");
      }
      return response.json();
    })
    .then(data => {
      const user = JSON.parse(JSON.stringify(data));
      updateUserCard(user);
    })
    .catch(error => console.error(error));
}


function updateUserCard(user) {
  document.querySelector('#user-name').textContent = user.name;
  document.querySelector('#user-email').textContent = user.email;

  fetch('https://picsum.photos/400/300')
    .then(response => {
      document.querySelector('#student-image').src = response.url;
    });
}
document.querySelector('#next-button').addEventListener('click', getUserData);


window.onload = getUserData;



