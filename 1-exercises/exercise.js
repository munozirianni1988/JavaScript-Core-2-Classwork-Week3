/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/
console.log("Does this work?")
/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
console.log(document.querySelectorAll("p")); //task 1.1
console.log(document.querySelector("div")); //task 1.2

const paragraph = document.querySelectorAll("p");
for(const text of paragraph){
  console.log(text.innerText);
}; //task1.1-a


console.log(document.querySelector("#jumbotronText")); //task1.2

console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click",function(event){
  alert("Thanks for visiting Bikes for Refugees!");
});


/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

let backgroundColor = document.querySelector("#bgrChangeBtn");
function changeBackground(event){
  let body = document.querySelector("body");
  body.classList.add("background--red");
};
backgroundColor.addEventListener("click", changeBackground);





/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

const links = document.querySelector("#largerLinksBtn");

function changeSize(){
  for(const item of document.querySelectorAll("a")){
    item.classList.add("larger");
  };
};

links.addEventListener("click", changeSize);








/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

const articleButton = document.getElementById("addArticleBtn");


function addingArticle(event){
  const comment = document.querySelector("#addArticleInput");
  const pElement = document.createElement("p");
  pElement.innerText = comment.value;
  const article = document.querySelector("#addArticle");
  article.appendChild(pElement);


}

articleButton.addEventListener("click", addingArticle);