var fill = "#898989";
var can = document.getElementById("mycanvas");
var product = document.getElementById("productName");

function update(jscolor) {
    
    fill = "#" + jscolor;
}

function changeType() {
    
    var ctx = can.getContext("2d");
    var ctxt = can.getContext("2d");

    var path = new Path2D(
        "M 496.2,375.8 375.6,23.6 367.5,0 359.4,23.6 238.9,375.8 0.5,383 244.1,390.3 249.2,390.3 251,385.4 367.5,52.4 484,385.4 485.8,390.4 490.9,390.3 734.6,383 Z"
    );
    can.style.letterSpacing = "26px";
    ctx.fillStyle = fill;
    ctx.fill(path);
    ctxt.fillStyle = "#231f20";
    ctxt.font = "60.1939px JosefinSans-Regular";
    ctxt.textAlign = "center";
    ctxt.fillText(product.value.toUpperCase(), 370, 500);
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