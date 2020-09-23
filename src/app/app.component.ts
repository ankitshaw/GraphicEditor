import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Peer from "peerjs";
import Konva from 'konva';


declare function myCanvas(w,h,stg,lay,p,a): any;
declare function drawImg(i,w,h,x,y,lay):any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Image-Editor';
  w = 1280;
  h = 720;
  constructor(private http: HttpClient){

  }

  peer = new Peer();
  anotherid;
  myPeerId;
  msg2;
  collection: any[];
  stage :any;

  layer :any;
  conn:any;

  ngOnInit() { 
  		this.loadImgData();

	  	this.peer = new Peer({
		host: '127.0.0.1',
		port: 9000,
		path: '/editor'
		});
		setTimeout(() => {
			this.myPeerId = this.peer.id;
		}, 3000);

		this.peer.on('connection', function(conn) {
		  conn.on('data', function(data){
		    console.log(data);
		    if (data.includes("connect")) {
		    	alert(data);	
		    } else if (data.includes("image")){
		    	document.getElementById("data").innerHTML = data;
		    	var data = JSON.parse(data);
		    	drawImg(data.image,this.w*0.5,this.h*0.5,data.x,data.y,this.layer);
		    }
		     
		  });
		});

		var element = document.getElementById('data');
		element.addEventListener('DOMSubtreeModified', myFunction);
		function myFunction(e) {
		    drawImg(data.image,this.w*0.5,this.h*0.5,data.x,data.y,this.layer);
		}

		this.conn = this.peer.connect(this.anotherid);
		this.stage = new Konva.Stage({
		container: 'container',
		width: this.w*0.5,
		height: this.h*0.5,
		});

  		this.layer = new Konva.Layer();
		myCanvas(this.w,this.h, this.stage, this.layer,this.peer,this.anotherid);
		
   }

   draw(){
   	drawImg("https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g",this.w*0.5,this.h*0.5,50,50,this.layer);
   }

   connect(){
   	var conn = this.peer.connect(this.anotherid);
	// on open will be launch when you successfully connect to PeerServer
	myCanvas(this.w,this.h, this.stage, this.layer,this.peer,this.anotherid);
	conn.on('open', function(){
	  // here you have conn.id
	  conn.send(this.provider._lastServerId+" is trying to connect...");
	});
   }

   toggleCanvasL(){
   	this.stage = new Konva.Stage({
		container: 'container',
		width: 1280*0.5,
		height: 720*0.5,
		});

  	this.layer = new Konva.Layer();
   	myCanvas(1280,720,this.stage,this.layer,this.peer,this.anotherid);
   }
   toggleCanvasP(){
   	this.stage = new Konva.Stage({
		container: 'container',
		width: 720*0.5,
		height: 1280*0.5,
		});

  	this.layer = new Konva.Layer();
   	myCanvas(720,1280,this.stage,this.layer,this.peer,this.anotherid,);
   }

   public loadImgData(): void{
    this.http.get('https://picsum.photos/v2/list')
      .subscribe( (data: any) => {
        this.collection = data;
		var myCol = this.collection;
		for(var i = 0; i < myCol.length; i++) {
		    var obj = myCol[i];
		    var img = document.createElement('img');
			img.src = obj.download_url+".webp";
			img.draggable = true;
			img.height = 100;
			img.width = 150;
			document.getElementById('drag-items').appendChild(img);
		}


      });
	}

}