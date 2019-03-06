## NM-Candidate-Tester
This Repo contains my code for the [Norigin Media](https://https://noriginmedia.com) test. Bellow you can find details on how to run it and how to build it for production, as well as additional information on my assumptions, decisions, packages used, etc.

---

### How To Install And Run?
Assuming you already has Node in your machine...

First, clone this project and run the command bellow on the root directory of the project:

```
-> npm install 
```

This will to install all required dependencies.

To test the aplication, first run the MOCK API:

```
-> npm run start:mock-api:update
```

This will let the API used by our app running. It is good to run the server separated from the UI so we can check both logs in different terminals.

obs.: If you want the MOCK API from another environment other than the local one, edit the file **.env.local** and change the **REACT_APP_BASE_URL** variable.

Now, open another terminal window and run:

```
-> npm run start
```

This will compile the application for development and open it on your default browser.


### Screens Implemented

Two screens were implemented: the EPG screen (main one) and the Program screen (that opens when the user clicks in a program on the EPG screen). They were implemented for basically two types of screens: big and small.

In a real app, we should be more careful with all possible resolutions that are common in the marked. But for this test, I focused on big (eg. full HD monitors) and small screens (eg. iPhones).

EPG (small):

![EPG SMALL SCREEN](https://github.com/c33k/nm-candidate-tester/blob/master/mockups/implemented/epg_small_screen.png)

Program (small):

![Program SMALL SCREEN](https://github.com/c33k/nm-candidate-tester/blob/master/mockups/implemented/program_small_screen.png)

EPG (big):

![EPG BIG SCREEN](https://github.com/c33k/nm-candidate-tester/blob/master/mockups/implemented/epg_big_screen.png)

Program (big):

![PROGRAM BIG SCREEN](https://github.com/c33k/nm-candidate-tester/blob/master/mockups/implemented/program_big_screen.png)


### Building for Production

To build for production, simply run 

```
-> npm run build
```

Wherever you deploy this application, you can add a .env file to control - like in dev - where the app should point to get it's data.

To quickly test if the build worked, you can try to run a local server just to test it. 
To do this, install the **http-server** globally (or run it with npx), go to the build directory (which I added to the .gitignores file) and run...

```
-> http-server
```

Then, open the URL provided by http-server and check the production build.

obs.: that's assuming you have MOCK API running locally.


### Some Considerations
* I decided to use React Hooks in this app and also, only functional components. There are no Class components here.
* I didn't use any fancy framework for state management (like Redux or Mobx) and libraries like RxJS. I tried to use as pure React as possible, since It's a small app with only two pages at the moment. 
* I've used **create-react-app** just to create the basic project without components for me. I implemented the whole EPG component and all the application.
* I used (Ant Design)[https://ant.design/] to leverage the grid system and, most important, get basic icons for the application.
* The EPG is scrolled horizontally automatically. The "now" button is displayed only when the user scrolls the EPG manually, which will cancel the auto-scrolling. The auto-scrolling is resumed when the user presses the "now" button. 
* The program screen is opened when the user clicks in one of the programs on the EPG. I didn't implemented the different types of programs, checking if it is in the future, live, etc. I focused more on the EPG and on a basic Program screen that has it's flaws, but can be easily solved. 
* The MOCK API returns all programns with same ID. 
* I've added search bar and other menu icons just to test the layout. They are not functional for now.


### Some Dependencies Explained

  * antd: library I used to get Icons and basic components, like button, grid system, etc.   
  * axios: library used for the GET requests
  * react-app-rewired: "Override create-react-app webpack configs without ejecting". I've used this with **customize-cra** to override some variables from ANTD and also to be able to load LESS files instead of basic CSS files
  * LESS: like SASS and Stylus, it empowers CSS, giving us a flexible language to define variables that can be reused through different files, mixins and so on... ANTD uses it so I decided to keep it instead of using another similar tool
  * react-router-dom: basic routing for the application.
  
  ####Dev Dependencies:
   * prettier: used to keep consistency of code style in the team. Very useful tooling
   * ESLint: create-react-app already brings ESLint configured with webpack.
  
  
### Some Files Explained

  * config.overrides.js: this is where I override basic LESS variables from ANTD custom theme (eg. primary color)
  * prettierrc: defined some small set of rules, like like indentation, use single quotes on JSX files, etc.
    * I could have added a pre-commit hook to run prettier before each commit. I didn't do it because I was alone and let it open for consideration. I would recommend add it.
    
  * .env.local: in this file I set the base URL used by our page to trigger the MOCK_API. In a production environment, we could have a file that is not in the GIT repository to point to different URLs or even add additional configurations. Check more at (DotENV)[https://www.npmjs.com/package/dotenv]. My variable has the **REACT_APP_** prefix to leverage the usage of react-app, since it already adds any variable with this prefix to the famous **process.env** variable. 
    

