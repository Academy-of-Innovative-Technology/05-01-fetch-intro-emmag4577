[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23150467&assignment_repo_type=AssignmentRepo)
# Web Development Assignment: Fetch Student Data with Bootstrap 5

## Overview:
Use JavaScript’s `fetch()` method to retrieve student data (name and email) from an API (api.json) file. This data will be displayed dynamically in a **Bootstrap 5 card**.



## Objective:

### Part 1

- Use the **`fetch()`** API to retrieve student data (name and email) from the api.json.

- Display the student data dynamically in a **Bootstrap 5 card**.  
  - review [Bootstrap v5 Card](https://getbootstrap.com/docs/5.0/components/card/)

### Part 2

- Using [Picsum Photos](https://picsum.photos) API get a random image to display with the student profile. 

- Will require a 2nd fetch request


## Requirements:

### JavaScript

- document
  - querySelector()
- fetch
- JSON
  - .parse( )

### HTML **
   - Use **Bootstrap’s card component** to display the student’s name and email.
   - Create an empty space inside the card for the **name**, **email**, and **profile image** of the student that will be updated dynamically once the data is fetched.

   Example card layout:

   ```html
   <div class="container mt-5">
       <div class="row justify-content-center">
           <div class="col-md-6">
               <div class="card">
                   <img id="student-image" class="card-img-top" alt="Student Image">
                   <div class="card-body">
                       <h5 id="student-name" class="card-title"></h5>
                       <p id="student-email" class="card-text"></p>
                   </div>
               </div>
           </div>
       </div>
   </div>


