# Rick And Morty API

Deployment: [https://orlandcasta.github.io/rickandmortyapi/](https://orlandcasta.github.io/rickandmortyapi/)

Api call practice https://rickandmortyapi.com/, obtaining resources through fetch, it should be noted that in this practice it was not done with the use of hooks.
In this practice, the information of all the characters is displayed in the form of cards for their visualization.

## Installation 🚀
```
npm install
```

## Start production mode 📽
```
npm run start
```

## Deployment 📦

To perform a deployment follow the steps below:

1.- In your project folder install the following
```
npm install --save-dev gh-pages
```
2.- In the package.json add the following line, take into account that you have to replace the username field with your github user and repositoryname with the name of the repository that will be displayed
```
"homepage": "https://username.github.io/repositoryname"
```
3.- In package.json add the following scripts, these are necessary to display the page
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
4.- In the git terminal preferably execute
```
npm run build
```
5.- In the git terminal preferably execute
```
npm run deploy
```
At the end you will display your page on github, you will be able to consult your repository and verify that you will have a new branch generated by the deployment in the configurations part, you will be able to check the url,
Every time you make a change to your project it is necessary to repeat steps 4 and 5 to update your deployment.

## Technologies 🛠️

- JavaScript
- React JS
- CSS
- HTML
