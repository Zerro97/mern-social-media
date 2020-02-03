# Mern-Social-Media
The primary goal of this project is to practice building web application using MERN stack. 


## Contents
[Description](#description)<br>
[Files/Folders Explanation](#filesfolders-explanation)<br>
[API Routes](#api-routes)<br>
[Express](#express)<br>
[Authentication](#authentication)<br>
[AWS](#aws)<br>
[Set Up](#set-up)<br>
[Running](#running)<br>
[Deployment](#deployment)<br>
[References](#references)<br>


## Description
While not complete, I plan to add the following features to the application:<br>
* Signup and login
* Upload profile picture
* Make a post with title, description, images, tags
* Make a comment on the post
* Chat interface


#### Current To Do
* React CSS Modularization using webpack
* Styling file uploader button
* Retrieving files from S3 and displaying on website


## Files/Folders Explanation
With MERN stack web application, there are front-end and back-end side to development. Currently, all the front-end files are located within the back-end folder (root folder). All the front-end files are react related.


#### Root (backend files + client folder)
<img src="https://github.com/Zerro97/mern-social-media/blob/master/screenshots/folder_root1.png" alt="Start Screen" height="400px" width="200px"/>

* **client:** Folder containing all the front-end related files
* **middlesware:** Folder containing all the express middleware functions. Example include checkToken function, which checks if the request contains token (check if the user is logged in) [Explanation on middleware](https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498).
* **models:** Folder that contains all the mongoose schemas/models. One file corresponds to one schema/model. For example, user.model.js is a file that defines the user information such as username and passwords.
* **node_modules:** All the dependencies/libraries used for development
* **routes:** Folder that contains all the js files that handles API calls. One file corresponds to one server-side route. For example, users.js is a file that defines what happens if the client side do API calls to '/user' route.
* **screenshots:** Folder used to display images in github README
* **.env:** This is file that defines environment variables. This is useful for security as I can include it in gitignore file and not reveal the passwords used for accessing mongoDB atlas. This also enables production level configurations such as connecting to mongoDB database when deployed in heroku.
* **eslintrc.json:** A json file used to configure linting
* **gitignore:** Decides which files should not be pushed to remote github repository
* **config.js:** Works with .env file where it modularizes different environment variables
* **Procfile:** Used in heroku deployment where it tells heroku which command to run when building application
* **package.json:**
* **README.md:**
* **s3api.js:** A file that contains s3 api which is used for file uploading to S3 bucket storage
* **server.js:** This is main js file that handles different configurations. It connects the file to cloud mongoDB database, calls different server-side routes and runs the application.

#### Notes
Client folder contains react related files. Client-side and server-side is separated and does not have much interaction apart from the API calls to server. Some scripts regarding heroku deployment is written in the package.json file.<br>


#### Client
<img src="https://github.com/Zerro97/mern-social-media/blob/master/screenshots/folder_client1.png" alt="Start Screen" height="320px" width="180px"/>

* **__mocks__:** Folder containing docker files
* **.circleci:** 
* **config:** Webpack config files. Webpack compiles all the js and css files into a single file
* **node_modules:** All the dependencies/libraries used for development
* **src:** All the react related files
* **.babelrc:** Babel converts new JS codes to older version for compatibility of different browsers
* **.editorconfig:** File that ensures consistent coding style (ex. space vs tabs)
* **package.json:**
* **postcss.config.js:**

#### Notes
You need to run "npm install" in this folder to download all the dependencies used in front-end development<br>

#### Src
<img src="https://github.com/Zerro97/mern-social-media/blob/master/screenshots/folder_src1.png" alt="Start Screen" height="270px" width="170px"/>

* **components:** Folder that contains react components that make up part of a webpage. Think of it as classes or building blocks of website. Example could include the navigation bar.
* **assets:** Folder that contains all the images and icons
* **routes:** Folder that contains react components that make up one webpage. The files in routes folder are being called in App.js file.
* **styles:** Folder that contains scss/sass files. These files are compiled into one css file by webpack. I'm also using css modules
* **App.js:** App.js file defines the client side routes. For example, if the user types "/sermons", app.js file determines which file to display on screen through react router.
* **config.js:** Works with .env file where it modularizes different environment variables. Currently not used and I might remove it.
* **index.js/index.html:** index.js file imports App.js root component and index.html uses index.js to load all the components

#### Notes
Adding a webpage would involve modifying app.js file to define the client-side route and then making a file in the routes folder.<br>


## API Routes
There are two routing for web application: client and server. A stackoverflow post explains the difference:
* With server-side routing you download an entire new webpage whenever you click on a link,
* With client-side routing the webapp downloads, processes and displays new data for you.
[More explanation](https://stackoverflow.com/questions/23975199/when-to-use-client-side-routing-or-server-side-routing)

For our application, we are performing client-side rendering through react js (ie. server-side rendering is rendering webpages through API calls like res.render()). Server side routes are solely used for our interaction with database and API calls<br>

In other words:<br>
Client side routes are used for displaying contents on the web browser.<br>
Server side routes are used for restful API calls and accessing database.<br>


### Client side (localhost:3000)
| Route                                   | Login Required |
|-----------------------------------------|----------------|
| /                                       |                |
| /about/                                 |                |
| /create/                                |                |
| /create/post                            | ✔︎              |
| /create/group                           | ✔︎              |
| /post/                                  |                |
| /post/`<post_id>`                       |                |
| /post/`<post_id>`/edit                  | ✔︎              |
| /profile/                               |                |
| /profile/`<profile_id>`                 |                |
| /profile/`<profile_id>`/edit            | ✔︎              |
| /login/                                 |                |
| /signup/                                |                |


### Server side (localhost:5000)
| Route                                   | Auth Required | Token Required | Get | Post | Put | Delete |
|-----------------------------------------|---------------|----------------|-----|------|-----|--------|
| /login                                  | ✔︎             |                |     | ✔︎    |     |        |
| /users/                                 |               |                |     | ✔︎    |     |        |
| /users/`<users_id>`                     |               | ✔︎              | ✔︎   |      | ✔︎   | ✔︎      |
| /post/                                  |               | ✔︎              | ✔︎   | ✔︎    | ✔︎   | ✔︎      |
| /post/`<post_id>`                       |               | ✔︎              | ✔︎   |      | ✔︎   | ✔︎      |
| /videos/                                |               | ✔︎              | ✔︎   | ✔︎    |     |        |
| /videos/`<sermon_id>`                   |               | ✔︎              | ✔︎   |      | ✔︎   | ✔︎      |
| /audios/                                |               | ✔︎              | ✔︎   | ✔︎    |     |        |
| /audios/`<audio_id>`                    |               | ✔︎              | ✔︎   |      | ✔︎   | ✔︎      |
| /images/                                |               | ✔︎              | ✔︎   | ✔︎    |     |        |
| /images/`<image_id>`                    |               | ✔︎              | ✔︎   |      | ✔︎   | ✔︎      |


#### Notes
While in development the application is locally hosted (meaning they are in the same IP address without the need of using internet), they are still in a different port (3000 & 5000) (port is layer 3 or 4 of OSI model). I still have to consider [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) problems as it is accessing resources from different [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin). 


## Express
There are common syntax used in express framework that I thought would be helpful to make notes.

### Request
* `req.body`
    * Contains key-value pairs of data submitted in the request body
* `req.params`
    * Object that contains `route parameters` (URL segments that are used to capture the values specified at their position in the URL)
    * ex. "/user/:name"  -->  a name property is part of req.params

### Response
* `res.send([body])`
    * Send back the http response to client side
    * The body can be buffer, string, object or array
* `res.json()`
    * Uses json replacer & json spaces application setting
    * Calls res.send()

`res.send()` and `res.json()` does the same job except that res.json has additional options such as spaces (the number of spaces for indentation) and replacer (rules for transforming properties encountered during stringifying).<br>

* `res.status([body])`
    * Sets the HTTP status for the response
    * 200 - 299 are successful responses
    * 400 - 499 are client errors
    * 500 - 599 are server errors

Most commonly used status are 200, 400(Wrong Syntax) and 404(Not Found).

### Router
* `router.route`
    * Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware


## Authentication
Currently I am using JWT Based Authentication for user login.<br>

When creating a new user, the given password should be hashed (not encrypted since then it could be decrypted) and stored in the database.<br>

During login, the application compares encrypted user password in database with given password and receives a token if they matches.<br>

### JWT
While token generation is simply achieved by the JWT library, I'll include a little more explanation on it. 

#### Token = header + payload + signature
Both header and payload is simply encoded with base64 (which means anyone can decode and view its content)
Signature is generated by hashing (SHA256) both header and payload with private key. Signature is what provides the token its confidentiality. Private key can only be accessed by the application and shouldn't be viewed by attacker. If the attacker tampers with the payload, it will generate a wrong signature and hence we know the given request is not secure as the given signature is different from valid signature

#### Nodejs JWT syntax: 
* jwt.sign(payload, privateKey, signOptions) 
    * Generates token. 
* jwt.verify(token, private_key). 
    * Verify the token

[More Explanation](https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication/)


## AWS
Amazon S3 is part of Amazon Web Services (AWS). It is storage service offered to developers. I'll be using S3 to upload photos to s3 buckets and retrieve them in the website. <br>

### AWS IAM
According to the documenation: AWS IAM defines what a principal entity is allowed to do in an account. In other word, it help control access to the AWS services by other users.<br>

Controlling permissions are achieved by policy which is an object that can be attached to users, groups and roles. When making policy, we define its action (eg. listBucket, createBucket etc), resource(eg. S3 bucket) and effect (eg. allow/deny).<br>

Remember to store the access key and secret key generated when creating IAM user.

### AWS S3


[General Explanation](https://medium.com/@pmuens/aws-fundamentals-what-is-iam-b57f2fb88f66)
[S3 Documentation](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/js-sdk-dv.pdf#s3-node-examples)<br>
[Video Tutorial](https://www.youtube.com/watch?v=Oc69SEtbM_U)


## Setup
You need to prepare followings for development:

### Node js
If you do not have node.js installed, install it from [Node.js Website](https://nodejs.org/en/).<br>

### Nodemon
Nodemon is useful for developing node js applications as it automatically restart the application when file changes. I have installed it globally and thus it is **not** part of local node_modules folder. You need to install it globally if you wish to use it.
#### `npm install -g nodemon`
Run the above code in the server folder (./server). If the permission is denied during installation, read the following [link](https://stackoverflow.com/questions/47252451/permission-denied-when-installing-npm-modules-in-osx) by antzhrek

### MongoDB Atlas
For this web application, I'm hosting cloud based database using MongoDB Atlas. You need to create mongoDB account at [mongoDB website](https://www.mongodb.com/)

### AWS
Create an account in [AWS](https://aws.amazon.com/console/). It provides free services for a year. AWS is used for S3 storage.

### .env
Set up your own environment variables. They are not included in github repo and in order to use the application, you need to make your own.

### Git
#### `git clone https://github.com/Zerro97/blog-mern.git`
Run the above command in the folder you wish to download project to.

#### `git checkout develop`
Switch to develop branch for development

### NPM install
You need to install all the dependencies that are required to run this web application. All these dependencies will be stored in a folder named 'node_modules'. <br>
There are two separate places where you need to install the dependencies, 'server' folder and the root folder. This is for separating server side and client side logics.

#### `npm install`
In the server directory (/server), run above command again.<br>

#### `npm install`
In the root directory (/), run above command. This will install all the dependencies listed in the package.json file.<br>


## Running
It's time to run the web application!

#### `nodemon server`
First, in the root directory, run above command. This will run server.js file and connnect the front end to our server. It will be at "localhost:5000" (for local development)

#### `npm run dev`
Next, in the client directory, run above command. This will start up the server and display the website in the browser. It will be at "localhost:8080" (for local development)

## Deployment
Heroku is directly connected to the master branch in github repo and thus whatever changes made in the master branch will automatically be reflected on the website. For development purposes, use develop branch instead. Only merge the changes to master branch if there are no bugs.

## References
[Access Control](https://blog.nodeswat.com/implement-access-control-in-node-js-8567e7b484d1)<br>
[MERN Basic Set Up](https://www.youtube.com/watch?v=7CqJlxBYj-M)<br>
[Heroku Deploy](https://devcenter.heroku.com/articles/deploying-nodejs)<br>
[.env file](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)<br>
[Mongoose](https://mongoosejs.com/docs/schematypes.html)<br>
[Image Uploading](https://codeburst.io/image-uploading-using-react-and-node-to-get-the-images-up-c46ec11a7129)<br>
[Image Uploading Using aws s3](https://www.youtube.com/watch?v=Oc69SEtbM_U)<br>
[AWS s3 nodejs](https://medium.com/@snrsdev/mern-stack-aws-s3-express-fileupload-objectid-based-file-upload-for-profile-post-and-comment-acf386b5bb48)<br>
[Authentication](https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/)<br>
[MongoDB Basic](https://www.youtube.com/watch?v=9OPP_1eAENg&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u&index=1)<br>
[README.md file](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md)<br>
[Fetch vs Axios](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)<br>
