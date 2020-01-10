# Zyper Frontend Interview Challenge - Instagram Engagement Tool
## By Zachary Plante
#### Overview
This Git Repository contains what is needed for a single page web app that utilizes Zyper's API, powered by React. It displays information on Instagram users individually or as an aggregate, depending on what the user wants.
#### What is Required
Node, npm, axios, and flatlist-react are required for this. I will try and include needed modules, but if anything is lost in git here are instructions for installing needed software. Download or clone this repository, cd into zyper-test, and follow the instructions.
##### Node and npm
Node and npm can be installed with 'install node' (you may need sudo or brew commands as well). 
##### Axios
Once npm is installed, axios can be installed with 'npm install axios'.
##### flatlist-react 
Once npm is installed, axios can be installed with 'npm install flatlist-react'. This is an open source component that can be used instead of the map function for rendering a list and increases overall readability and programming.
#### Starting App
Run 'npm start' inside the folder to begin running the server, which should open up the page. Terminal may ask for permission before doing so.
#### Functionality
The App takes a string of of instagram usernames that can be either whitespace or comma seperated. It also takes a boolean to display the information for individual users or not. It then displays the results. If a user does not exist, it will return not valid. If nothing is inputed, it will do nothing. If the job fails, it will display an error message.
#### What to Look At
App.js, resultList.js, result.js, and main.css were all written from scratch by me, if you want to view a sample of my coding practices. These are all found in the src folder. Optionally, you could create a new React Project and add these files into the src folder of your new project (replacing the default App.js) to run the project. 
#### Testing
After Testing, I found giving the API a blank string returns NaN, so I made it impossible for the user to submit a blank string. Included catch statements and error messages incase the job should fail. Some testing methods are left if I were to return to this project.
#### What to Make Better
This is functional as an internal tool, but it could be made better. If this were to be seen by users, I would want more desing that communicated to the user what was going on to decrease confusion, like a spinning wheel to denote a job is pending. Given time and scope restraints, it seemed unnecessary to include such affordances. More functionality could be added to do more with the information presented, but that would require new API's or front end logic.
##### Thank you for your time in viewing my work. If you have any questions feel free to contact me at my email or number on my resume. I hope to hear from you soon.
