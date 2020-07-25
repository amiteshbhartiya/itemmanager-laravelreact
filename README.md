
## About Item Manager

Item Manager is a single page web application buit in Laravel & React. 

## Specifications
- The web page has a single text box which allows the user to enter some textual input (called the item name). Once the user enters some text and clicks on 'Add' the item will be added to the list below that text box and the input will be cleared.  
- Adding the same item isn't allowed.  
- The items in the list are selectable. But only one item can be selected at a time.  
- If there is an item selected, the '>' button moves the selected item from the list on
the left to the list on the right.  
- The items in the list on the right are also selectable. And the '<' button moves
back the item to the list on the left when clicked.  
- The state of the application (the contents of the 2 lists) are stored in
the backend's database (the MySQL database). This means if the web page is reloaded or closed when it's reopened, the user will find the items in both lists as he left them before closing the page.

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Tech Stacks

- PHP     : >= "^7.2.5", 
- Laravel : PHP Framework(V7)
- React   : Laravel React scaffolding
- Docker  : Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. 
- Mysql   : Relational Database
- Bootstrap : CSS Sass framework
- lodash : JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.

## To setup

Simplicity of deployment is focus here. So, I've commited the frontend overheads to reduce deployment steps. Follow below steps to your system.
 
- git clone https://github.com/amiteshbhartiya/itemmanager-laravelreact.git
- composer install -to Run Laravel/Backend dependency
- Copy .env.example into .env  [it's environment file of laravel] 
- Last step is to manage Database configuration dependecy 

## Development highlight

- Controller Repository Model Pattern
- Form Request
- Docker
- React scaffolding
- React Functional Components & Hooks (I think it's better than class component - more lightweight & Readable)

 Now application is ready to serve

#### Out of the box 
I used Docker for mysql & other dependencies
   
   - **[download docker locally ](https://www.docker.com/products/docker-desktop)**
   - docker-comoser configuration is already written in **[docker-composer.you](https://github.com/amiteshbhartiya/itemmanager-laravelreact/blob/master/docker-compose.yml)**
   - docker-compose up -d    (To run as background job)
   - mysql is ready to listen on 127.0.0.0:3607 out side of swarm but with in docker n/w host: mysql port: 3306  

## Development highlight

- Controller Repository Model Pattern
- Form Request
- Docker
- React scaffolding
- React Functional Components & Hooks (I think it's better than class component - more lightweight & Readable)

## Next Steps
That’s all there is to it. There’s definitely room for improvement—you can implement OAuth2 with the Passport package, integrate a pagination and transformation layer (I recommend Fractal), the list goes on—but I wanted to go through the basics of creating and testing an API in Laravel with no external packages.

- **[Git Repo](https://github.com/amiteshbhartiya/itemmanager-laravelreact.git)**
