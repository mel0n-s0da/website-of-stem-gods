nameKey = ['fleming', 'galvani', 'meitner', 'orsted', 'turing'];
fullNames = ['Alexander Fleming', 'Luigi Galvani', 'Elise Meitner', 'Hans Christian Orsted', 'Alan Mathison Turing']; 
textPeople = ["this kid did penicillin", "this kid did electricity stuff", "this kid did similar stuff to curie and should've gotten the nobel prize and was the person to be nominated the most times and never recieve one and refused to work on the manhattan project", "this kid did e & m", "this kid isn't the first computer scientist"]; 

var backgroundDisplay = document.getElementById('displayTogether');
var topDisplay = document.getElementById('nameDisplay');
var imageDisplay = document.getElementById('imageDisplay');
var textDisplay = document.getElementById('textDisplay');
var faceBlocks = Array.from(document.getElementsByClassName('face-block'));
// console.log(faceBlocks);

var currentPerson = '';

var name = ''
faceBlocks.map( block => {
    block.addEventListener('click', (e) => {
        // change the background color to grey 
        backgroundDisplay.style.backgroundColor = 'lightgrey';
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
        // key index 
        let keyIndex = nameKey.indexOf(key);
        // display the name of the person 
        personName = fullNames[keyIndex];
        topDisplay.innerText = personName; 
        // display the image of the person 
        var img = document.createElement("IMG");
        img.src = "images/" + key + '.png';
        imageDisplay.replaceChild(img, imageDisplay.childNodes[0]);
        // display the text with the info of the person
        var info = document.createElement("P");
        var infoText = textPeople[keyIndex];
        info.innerHTML = infoText;  
        textDisplay.replaceChild(info, textDisplay.childNodes[1])

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

