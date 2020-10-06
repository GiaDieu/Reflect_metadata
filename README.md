### Installation:

### ReflectMetadata Lib:

> npm install reflect-metadata

### In case you cannot run ts-node:

> npm install -g ts-node

### TypeScript install:

1. Understanding the steps to set-up TypeScript of the project
   TypeScript Compiler to set up TypeScript Environment:

> npm install -g typescript ts-node

- Generate and create the tsconfig file:

> tsc --init

- uncommand rootDir in the tsconfig.json and add sources folder of the project "rootDir": "./src"

This means we are taking all codes in src folder and complie them.

- uncommand outDir in the tsconfig.json to show all complied code (js files) in folder build , add "outDir" : "./build"

And Run tsc instead of tsc index.ts as usual.

Or Run **tsc -w** environment means watch all the files inside the rootDir and recompile after the changes in the rootDir to compile files in outDir

- And open another terminal environment and run "node build/index.js" to see the result everytime we make a change

2. How to automatically running compile, and show the result :
   > "npm init -y" to generate the package.json

> "npm install nodemon concurrently" to install these 2 tools

nodemon is helping us rerun the project after we make any changes automatically
concurrently is helping us run multiple scripts at the same time
How:

```json
"scripts": {
    "start:build": "tsc -w", // typescript compiler watch-mode

    "start:run": "nodemon build/index.js", //run the complied codes

    "start": "concurrently npm:start:*" // start: build and start:run at the same time, use 1 command line npm start for one go
  }
```

as the result, we complie the code , and rerun it every single time we make any changes

NOTE: good Advice to remove **node_modules** when pushing projects to GitHub or any other relevants

Use the universal one-liner in terminal in the project directory:

> touch .gitignore && echo "/node_modules" >> .gitignore && git rm -r --cached node_modules ; git status

It works no matter if you've created a .gitignore or not, no matter if you've added node_modules to git tracking or not.

Then commit and push the .gitignore changes.
Explanation

- Touch will generate the .gitignore file if it doesn't already exist.

- echo and >> will append node_modules/ at the end of .gitignore, causing the node_modules folder and all subfolders to be ignored.

- git rm -r --cached removes the node_modules folder from git control if it was added before. Otherwise, this will show a warning path spec 'node_modules' did not match any files, which has no side effects and you can safely ignore. The flags cause the removal to be recursive and include the cache.

- git status displays the new changes. A change to .gitignore will appear, while node_modules will not appear as it is no longer being tracked by git.

### Important NOTE: since you've been using decorator in this mini-project

You have to uncommand 2 lines below in tscconfig.json

```json
"experimentalDecorators": true
"emitDecoratorMetadata": true
```
