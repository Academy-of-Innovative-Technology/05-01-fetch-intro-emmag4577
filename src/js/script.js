fetch('src/data/api.json')
.then(response=> {

  if(!response.ok){
    throw new Error("Couldn't retrive information");
  }
   return response.json
})
 .then(data=> console.log(data))

function getUserData() {



};



function updateUserCard(user) {



};


window.onload = getUserData;

