# Language Translator

- We often go to foreign places for a visit like for a holiday or for work purpose and often find it difficult to communicate as we are not really familiar with the specific native language of that place, for instance Chinese , Arabic etc.
- Imagine a situation you are in china and you see a sign board of a restaurant but you dont know what's written in there, here comes our role, you just need to click a picture of the text and upload it and not only you will get the translated version in your choosen language but it will also recognize the text and will give you a text format which you can edit according to you.
- It supports multiple languages like chinese, spanish, arabic, hindi, english and many more.
- It uses tessareact.js which is a javascript library which converts an image into text format and uses Libre Translate API for detecting the language and translating it further.

![Screenshot (13)](https://user-images.githubusercontent.com/90816300/148645352-8dff69d9-836e-438c-b6d5-91aa2e04397b.png)

![Screenshot (14)](https://user-images.githubusercontent.com/90816300/148645358-63670a54-607b-4bd7-b2fa-9741c594181f.png)

![Screenshot (16)](https://user-images.githubusercontent.com/90816300/148645361-a6d2fae9-e918-422f-95b4-a60320e49a84.png)



## Deployment of the application with Nappitive

- We used Nappitive for the deployment of the our application.
- First step was to create a YAML file specifying all the requirements i.e. name, docker image, ports etc.
- After this, we went to Nappitive playground and uploaded the yaml file and clicked on deploy.

- Also for creating a end point, to access the application on browser, we used port 3000.


## Using custom definitions

- For defining the custom definations, we our own ComponentDefinition for the application.
- It specified the amount of CPU cores the docker container needed as well as the memory required.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

- ### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- ### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

