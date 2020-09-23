# ImageEditor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## How To Run?

- Step 0: Setup npm and angular 

- Step 1: Clone Repo - `git clone https://github.com/ankitshaw/GraphicEditor.git` 

- Step 2: Install Dependencies - `npm install i` 

- Step 3: Run App - `ng serve` 

- Step 4: For Webrtc functionality (Not Complete.) 
        -Install - `npm install peer -g` 
        -Run before Step 3 - `peerjs --port 9000 --key peerjs --path /editor` 
        -On loading the app. Copy the id from one client to another and click Connect! This will send a pop up to first client, Click ok and clients are connected. Check console logs for details.
        

## Features

- A panel that loads thumbnails from [Picsum](https://picsum.photos/v2/list).

- A blank canvas (toggle between 16/9 and 9/16)

- Drag and drop images on the canvas from left panel

- Ability to connect two client using peer id. Can send the canvas update details from A to B Client. Rendering the details on the B client canvas not implemented.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
