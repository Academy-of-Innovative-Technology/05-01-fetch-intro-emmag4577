let students = [];
let currentIndex = 0;

window.onload = function () {
  getUserData();
  document.querySelector('#next-button').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % students.length;
    updateUserCard(students[currentIndex]);
  });
};

function getUserData() {
  fetch('src/data/api.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Couldn't retrieve information");
      }
      return response.json();
    })
    .then(data => {
      students = JSON.parse(JSON.stringify(data.results));
      updateUserCard(students[currentIndex]);
    })
    .catch(error => console.error(error));
}

function updateUserCard(user) {
  document.querySelector('#student-name').textContent = user.firstName + " " + user.lastName;
  document.querySelector('#student-email').textContent = user.email;

  fetch('https://picsum.photos/400/300')
    .then(response => {
      document.querySelector('#student-image').src = response.url;
    });
}