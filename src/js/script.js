fetch('src/data/api.json')
.then(response=> {

  if(!response.ok){
    throw new Error("Couldn't retrive information");
  }
   return response.json
})

function getUserData() {



};



function updateUserCard(user) {



};


window.onload = getUserData;

