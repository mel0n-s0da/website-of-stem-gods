peopleLastNames = ['Newton', 'Euler', 'Leibniz', 'Gauss', 'al-Haytham', 'Faraday', 'Galilei', 'Alexandria', 'Einstein', 'Pasteur', 'Hui', 'Sklodowska-Curie', 'Cauchy', 'Maxwell', 'Sina', 'Helmholtz', 'Tesla', 'Riemann', 'Heng', 'Poincare', 'Kepler', 'Koch', 'Pascal', 'Neumann', 'al-Khwarizmi', 'Lagrange', 'al-Biruni', 'Jiushao', 'Syracuse', 'Pergamon', 'Laplace', 'Planck', 'Brunel', 'Ehrlich', 'Hilbert', 'al-Tusi', 'al-Zahrawi', 'Noether', 'Mendeleev', 'Boyle', 'Ramanujan', 'Shijie', 'Hooke', 'Bohr', 'Lavoisier', 'Chongzhi', 'Brahmagupta', 'Rutherford', 'Kolmogorov', 'Braun', 'Mendel', 'Poisson', 'Fermi', 'Aryabhata', 'Copernicus', 'Avogadro', 'Descartes', 'Dirac', 'Huygens', 'Watt', 'al-Khayyam', 'Fermat', 'Jenner', 'Gibbs', 'Cardano', 'Carver', 'Linnaeus', 'Schrodinger', 'Kuo', 'Couloumb', 'Takakazu', 'Gay-Lussac', 'Sangamagrama', "d'Alembert", 'Cos', 'Volta', 'Heisenberg', 'Bernoulli', 'Vesalius', 'Lambert', 'Nernst', 'Bernard', 'Dalton', 'Ampere', 'Lorentz', 'Hertz', 'Fourier', 'Joule', 'Hahn', 'Kelvin', 'Bardeen', 'Darwin', 'Turing', 'Shizhen', 'Leeuwenhoek', 'Galvani', 'Orsted', 'Fleming', 'Korolev', 'Meitner', 'Pauling', 'Virchow', 'al-Marrakushi', 'Clausius', 'Sylvester', 'Shannon', 'Ohm', 'Jr', 'Becquerel', 'Feynman']

peopleScores = [18.55, 18.2, 17.28, 17.23, 16.29, 16.1, 15.51, 15.21, 15.18, 15.10, 15.05, 15.03, 14.98, 14.94, 14.8, 14.45, 14.39, 14.3, 14.26, 14.24, 14.24, 14.19, 14.16, 14.13, 14.06, 14.04, 13.93, 13.65, 13.45, 13.43, 13.38, 13.3, 13.26, 13.1, 13.06, 13.05, 12.97, 12.83, 12.79, 12.63, 12.61, 12.48, 12.43, 12.39, 12.35, 12.31, 12.3, 12.26, 12.18, 12.04, 11.98, 11.98, 11.95, 11.87, 11.82, 11.77, 11.59, 11.55, 11.52, 11.34, 11.25, 11.23, 11.2, 11.18, 11.17, 11.02, 10.82, 10.79, 10.63, 10.52, 10.45, 10.44, 10.44, 10.44, 10.34, 10.32, 10.29, 10.27, 10.12, 10.08, 9.93, 9.9, 9.85, 9.85, 9.81, 9.64, 9.57, 9.55, 9.54, 9.48, 9.43, 9.4, 9.38, 9.32, 9.18, 8.93, 8.91, 8.87, 8.85, 8.78, 8.77, 8.75, 8.73, 8.71, 8.65, 8.52, 8.44, 8.4, 8.36, 8.28]; 
imageNames = ['1. Isaac Newton' , '2. Leonhard Euler' , '3. Gottfried von Leibniz' , '4. Carl Friedrich Gauss' , '5. Alhazen ibn al-Haytham' , '6. Michael Faraday' , '7. Galileo Galilei' , '8. Euclid of Alexandria' , '9. Albert Einstein' , '10. Louis Pasteur' , '11. Liu Hui' , '12. Marie Sklodowska Curie' , '13. Augustin-Louis Cauchy' , '14. James Clerk Maxwell' , '15. ibn Sina' , '16. Hermann von Helmholtz' , '17. Nikola Tesla' , '18. Georg Bernhard Riemann' , '19. Zhang Heng' , '20. Jules Henri Poincare' , '21. Johannes Kepler' , '22. Robert Koch' , '23. Blaise Pascal' , '24. John von Neumann' , '25. Muhammad ibn Musa al-Khwarizmi' , '26. Joseph-Louis Lagrange' , '27. Abu Rayhan al-Biruni' , '28. Qin Jiushao' , '29. Archimedes of Syracuse' , '30. Claudius Galen of Pergamon' , '31. Pierre-Simon Laplace' , '32. Max Planck' , '33. Isambard Kingdom Brunel' , '34. Paul Ehrlich' , '35. David Hilbert' , '36. Nasir al-Din al-Tusi' , '37. Abu al-Qasim ibn al-Zahrawi' , '38. Amelie Emmy Noether' , '39. Dmitri Ivanovich Mendeleev' , '40. Robert Boyle' , '41. Srinivasa Ramanujan' , '42. Zhu Shijie' , '43. Robert Hooke' , '44. Niels Bohr' , '45. Antoine-Laurent Lavoisier' , '46. Zu Chongzhi' , '47. Brahmagupta' , '48. Ernest Rutherford' , '49. Andrey Nikolaevich Kolmogorov' , '50. Wernher von Braun' , '51. Gregor Johann Mendel' , '52. Simeon Denis Poisson' , '53. Enrico Fermi' , '54. Aryabhata' , '55. Nicholaus Copernicus' , '56. Amedeo Carlo Avogadro' , '57. Rene Descartes' , '58. Paul Dirac' , '59. Christiaan Huygens' , '60. James Watt' , '61. Omar al-Khayyam' , '62. Pierre de Fermat' , '63. Edward Jenner' , '64. Josiah Willard Gibbs' , '65. Gerolamo Cardano' , '66. George Washington Carver' , '67. Carl Linnaeus' , '68. Erwin Schrodinger' , '69. Shen Kuo' , '70. Charles-Augustin de Couloumb' , '71. Seki Takakazu' , '72. Joseph Louis Gay-Lussac' , '73. Madhava of Sangamagrama' , "74. Jean le Rond d'Alembert" , '75. Hippocrates of Cos' , '76. Alessandro Volta' , '77. Werner Heisenberg' , '78. Daniel Bernoulli' , '79. Andreas Vesalius' , '80. Johann Heinrich Lambert' , '81. Walther Hermann Nernst' , '82. Claude Bernard' , '83. John Dalton' , '84. Andre-Marie Ampere' , '85. Hendrik Antoon Lorentz' , '86. Heinrich Rudolf Hertz' , '87. Jean-Baptiste Joseph Fourier' , '88. James Prescott Joule' , '89. Otto Hahn' , '90. William Thomson Kelvin' , '91. John Bardeen' , '92. Charles Robert Darwin' , '93. Alan Mathison Turing' , '94. Li Shizhen' , '95. Antonie van Leeuwenhoek' , '96. Luigi Galvani' , '97. Hans Christian Orsted' , '98. Alexander Fleming' , '99. Sergei Pavlovich Korolev' , '100. Lise Meitner' , '101. Linus Carl Pauling' , '102. Rudolf Virchow' , '103. Ibn al-Banna al-Marrakushi' , '104. Rudolf Clausius' , '105. James Joseph Sylvester' , '106. Claude Elwood Shannon' , '107. Georg Simon Ohm' , '108. Jesse Ernest Wilkins Jr' , '109. Antoine Henri Becquerel' , '110. Richard Phillips Feynman']; 



var peopleDisplay = document.getElementById("first");

var imageLocation = ""; 
var imageKey = ""; 
var lastName = ""; 
for (var i = 0; i < 100; i++) {
  imageKey = imageNames[i]; 

  // get the last name of the person 
  lastName = peopleLastNames[i];

  // create the image element 
  var img = document.createElement("IMG");
  img.src = "images/" + imageKey + '.png';
  img.id = lastName; 
  img.classList.add("people-images");

  // create the div with class "inner-block"
  var innerBlock = document.createElement("DIV");
  innerBlock.classList.add("inner-block");

  // create the div with class "photo-block"
  var photoBlock = document.createElement("DIV");
  innerBlock.classList.add("photo-block");
  // add image element to photo-block 
  photoBlock.appendChild(img); 

  // add photoBlock to innerBlock 
  innerBlock.appendChild(photoBlock); 

  // create name display
  var nameBlock = document.createElement("P");
  nameBlock.innerText = imageKey; 
  nameBlock.style.fontSize = "xx-large";

  // create the outer div with id lastname, class "face-block"
  var faceBlock = document.createElement("DIV");
  faceBlock.id = lastName; 
  faceBlock.classList.add("face-block");
  // add the innerBlock element to the faceBlock
  faceBlock.appendChild(innerBlock); 
  // add the nameBlock element to the faceBlock
  faceBlock.appendChild(nameBlock); 

  // create the avip div
  var avipBlock = document.createElement("DIV");
  // add the avipBlock to the faceBlock
  faceBlock.appendChild(avipBlock); 

  // add the faceBlock to the peopleDisplay
  peopleDisplay.appendChild(faceBlock);
}

// having the AVIP Score display for each person
var faceBlocks = Array.from(document.getElementsByClassName('face-block'));   
faceBlocks.map( block => {
    block.addEventListener("mouseover", (e) => { 

      // getting the score as a string based off of clicked element id
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
      var keyIndex = peopleLastNames.indexOf(key);
      var personDisplayScore = "AVIP Index: " + peopleScores[keyIndex]; 

      // displaying the score 
      var scoreDisplay = document.createElement("P");
      scoreDisplay.innerText = personDisplayScore;  
      var hoverPerson = faceBlocks[keyIndex]; 
      hoverPerson.replaceChild(scoreDisplay, hoverPerson.childNodes[2]);
    });
    block.addEventListener("mouseleave", (e) => {
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
      var keyIndex = peopleLastNames.indexOf(key);
      var noScoreDisplay = document.createElement("DIV");
      var hoverPerson = faceBlocks[keyIndex]; 
      hoverPerson.replaceChild(noScoreDisplay, hoverPerson.childNodes[2]);
    });
}); 

transform = "scale3d(1.5,1.5,1.5)";
normal = "scale3d(1,1,1)";
document.querySelectorAll(".people-images").forEach(item => {
  item.addEventListener("mouseover", event => {
    item.style.transform = transform;
  })
}); 

document.querySelectorAll(".people-images").forEach(item => {
  item.addEventListener("mouseout", event => {
    item.style.transform = normal; 
  })
}); 



  
