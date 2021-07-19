//instantiates qr code obj
var qrcode = new QRCode("qrcode");

//makes a qr code for starters
qrcode.makeCode("");

//checks to see if enter key is pressed
var input = document.getElementById("codelink");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("button").click();
    }
  });

//function that generates the qrcode
function generateCode(){
    document.getElementById("qrcode").innerHTML = ""; //clears div

    var website = document.getElementById("codelink").value

    var qrcode = new QRCode("qrcode");
    qrcode.makeCode(website);
    

    if (website.length > 1200){
        alert("website link is too long!"); 
    }
   
    
    
    
}

//function that helps the user download the qrcode image
function downloadImage(image, filename) {
    // Creating hidden <a> tag to download
    var element = document.createElement("a");
    element.href = image;
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


function getDataUrl(img) {
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL('image/jpeg');
}


function download(){
    // Select the image
    const img = document.querySelector('#qrcode img');
    
    const dataUrl = getDataUrl(img);
    const filename = "QR_Code_" + Date.now() + ".png";
    
   downloadImage(dataUrl, filename);

}

function openimg(){
    const img = document.querySelector('#qrcode img');
    const dataUrl = getDataUrl(img);
    console.log(dataUrl);
    

    let data = dataUrl;
    let w = window.open('about:blank');
    let image = new Image();
    image.src = data;
    setTimeout(function(){
    w.document.write(image.outerHTML);
    }, 0);
    

}
