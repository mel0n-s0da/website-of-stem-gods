nameKey = ['fleming', 'galvani', 'meitner', 'orsted', 'turing'];
fullNames = ['Alexander Fleming', 'Luigi Galvani', 'Elise Meitner', 'Hans Christian Orsted', 'Alan Mathison Turing']; 

var topDisplay = document.getElementById('nameDisplay');
var imageDisplay = document.getElementById('imageDisplay');
var faceBlocks = Array.from(document.getElementsByClassName('face-block'));
// console.log(faceBlocks);

var name = ''
faceBlocks.map( block => {
    block.addEventListener('mouseover', (e) => {
        // the key system to assign each click to a last name 
        var type = e.target.nodeName; 
        var text = e.target.innerText; 
        var key; 
        if ((type == "IMG") || (type == "DIV"))  {
          key = e.target.id;
        } else if ((type == "B") || (type == "CENTER")) {
          key = (((text.split(" "))).at(-1)).toLowerCase();
        } else {
          key = "yay life"; 
        }
        // display the name of the person 
        personName = fullNames[nameKey.indexOf(key)];
        topDisplay.innerText = personName; 
        // display the image of the person 
        var img = document.createElement("IMG");
        img.src = "images/" + key + '.png';
        imageDisplay.replaceChild(img, imageDisplay.childNodes[0]);

        /*
        switch (type) {
          case "IMG":
            key = e.target.id; 
            break; 
          case "B":
            key =  (((text.split(" "))).at(-1)).toLowerCase(); // "Amalie Emmy Noether" -> "noether"
            break; 
          case "DIV":
            key = e.target.id;
            break; 
          case "CENTER":
            key = (((text.split(" "))).at(-1)).toLowerCase();
            break; 
          default:
            console.log("yay life");
        } 
        */
        //console.log(key);
        // parallel array time 

    });
});
