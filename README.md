# Team-Profile-Generator
Welcome to Team-Profile-Generator application. It runs through node.js runtime environment.

To use it, 
npm i inquirer //to install inquirer
node index.js  //to run it.

The application consists of 4 classes, each is in a separate file(module).
Employee is the main class, the other 3 classes inherit from it.

The program has 4 constants, each is an array of objects. Each of these are the questions the user gets depending on if he is choosing manager, intern or engineer.

User first enters the manager details and the answers will be used to create a manager object, then the html starter code is added, then this manager object is inserted into a function that I created called writer. 

Writer function then add the details from the manager an HTML unit code(each unit represents the user choice of either engineer, intern or manager) then appends this unit to the starter code. 

After that inquirerCore function is run. 
inquirerCore function is used for asking the user to select one of 3 choices, either choose engineer or intern or exit.
tInquirercore gets the user input and if its engineer or inten, it runs again(recursion) until the user exits and here the html template is added.
If the user choose exit, inquirerCore function will add htmlTemplateEnd to the end of the html file and the file becomes completed.


A test folder is created with 4 test files for the 4 classes and the functions inside were tested and all passed.

video link- 