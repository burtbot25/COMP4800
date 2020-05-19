#1Introduction
##Overview
BCIT’s Student Life Office aims to deliver comprehensive entry and transition programming to new students. They have proposed the idea of developing an interactive map of the Burnaby campus where students can virtually learn more about the campus before their first day of school. 

This interactive map will be part of a series of online modules intended to equip students with important pre-arrival information. The map will contain information such as basic navigation, academic buildings, campus services, and other key places. The map will be a web application embedded inside an iframe within the Learning Hub.
##1.1.2 Intended User
The interactive map is intended to be used by new students starting their journey at the Burnaby campus. The map will be part of an onboarding activity for students to access through the Learning Hub. The goal is for students to familiarize with the campus layout and learn more about locations of all relevant resources and services.
#1.2 Technologies Used
HTML5
CSS3
Bootstrap 4
JavaScript ES6
MySQL 8.0.19
Node.js 10 and up
jQuery 3.5.0		




#Architecture
		The architectural design of the app is based on the Model-View-Controller (MVC)  
pattern. 

##Model
The model component is used for transferring data between the MySQL database and the app.



##View
The view component determines the UI of the pages. Express-Handlebars is used for this. The main-layout.hbs contains the html <head> of the pages. The <body> is swapped with different pages containing maps or menus (ie academic-buildings.hbs and basic-nav.hbs). Each map contains an overlay.hbs which contains all the area shapes that are highlightable.


##Controller
The controller component manipulates the data returned from the model component and then renders the appropriate view or data as a JSON object.  

		

##Navigation
Navigation is done through routes. Calling paths such as /main_menu will call the mainMenuController controller function mainMenu which will render the page. Views are swapped in dynamically. When a button is pressed on a page, it calls a function such as main_menu() in navigation.js which fetches the path, and replaces the page with the newly rendered view.



##Dynamic Data Rendering
Dynamic rendering of data is used to reduce the amount of wait time from loading all the data at once. The data is retrieved from the database using the models, then passed to the controller where it sends an json object of the data. The path, which is determined by the router, is fetched and used to dynamically update information on the page.

##Deployment
We used Heroku to deploy this since it supports Node.js
