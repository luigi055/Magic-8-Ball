# Magic 8 Ball App

Magic 8 Ball is a simple web application that represents the original
toy with the same answers for both English and Spanish options. The
Magic 8-Ball is a toy used for fortune-telling or seeking advice,
developed in the 1950s and manufactured by Mattel. It is often used in
fiction since the answer can sometimes be accurate, inaccurate, or
statistically improbable.

[Know more about Magic 8 ball](https://en.wikipedia.org/wiki/Magic_8-Ball)

# Motivation and Inspiration

Since i was a kid. i've always wanted to have a Magic 8 ball. so a
couple a weeks surfing in the internet i saw a magic 8 ball again and i
thought "hey it's a good chance to make one by my own" i
also wanted to try a simple integration frontend-backend and have the
oportunity to use create-react-app and refresh knowledge on the prop-types
library which i used to use it a lot before it was separate from the
core react library. in the rest api.there are 2 GET request that
bring all the options. one in English and the other one in Spanish. and
fetch all the options from react depending the selected language via
AJAX using axios and async/await

# Repository

[https://github.com/luigi055/Magic-8-Ball](https://github.com/luigi055/Magic-8-Ball)

# Project URL

Full App on Heroku [https://magic-8-ball-app.herokuapp.com/](https://magic-8-ball-app.herokuapp.com/)

## Table of contents

* [Tech Stack](#tech-stack)
* [Vistual Studio Code Extensions](#visual-studio-code-extensions)
* [OS Compatibility](#os-compatibility)
* [Installation](#installation)
  * [Global Packages](#global-packages)
* [Clearing Public Folder](clearing-public-folder)
* [Software used](#software-used)
* [Author](#author)
* [license](#license)

## Tech Stack

* Full Integration App
  * Concurrently
  * Creat React App
* Webpack / React.js
  * React.js
  * React DOM
  * Create-react-app
  * axios
  * prop-types
  * react-animate-on-change
  * React Router DOM
* Mini REST api (Node.js)
  * Express.js
  * body-parser

## Visual Studio Code Extensions

* Babel ES6 / ES7
* Beautify css/sass/scss/less
* Color Highlight
* ESLint
* expand-region
* Git History (git log)
* open in browser
* prettier - javascript formatter
* stylelint

## OS Compatibility

This boilerplate is thought to be use in multi platform specificlly in windows 7, 8, 10, linux (tested in ubuntu, antergos), and in OSX.

any problem related with Operating System please i'll be glad to know about it. so, create an issue.

## Installation

First step clone this repo

```
$git clone https://github.com/luigi055/Magic-8-Ball.git
```

And then dependning wheather you use npm or yarn

Case using **yarn**:

```
$cd magic-8-ball && yarn
```

Case using **npm**

```
$cd magic-8-ball && npm install
```

### Global Packages

In order to have all the power of this boilerplate you can donwload the following packages

* [nodemon](https://nodemon.io/) (node reload on save)
* [eslint](https://eslint.org/) (linter)
* [prettier](https://github.com/prettier/prettier) (auto formatter)
* [babel](https://babeljs.io/) (Javascript compiler)
* [stylelint](https://stylelint.io/) (linter for css)

### React

using the latest verison of react which is React Fiber or React V16 with also react-router-dom.

### Production

```
$yarn run start
```

## Clearing Public Folder

There's an easy way to remove the public folder via npm or yarn script. sometimes we need to build it and we forget or ir annoying being removing it manually so you can remove this using the following script

```
$yarn run clear
```

## Software Used

* [Hyper CLI](https://hyper.is/)
* [visual studio code](https://code.visualstudio.com/)
* [git with git flow](https://git-scm.com/)
* [Haroopad](http://pad.haroopress.com/)
* [yarn](https://yarnpkg.com/lang/en/docs/install/)
* [heroku](https://heroku.com)

## Author

* **[Luigi055](https://github.com/luigi055)**

## License

This project is licensed under the MIT License.
