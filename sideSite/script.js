var topDisplay = document.getElementById('nameDisplay');
var faceBlocks = Array.from(document.getElementsByClassName('face-block'));
// console.log(faceBlocks);

var name = ''
faceBlocks.map( block => {
    block.addEventListener('click', (e) => {
        // the key system to assign each click to a last name 
        var type = e.target.nodeName; 
        var text = e.target.innerText; 
        var key; 
        //console.log(type);
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
        //console.log(key);
        topDisplay.innerText = key;
        // parallel array time 

    });
});

