'use strict';

var imageArray = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];
var nameArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productArray = [];
var clicksArray = [];
var totalShownArray = [];
var totalClicks = 0;
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

function Products(name, path) {
  this.name = name;
  this.path = path;
  this.itemClick = 0;
  this.imageShown = 0;
  productArray.push(this);
};

for (var i = 0; i < imageArray.length; i++) {
  new Products(nameArray[i], imageArray[i]);
}

if (localStorage.lclStorageArr) {
  var newImgArr = JSON.parse(localStorage.lclStorageArr);
  for(var i = 0; i < newImgArr.length; i++) {
    productArray[i].itemClick += newImgArr[i].itemClick;
    productArray[i].imageShown += newImgArr[i].imageShown;
  }
}

function randomImgIndex(){
  return Math.floor(Math.random() * imageArray.length);
};

var prevImgIndexes = [];
function randomImg(){
  var currentImgIndexes = [];
  while (currentImgIndexes.length < 3) {
    var imgSelector = randomImgIndex();
    if (!currentImgIndexes.includes(imgSelector) && !prevImgIndexes.includes(imgSelector)) {
      currentImgIndexes.push(imgSelector);
    }
  }
  var prod1 = productArray[currentImgIndexes[0]];
  var prod2 = productArray[currentImgIndexes[1]];
  var prod3 = productArray[currentImgIndexes[2]];

  img1.src = prod1.path;
  img2.src = prod2.path;
  img3.src = prod3.path;
  img1.alt = currentImgIndexes[0];
  img2.alt = currentImgIndexes[1];
  img3.alt = currentImgIndexes[2];

  prevImgIndexes = currentImgIndexes;

  prod1.imageShown++;
  prod2.imageShown++;
  prod3.imageShown++;
};
randomImg();

var clickLimit = 25;
function handleTheClick(){
  randomImg();
  totalClicks++;
  var productIdx = this.alt;
  productArray[productIdx].itemClick++;
  if (totalClicks === clickLimit) {
    localStorage['lclStorageArr'] = JSON.stringify(productArray);
    img1.removeEventListener('click', handleTheClick);
    img2.removeEventListener('click', handleTheClick);
    img3.removeEventListener('click', handleTheClick);
    productClicks();
  }
};

img1.addEventListener('click', handleTheClick);
img2.addEventListener('click', handleTheClick);
img3.addEventListener('click', handleTheClick);

function productClicks(){
  // var info = document.getElementById('info');
  // var ul = document.createElement('ul');
  // info.appendChild(ul);
  for (var i = 0; i < productArray.length; i++) {
    // var li = document.createElement('li');
    var dataStr = productArray[i].itemClick + ' clicks for ' + productArray[i].name;
    clicksArray.push(productArray[i].itemClick);
    totalShownArray.push(productArray[i].imageShown);
    // li.innerText = dataStr;
    // ul.appendChild(li);
  }
  chart();
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';

function chart() {
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [{
        label: 'Images clicked',
        data: clicksArray,
        backgroundColor: '#2D882D',
        borderColor: 'black'
      },{
        label: 'Times shown',
        data: totalShownArray,
        backgroundColor: '#000',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }
);
}

function resetData() {
  var confirmReset = confirm('This will Erase all previous Results. Are you sure you want to Reset?');
  if(confirmReset){
    localStorage.clear();
    window.location.reload();
  }
}
resetBtn.addEventListener('click', resetData);
