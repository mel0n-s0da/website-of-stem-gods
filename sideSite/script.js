

var topDisplay = document.getElementById('nameDisplay');
var faceBlocks = Array.from(document.getElementsByClassName('face-block'));
// console.log(faceBlocks);

var name = ''
faceBlocks.map( block => {
    block.addEventListener('click', (e) => {
        //var name = e.target.innerText; 
        // console.log(e.target.id); 
        // console.log(e.target.innerText);
        //var person = e.target.id; 
        //console.log(e.target.parentNode.parentNode.id);

        // the key system to assign each click to a last name 
        var type = e.target.nodeName; 
        var text = e.target.innerText; 
        var key; 
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
          default:
            console.log("yay life");
        } 
        console.log(key);

        // parallel array time 

        /*
        switch(person){
            case '': // case for p
              topDisplay.innerText = name;
              console.log("empty string");
              console.log(typeof(person))
              console.log("\n")
              break;
            default: // case for img, outer div 
              topDisplay.innerText = name;
              console.log(typeof(person))
              console.log("\n")
        }
        */
    });
});

