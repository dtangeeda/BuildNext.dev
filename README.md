# BuilNext.dev Public Website


BuildNext.dev public website repository



# Requirements

  - Nodejs latest LTS version (Current LTS Version: 12.18.4)
  - Gatsby CLI




### Tech

buildnext.dev uses a number of open source projects to work properly:

* [React] - A JavaScript library for building user interfaces
* [Nodejs] - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Gatsby] - Gatsby is a React-based open source framework for creating websites and apps. 
* [Tailwind] - A utility-first CSS framework for rapidly building custom designs.


### Project structure

A quick look at the top-level files and directories you'll see in buildnext.dev project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that buildnext.dev depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what we will see on the front-end of buildnext.dev such as buildnext.dev header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of our code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where we can specify information about buildnext.dev (metadata) like the site title and description, which Gatsby plugins we would like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of our npm dependencies that were installed for buildnext.dev project. **(We won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for buildnext.dev project.

## Installation

Install Latest Nodejs LTS version from https://nodejs.org/en/
Install Gatsby CLI globally on your machine using following command:
```sh
$ npm install -g gatsby-cli
```
Move to the project directory and install dependencies and devDependencies.

```sh
$ cd buildnext.dev
$ npm install
```

after the required dependecies are downlowded, start the Gatsby development server

```sh
$ gatsby develop
```
By default Gatsby will listen on port 8000 for your requests.
Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```


### Plugins

buildnext.dev is currently extended with the following major plugins.

| Plugin | Source |
| ------ | ------ |
| react-helmet | A document head manager for React. [https://github.com/nfl/react-helmet] |
| react-scroll | Component for animating vertical scrolling. [https://github.com/fisshy/react-scroll]|


### Todos

 - Add a custom 404 error page
 - add a contact form in the contact us section

License
----
buildnext.dev, All Rights Reserved

