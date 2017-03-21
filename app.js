'use strict';

var pathArray = [];

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var imgArray = [img1, img2, img3];

var bag = new Image('bag', 'img/bag.jpg');
var banana = new Image('banana', 'img/banana.jpg');
var bathroom = new Image('bathroom', 'img/bathroom.jpg');
var boots = new Image('boots', 'img/boots.jpg');
var breakfast = new Image('breakfast', 'img/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'img/bubblegum.jpg');
var chair = new Image('chair', 'img/chair.jpg');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new Image('dog-duck', 'img/dog-duck.jpg');
var dragon = new Image('dragon', 'img/dragon.jpg');
var pen = new Image('pen', 'img/pen.jpg');
var petSweep = new Image('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new Image('scissors', 'img/scissors.jpg');
var shark = new Image('shark', 'img/shark.jpg');
var sweep = new Image('sweep', 'img/sweep.png');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Image('unicorn','img/unicorn.jpg');
var usb = new Image('usb', 'img/usb.gif');
var waterCan = new Image('water-can', 'img/water-can.jpg');
var wineGlass = new Image('wine-glass','img/wine-glass.jpg');

function Image(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;

  pathArray.push(this.imgPath);
}

function randomImg(){
  return Math.floor(Math.random() * pathArray.length);
};

function threeImg(){
  for (var i = 0; i < imgArray.length; i++){
    var imgChoice = pathArray[randomImg()];
    var imageId = imgArray[i];
    console.log(imageId);
    imageId.setAttribute('src', imgChoice);
  }
}
threeImg();
