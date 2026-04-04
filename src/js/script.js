
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

document.querySelector('body').innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <img id="student-image" class="card-img-top" alt="Student Image">
            <div class="card-body">
              <h5 id="student-name" class="card-title">${user.name}</h5>
              <p id="student-email" class="card-text">${user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  fetch('https://picsum.photos/400/300')
    .then(response => {
      document.querySelector('#student-image').src = response.url;
    });
    
};


window.onload = getUserData;




/*
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
  document.querySelector('body').innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <img id="student-image" class="card-img-top" alt="Student Image">
            <div class="card-body">
              <h5 id="student-name" class="card-title">${user.name}</h5>
              <p id="student-email" class="card-text">${user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  fetch('https://picsum.photos/400/300')
    .then(response => {
      document.querySelector('#student-image').src = response.url;
    });
}

window.onload = getUserData;
*/