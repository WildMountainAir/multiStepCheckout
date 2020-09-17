# Hints: Multistep Checkout Experience
## Topics:
The titles for each hint topic is listed below. Before you start the challenge, review this list of hint titles so that if you get stuck, you know what hints are available to you.

<li> Installing and Running Babel
<li> Serving files from Express
<li> Installing and Using React
<li> Loading JS files into your index.html and in what order!?
<li> Testing

If you are looking at these hints, it means you are struggling to meet the basic requirements. Below is a process you can follow to achieve the goals of the basic requirements. The hints are organized in a way that lets you ignore hints not related to your current step.

## Installing and Running Babel
The babel command should be installed locally:

`npm install @babel/cli @babel/core @babel/preset-react`
This allows you to run the babel command to turn JSX files into JS files. Please look at the Babel docs to see what each of these dependencies do

P.S. Note that tools like Babel are constantly changing. When major changes are made, existing configuration and setup may have to be updated for the tool to function properly. These hints had to be updated to accommodate the Babel 6.x to Babel 7.x update. This is why using the docs is so important, and why following tutorials can sometimes be a detriment (as this hint was when the Babel update was still fresh).

To transpile your React components, you'll need to tell Babel where to look for the source JSX files (client directory) and where to put the transpiled JS files (public directory). You can use a command like this:

`./node_modules/.bin/babel client --out-dir public --presets @babel/preset-react --source-maps inline`

Note: it is recommended that to make this an npm script by placing it in your package.json so you don't have remember it or look here each time. Additionally, you can add the --watch flag to tell Babel to keep transpiling on every change.

Remember that you can only load transpiled files into your browser so be sure to link your transpiled files (app.js not app.jsx) from index.html.

Express will automatically serve up any files located in a folder of your choosing. This hint is written with the expectation that you'll use the public folder for this purpose (this is where babel is placing the transpiled file).

## Serving files from Express
Similar to the hint in challenge #2, you can use express.static to tell Express where to look for files to serve up to the browser. The convention is to serve client files from the public folder, like so:

`app.use(express.static('public')`
By default, Express will look for a file called index.html and serve that file whenever you browse to the root (/) route.

## Installing and Using React
The easiest way to start using React is to load it from a CDN from within your index.html file, like so:

`<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>`
`<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`
An alternative (and recommended) approach for this challenge is to download the files, react-dom.development.js and react.development.js from here  and place them directly into your public folder.

To start building your own React components, include them in your JSX file (app.jsx). To then use your own React components inside your browser, you can either load them into the browser with webpack (not allowed for basic requirements), or by directly including your Babel transpiled files (app.js) into your index.html file.

Loading JS files into your index.html and in what order!?
When specifying the <script> tags in your index.html file, it is vital that you list the <script> tags in the correct order. The browser executes the scripts in the order they are specified inside index.html. If you try and load app.js before you load react, your app will fail to load.

You can figure out the load order by looking at the dependencies for each js file. For example, app.js requires react-dom, therefore react-dom must appear before app.js. And react-dom requires react therefore react must appear before react-dom.

`<script src="react.development.js"></script>`
`<script src="react-dom.development.js"></script>`
`<script src="app.js"></script>`
## Testing
For testing, you'll need a few npm packages too: chai and mocha.

To write a test, you'll need to:

<li> come up with a scenario that's relevant to your goal (ex: verify my function will detect a win when it finds four horizontal pieces)
<li> generate some data that represents that scenario
<li> feed that data as an input to the function under test
<li> compare the function's return value with your expected return value
Repeat this recipe for each scenario you think of.

It's a best practice to have multiple versions of each scenario. For example: finding four diagonal pieces in a row at the top corner, and finding four diagonal pieces in a row somewhere in the middle of a board. This allows you to validate your function with different circumstances. You'll often find bugs hidden in strange places, where you least expect them. The more versions of a scenario you have, the more confidence you have that your function works as expected.

It is a best practice to put your javascript files that contain tests into a tests folder. You'll also need an HTML file to launch your tests. Here is a simple tutorial  to get you started.