function myCanvas(w,h) {
	var width = w*0.5;
	var height = h*0.5;


	var stage = new Konva.Stage({
		container: 'container',
		width: width,
		height: height,
		});

	var layer = new Konva.Layer();

	stage.add(layer);

	// what is url of dragging element?
	var itemURL = '';
	document
		.getElementById('drag-items')
		.addEventListener('dragstart', function (e) {
		  itemURL = e.target.src;
		});

	var con = stage.container();

	con.addEventListener('dragover', function (e) {
		e.preventDefault(); // !important
	});

	con.addEventListener('drop', function (e) {
	e.preventDefault();

	stage.setPointersPositions(e);

	Konva.Image.fromURL(itemURL, function (image) {

	  //layer.add(image);

	  image.position(stage.getPointerPosition());
	  //image.draggable(true);
	  image.width(width*.6);
	  image.height(height*.6);


	  var imgGroup = new Konva.Group({
        x: image.x(),
        y: image.y(),
        draggable: true,
      });

      layer.add(imgGroup);
      imgGroup.add(image);
      image.x(0);
      image.y(0);

	  addAnchor(imgGroup, 0, 0, 'topLeft');
      addAnchor(imgGroup, image.width(), 0, 'topRight');
      addAnchor(imgGroup, image.width(), image.height(), 'bottomRight');
      addAnchor(imgGroup, 0, image.height(), 'bottomLeft');


	  layer.draw();

	  imgGroup.addEventListener('dragstart', function (e) {
        console.log('dragstart');

      });

      imgGroup.addEventListener(
        'click',function () {
          imgGroup.moveToTop();
          layer.draw();
        });


	});

	});

}


	function addAnchor(group, x, y, name) {
        var stage = group.getStage();
        var layer = group.getLayer();

        var anchor = new Konva.Circle({
          x: x,
          y: y,
          stroke: '#666',
          fill: '#ddd',
          strokeWidth: 2,
          radius: 8,
          name: name,
          draggable: true,
          dragOnTop: false,
        });

        anchor.on('dragmove', function () {
          update(this);
          layer.draw();
        });
        anchor.on('mousedown touchstart', function () {
          group.draggable(false);
          this.moveToTop();
        });
        anchor.on('dragend', function () {
          group.draggable(true);
          layer.draw();
        });
        // add hover styling
        anchor.on('mouseover', function () {
          var layer = this.getLayer();
          document.body.style.cursor = 'pointer';
          this.strokeWidth(4);
          layer.draw();
        });
        anchor.on('mouseout', function () {
          var layer = this.getLayer();
          document.body.style.cursor = 'default';
          this.strokeWidth(2);
          layer.draw();
        });

        group.add(anchor);
    }


    function update(activeAnchor) {
        var group = activeAnchor.getParent();

        var topLeft = group.get('.topLeft')[0];
        var topRight = group.get('.topRight')[0];
        var bottomRight = group.get('.bottomRight')[0];
        var bottomLeft = group.get('.bottomLeft')[0];
        var image = group.get('Image')[0];

        var anchorX = activeAnchor.getX();
        var anchorY = activeAnchor.getY();

        // update anchor positions
        switch (activeAnchor.getName()) {
          case 'topLeft':
            topRight.y(anchorY);
            bottomLeft.x(anchorX);
            break;
          case 'topRight':
            topLeft.y(anchorY);
            bottomRight.x(anchorX);
            break;
          case 'bottomRight':
            bottomLeft.y(anchorY);
            topRight.x(anchorX);
            break;
          case 'bottomLeft':
            bottomRight.y(anchorY);
            topLeft.x(anchorX);
            break;
        }

        image.position(topLeft.position());

        var width = topRight.getX() - topLeft.getX();
        var height = bottomLeft.getY() - topLeft.getY();
        if (width && height) {
          image.width(width);
          image.height(height);
        }
    }