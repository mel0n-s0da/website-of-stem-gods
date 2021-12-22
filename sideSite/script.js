var topDisplay = document.getElementById('nameDisplay');
var faceBlocks = Array.from(document.getElementsByClassName('face-block'));
// console.log(faceBlocks);

var name = ''
faceBlocks.map( block => {
    block.addEventListener('click', (e) => {
        name = e.target.innerText; 
        // console.log(e.target.id); 
        // console.log(e.target.innerText);
        person = e.target.id; 
        //console.log(e.target.parentNode.parentNode.id);
        console.log(typeof(person)); 
        switch(person){
            case person == '': // where you have nothing then pull the parent 
              console.long("this has nothing");
            default:
                topDisplay.innerText = name;
        }
    });
});

