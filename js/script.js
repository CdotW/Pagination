/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const items = 9;
 
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   // create two variables which will represent the index for the first and last student on the page
   const startIndex = (page * items) - items;
   const endIndex = page * items;

  // select the element with a class of `student-list` and assign it to a variable
   let studentList = document.querySelector('ul.student-list');

  // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = '';

  // loop over the length of the `list` parameter
  for (let i = 0; i < list.length; i++) {
     const student = list[i];
     if (i >= startIndex && i < endIndex) {
        let studentItem = 
        `<li class="student-item cf">
            <div class="student-details">
               <img class="active" src="${student.picture.large}" alt="Profile Picture">
               <h3>${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>`;
         studentList.insertAdjacentHTML('beforeend', studentItem);
     }   
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   // create a variable to calculate the number of pages needed
   let numOfPages = Math.ceil(list.length / 9)

   const linkList = document.querySelector('ul.link-list');
   
   linkList.innerHTML = '';

   // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++) {
      let pageNum = 
     `<li>
         <button type="button">${i}</button>
      </li>`

      linkList.insertAdjacentHTML('beforeend', pageNum);
   }
 
   // give the first pagination button a class of "active"
   document.querySelector('button').className = "active";
 
   // create an event listener on the `link-list` element
   linkList.addEventListener('click', function (e) {
      e.preventDefault();

      if (e.target.tagName === "BUTTON") {
         document.querySelector('button.active').className = '';
            e.target.className ='active';
            showPage(list,e.target.textContent)
      }
   });
     // if the click target is a button:
       // remove the "active" class from the previous button
       // add the active class to the clicked button
       // call the showPage function passing the `list` parameter and page to display as arguments
   
}


// Call functions
showPage(data, 1);
addPagination(data);