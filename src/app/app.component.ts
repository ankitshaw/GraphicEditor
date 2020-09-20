import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Peer from "peerjs";

declare function myCanvas(w,h): any;

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

  ngOnInit() { 
  		this.loadImgData();

	  	this.peer = new Peer({
		host: '127.0.0.1',
		port: 9000,
		path: '/editor'
		});
		setTimeout(() => {
			this.myPeerId = this.peer.id;
		}, 1000);
		
		this.peer.on('connection', function(conn) {
		  conn.on('data', function(data){
		    console.log(data);
		  });
		});

		myCanvas(this.w,this.h);
   }

   connect(){
   	var conn = this.peer.connect(this.anotherid);
	// on open will be launch when you successfully connect to PeerServer
	conn.on('open', function(){
	  // here you have conn.id
	  conn.send("hi!");
	});
   }

   sendData(){
   	var conn = this.peer.connect(this.anotherid);
	// on open will be launch when you successfully connect to PeerServer
	conn.on('open', function(){
	  // here you have conn.id
	  conn.send("this.msg2.toString()");
	});
   }

   toggleCanvasL(){
   	myCanvas(1280,720);
   }
   toggleCanvasP(){
   	myCanvas(720,1280);
   }

   public loadImgData(): void{
    this.http.get('https://picsum.photos/v2/list')
      .subscribe( (data: any) => {
        this.collection = data;
		var myCol = this.collection;
		for(var i = 0; i < myCol.length; i++) {
		    var obj = myCol[i];
		    var img = document.createElement('img');
			img.src = obj.download_url;
			img.draggable = true;
			img.height = 100;
			img.width = 150;
			document.getElementById('drag-items').appendChild(img);
		}


      });
	}

}