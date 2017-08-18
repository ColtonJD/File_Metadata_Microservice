# File Metadata Microservice WIP - README Needs Updating
=========================

Upload your file and receive a JSON object with related information

View a working example at https://file-metadata-ms-cj.glitch.me/

The hosted version currently only supports images, however, it can in theory support any file type. Open that up at your own risk. 


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

>npm install 

This should create a node_modules folder in the views directory that contains ng-file-upload for use in our AngularJS front-end. 

4. From your terminal navigate back to the root directory and run:

> node server.js

This should have the server running on localhost:3000. If you would like to use a seperate port, you must change the port at the end of the server.js file

5. Open http://localhost:3000 | <your port> in your browser. The front end Angular app should load up. Supply any image file to test. Should return a JSON with:

> {

>   name: <name>,

>    encoding: <encoding>,

>    mimetype: <type>,

>    size: <size in bytes>

>}

You can now direct image files to localhost:3000/upload | localhost:<yourport>/upload which will respond with a JSON object containing that data. 

### Accepting seperate file extensions

You will need to make changes to both the server logic and the front end model if you wish to use both. If you will not be using the supplied front-end, you can skip the first part.

#### Changing Front End Model

The Logic in views/main.js is already set up properly. All you need to do is change the input by modifying the "ngf-pattern" and "aceept" properties. Adjust those to reflect whatever file extensiosn you wish to include.

#### Changing the back-end logic 

The "upload" constant in server.js contains or file check conditional. In order to included seperate file extenstions you have two choices:

1. Remove the fileFilter property entirely from the upload multer object which will allow all files to be uploaded and scanned (not recommended).
2. Add a check for you file type to the if statement which will return cb(null, true) if file type matches thus allowing your file type through. 


## Authors
-------------------

ColtonJD - https://github.com/ColtonJD || coltonjdale.com

## Awknoledgments
-------------------
- Rahil Shaikh - https://ciphertrick.com/2015/12/07/file-upload-with-angularjs-and-nodejs/ - Excellent advice on getting ng-file-upload and multer to cooperate


- freeCodeCamp.com 