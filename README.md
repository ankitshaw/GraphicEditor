# ImageEditor

![img](https://i.ibb.co/rcbjsbS/Screenshot-2020-09-24-at-1-55-14-AM.png)

## How To Run?

- Step 0: Setup npm and angular 

- Step 1: Clone Repo - `git clone https://github.com/ankitshaw/GraphicEditor.git` 

- Step 2: Install Dependencies - `npm install i` 

- Step 3: Run App - `ng serve`, Navigate to `http://localhost:4200/` to launch app.

- Step 4: For Webrtc functionality (Not Complete.) 
        -Install - `npm install peer -g` 
        -Run before Step 3 - `peerjs --port 9000 --key peerjs --path /editor` 
        -On loading the app. Copy the id from one client to another and click Connect! This will send a pop up to first client, Click ok and clients are connected. Check console logs for details.
        

## Features

- A panel that loads thumbnails from [Picsum](https://picsum.photos/v2/list).

- A blank canvas (toggle between 16/9 and 9/16)

- Drag and drop images on the canvas from left panel

- Click on an image to bring it in front

- Ability to connect two client using peer id. Can send the canvas update details from A to B Client. Rendering the details on the B client canvas not implemented.


## Demo Images
### Canvas
![img](https://i.ibb.co/pykYcHy/Screenshot-2020-09-24-at-1-50-02-AM.png)

### Dropped Images
![img](https://i.ibb.co/rcbjsbS/Screenshot-2020-09-24-at-1-55-14-AM.png)

### Peer Connection Alert to Client A from Client B
![img](https://i.ibb.co/pLMdPdG/Screenshot-2020-09-24-at-1-56-29-AM.png)

### Client B drag drops an image
![img](https://i.ibb.co/f0TddYT/Screenshot-2020-09-24-at-1-57-52-AM.png)

### Client A receives the image and the drop position from A
![img](https://i.ibb.co/2dhZNj3/Screenshot-2020-09-24-at-1-58-12-AM.png)
