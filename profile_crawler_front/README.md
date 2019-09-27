# Profile Crawler

  The Profile Crawler is a project where you can type a name and a twitter url and your username and description from twitter are saved too. To get username and description the Profile Crawler uses a web scraper.


# Tools

  This application is separated in two modules. The first module is the back-end of the application that was build in ruby on rails, a very robust and open-source framework used to develop web applications. The other one is the front-end developed in quasar, a open-source Vue.js based framework.

  The Quasar framework was chosen to the front-end development because it's a framework very simple to use with a lot of predefined components. As a framework based on Vue.js, Quasar has all the advantages of this framework like the use of components to create pages and develop functionalities that allows a big code reuse, the use of advanced resources with a simple application and a clear syntax.

# Features

  The Profile Crawler front-end application has 4 pages.

  * The first and main page is the page with a search field were you can type anything and the screen bellow the search bar will show cards informations if the content match with a name, a twitter description or twitter username registered in the system. This cards has the name of the user, the registered twitter url and buttons to the twitter user, a button to edit the informations and to show the user data(description, twitter username etc...)

  * The Second page is a register page that allows the user creation. To create a user just type a name tha has a size between 1 and 50 and a valid twitter profile link.

  * The third and fourth screens are to edit, with fields to to type new informations, and the show screen when you can see the user data.

# How to run the project

  To run the project you need to have docker and docker compose installed on your computer.

  if it's your first time running the project just type 
  
  `docker-compose up --build`
  
  In the next time you run the project type only

  `docker-compose up`
