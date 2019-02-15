var fill = "#898989";
var can = document.getElementById("mycanvas");
var product = document.getElementById("productName");

var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://fonts.googleapis.com/css?family=Josefin+Sans';
document.getElementsByTagName('head')[0].appendChild(link);


function update(jscolor) {
    
    fill = "#" + jscolor;
}

function changeType() {
    
    const context = can.getContext('2d');

    context.clearRect(0, 0, can.width, can.height);
    
    var ctx = can.getContext("2d");
    var ctxt = can.getContext("2d");

    var path = new Path2D(
        "M 496.2,475.8 375.6,123.6 367.5,100 359.4,123.6 238.9,475.8 0.5,483 244.1,490.3 249.2,490.3 251,485.4 367.5,152.4 484,485.4 485.8,490.4 490.9,490.3 734.6,483 Z"
    );
    can.style.letterSpacing = "26px";
    ctx.fillStyle = fill;
    ctx.fill(path);
    ctxt.fillStyle = "#231f20";
    ctxt.font = "60.1939px JosefinSans-Regular";
    ctxt.textAlign = "center";
    ctxt.fillText(product.value.toUpperCase(), 370, 580);
}
function saveLocal() {
    var image = can.toDataURL("image/png").replace("image/png", "image/octet-stream");


		// Construct the <a> element
		var link = document.createElement("a");
		link.download = product.value+'.png';
		link.href = image;

		document.body.appendChild(link);
		link.click();

		// Cleanup the DOM
		document.body.removeChild(link);
		delete link;
}