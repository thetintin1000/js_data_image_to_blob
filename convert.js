// get the data image 
    function get_snapshot() {
      var snapshot_data = "here you get the data image";
      return snapshot_data;
     };
     
// use formadata if then you want to send the image to the server with ajax     
var formData = new FormData();

var ImageURL = get_snapshot();
var block = ImageURL.split(";");
var contentType = block[0].split(":")[1];
var realData = block[1].split(",")[1];

// you got the blob
var blob = b64toBlob(realData, contentType);

formdata.set('snapshot', blob, 'snapshot.png');
