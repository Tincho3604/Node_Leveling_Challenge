# Node Leveling Challenge

_For this challenge it was asked to develop an API for a blog, using Node and Express. The data was persisted in a MySQL database, using Sequelize. This API returns data in JSON format._

## Challange requirements
```
The endpoints that the API should expose are:

* GET / posts
It should show a list of posts, ordered by creation date, in descending order. This list should only show the ID, title, image, category and creation date fields.

* GET / posts /: id
You should search for a post whose id is the one specified in the parameter: id. If it exists, return its details, otherwise return an error message.

* POST / posts
You must save a new post according to the data received in the request.

* PATCH / posts /: id
You must update the post with the id specified in the parameter: id, and update its data according to the body of the request. In the event that it does not exist, return an error message.

* DELETE / posts /: id
You will need to delete the post with the id specified in the parameter: id. In the event that it does not exist, return an error message.
```

## Considerations
_The correct structuring of the files, good writing of the code will be evaluated.
Additionally, you can create an additional table for the categories and relate them through a foreign key in each post.
The image field must be the URL of an image, it is not necessary to structure a file storage logic, it can be a reference to an external site (it is a bonus to validate that the URL corresponds to an image, for example, ending in .png , jpg, or check the existence of the resource before storing it)_


# Starting 🚀 and Installation 🔧
## Install dependencies for the server
```
git clone
npm install
npm start
```

## The server runs at http: // localhost: 4000 


### Pre-requisites 📋

Include a `.env` file in the server directory with the following environment variables: MONGODB_URI, SECRETORKEY.


_After completing these steps you will be able to view the project_


## Built with 🛠️

_The tools I use for this project are as follows:_
* [Node.js] (https://nodejs.org) - Runtime environment for JavaScript.
* [Express] (https://expressjs.com) - Infrastructure of the web application.
* [Redux] (https://es.redux.js.org/) - Used to work with a global state.
* [Sequelize] (https://sequelize.org/) - Used to model the database.
* [MySql2] (https://www.npmjs.com/package/mysql2) - Database used.


## Authors ✒️

_Project carried out in a group way_

* ** Martin Cumpe ** - * Author *

## License 📄

All rights reserved.

