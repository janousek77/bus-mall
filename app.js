'use strict';

var img1 = document.getElementbyId(img1);
var img2 = document.getElementbyId(img2);
var img3 = document.getElementbyId(img3);

var bag = new randomImg('bag', 'img/bag.jpg');
var banana = new randomImg('banana', 'img/banana.jpg');
var bathroom = new randomImg('bathroom', 'img/bathroom.jpg');
var boots = new randomImg('boots', 'img/boots.jpg');
var breakfast = new randomImg('breakfast', 'img/breakfast.jp');
var bubblegum = new randomImg('bubblegum', 'img/bubblegum.jpg');
var chair = new randomImg('chair', 'img/chair.jpg');
var cthulhu = new randomImg('cthulhu', 'img/cthulhu.jpg');
var dogDuck = new randomImg('dog-duck', 'img/dog-duck.jpg');
var dragon = new randomImg('dragon', 'img/dragon.jpg');
var pen = new randomImg('pen', 'img/pen.jpg');
var petSweep = new randomImg('pet-sweep', 'img/pet-sweep.jpg');
var scissors = new randomImg('scissors', 'img/scissors.jpg');
var shark = new randomImg('shark', 'img/shark.jpg');
var sweep = new randomImg('sweep', 'img/sweep.png');
var tauntaun = new randomImg('tauntaun', 'img/tauntaun.jpg');
var unicorn = new randomImg('unicorn','img/unicorn.jpg');
var usb = new randomImg('usb', 'img/usb.gif');
var waterCan = new randomImg('water-can', 'img/water-can.jpg');
var wineGlass = new randomImg('wine-glass','img/wine-glass.jpg');

function randomImg(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
}
