# Team-Profile-Generator
Welcome to Team-Profile-Generator application. It runs through node.js runtime environment.

To use it, 
npm i inquirer //to install inquirer
node index.js  //to run it.

The application consists of 4 classes, each is in a separate file(module).
Employee is the main class, the other 3 classes inherit from it.

The program has 4 constants, each is an array of objects. Each of these are the questions the user gets depending on if he is choosing manager, intern or engineer.

InquirerCore function is run first.
inquirerCore function is used to check if there is no manager, then it will ask for the manager details gets the user input and creates a new manager object from the class manager then html starter code is added(html sample code without the closingtags of bode, html or container(flexboxes))

 writer function adds the details from the manager object to an HTML unit code(each unit represents the user choice of either engineer, intern or manager) then appends this unit to the starter code. 
 
 if there is a manager then InquirerCore function will ask the user to select one of 3 choices, either choose engineer or intern or exit.
Inquirercore gets the user input and if its engineer or inten, it runs again(recursion) until the user exits and here the html template is added.
If the user choose exit, inquirerCore function will add htmlTemplateEnd to the end of the html file and the file becomes completed.


A test folder is created with 4 test files for the 4 classes and the functions inside were tested and all passed.

video link- 