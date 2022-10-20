# Photo Palette App

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Prerequisites](#prerequisite)
- [Installation](#installation)
- [Usage](#usage)

## Description
Duration: 2 Week Sprint

Color is a critical tool for artists and designers. We are surrounded by interesting color combinations all of the time. For example, I might notice a cool color combination in a pattern on someone's shirt or displayed on a package logo or in a piece of artwork. I might go for a walk and see a striking scene in nature with a great color palette. Color inspirations are everywhere but if you don’t have a way to record and save them, then you don’t remember them. 

My app will generate color palettes from photos that users upload. The idea is a user will upload a photo and the app will generate the prominent colors in the photo so that the user can store and access the palette later on. 

## Screenshots

![Palette Dashboard](/public/palette-dashboard-screenshot.png)

![Palette Generator](/public/generate-palettee-screenshot.png)

## Built With

<a href="https://www.w3schools.com/w3css/defaulT.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/js/default.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" height="40px" width="40px" /></a>

## Getting Started

This project should be able to run in your favorite IDE. I used VS code while building it. 
<a href="https://code.visualstudio.com/"><img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original-wordmark.svg" height="40px" width="40px" /></a>

### Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)

### Installation

1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type...  `git clone {paste SSH link}`
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run `npm install` to install all dependencies
    (this is important to the name npm packages that are required to run this app.)
    ** Please note that you may have to run 'npm install --force' if 'npm install' errors out. 
7. Create a `.env` file at the root of the project and paste this line into the file:
    
    SERVER_SESSION_SECRET=superDuperSecret
    
    While you're in your new .env file, take the time to replace superDuperSecret with some long random string like 25POUbVtx6RKVNWszd9ERB9Bb6 to keep your application secure. Here's a site that can help you: https://passwordsgenerator.net/. If you don't do this step, create a secret with less than eight characters, or leave it as superDuperSecret, you will get a warning.
  
8. Create a database named `photo_palette` in PostgresSQL
If you would like to name your database something else, you will need to change `photo_palette` to the name of your new database name in `server/modules/pool.js` file
9. The queries in the database.sql file are set up to create all the necessary tables that you need to test the app. Copy and paste those queries in the SQL query of the database.
10. Run `npm run server` in your VS Code terminal
11. Open a second terminal by clicking the + button and run `npm run client`

## Usage

Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:3000/#/.


# To see the fully functional site, please visit: 
https://peaceful-meadow-98495.herokuapp.com/#/user

Have fun playing around the app! You can register and make your own account and start generating your palettes. Otherwise, if you would like to see some previously saved palettes, please feel free to use these log-in credentials.

Username: kelsey
Password: magic

# Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. Thank you to all the instructors and the Mitchison Cohort for all the support. 

