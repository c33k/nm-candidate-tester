## NM-Candidate-Tester
This Repo contains my code for the [Norigin Media](https://https://noriginmedia.com) test. Bellow you can find details on how to run it and how to build it for production, as well as additional information on my assumptions, decisions, packages used, etc.

---

#### How To Install And Run?
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

#### Screens Implemented

Two screens were implemented: the EPG screen (main one) and the Program screen (that opens when the user clicks in a program on the EPG screen). They were implemented for basically two types of screens: big and small.

In a real app, we should be more careful with all possible resolutions that are common in the marked. But for this test, I focused on big (eg. full HD monitors) and small screens (eg. iPhones).

EPG (big):

![EPG BIG SCREEN](
https://github.com/c33k/nm-candidate-tester/tree/master/mockups/implemented/epg_big_screen.png "EPG BIG SCREEN")

#### Building for Production

**under construction**


