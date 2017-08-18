# File Metadata Microservice WIP - README Needs Updating
=========================

Upload your image and receive a JSON object with related information


## Technologies
------------

On the front-end,
- AngularJS 1.6.4
- ng-file-upload
- HTML/CSS

On the back-end,
- Node.js
- Express.js
- multer

## Getting Started
-------------------
1. Download files or run: 

> npm clone https://github.com/ColtonJD/File_Metadata_Microservice.git

2. In the root directory run: 

>npm install 

3. Navigate to views directory in terminal and run:

>npm install ng-file-upload

This should create a node_modules folder in the views directory that contains ng-file-upload for use in our AngularJS front-end. 

4. From your terminal navigate back to the root directory and run:

> node server.js

This should have the server running on localhost:3000. If you would like to use a seperate port, you must change the port at the end of the server.js file