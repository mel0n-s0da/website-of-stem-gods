nameKey = ['fleming', 'galvani', 'meitner', 'orsted', 'turing'];
fullNames = ['Alexander Fleming', 'Luigi Galvani', 'Elise Meitner', 'Hans Christian Orsted', 'Alan Mathison Turing']; 
textPeople = ["this kid did penicillin", "this kid did electricity stuff", "this kid did similar stuff to curie and should've gotten the nobel prize and was the person to be nominated the most times and never recieve one and refused to work on the manhattan project", "this kid did e & m", "this kid isn't the first computer scientist"];
scores = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]];

var backgroundDisplay = document.getElementById('displayTogether');
var topDisplay = document.getElementById('nameDisplay');
var imageDisplay = document.getElementById('imageDisplay');
var textDisplay = document.getElementById('textDisplay');
var peopleDisplay = document.getElementById('k');
var faceBlocks = Array.from(document.getElementsByClassName('face-block')); 

var currentPerson = '';
faceBlocks.map( block => {
    block.addEventListener('click', (e) => {
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

        // determine if they're the same as the current person 
        if (currentPerson == key) { // make the thingie disappear 
          // change the background color to grey 
          backgroundDisplay.style.backgroundColor = 'white';
          // make the top text, image, and bottom text disappear
          topDisplay.innerText = '';
          textDisplay.innerText = '';
          imageDisplay.replaceChild(document.createElement("IMG"), imageDisplay.childNodes[0]);
          // set the variable of currentPerson to empty string 
          currentPerson = "";
        } else { // display as usual
          // change the background color to grey 
          backgroundDisplay.style.backgroundColor = 'lightgrey';
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
          var infoText = textPeople[keyIndex];
          textDisplay.innerText = infoText;
          // set the variable of currentPerson to the new key 
          currentPerson = key;
        }

    });
});

faceBlocks.map( block => {
    block.addEventListener('mouseover', (e) => { 
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
      let personScore = scores[nameKey.indexOf(key)];
      let personDisplayScore = "A:" + personScore[0] + " V:" + personScore[1] + " I:" + personScore[2] + " P:" + personScore[3]
      console.log(personDisplayScore);

      var isOnDiv = false;  
      $(peopleDisplay).mouseenter(function(){isOnDiv=true;});
      $(peopleDisplay).mouseleave(function(){isOnDiv=false;});
      console.log(isOnDiv);
    });
});
