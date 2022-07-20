let date = () => {
    
    let dateText = document.getElementById("date_id");
    let dateBtn = document.getElementById("date_btn");
  
    dateText.innerHTML = new Date().toLocaleString();
  
    if(dateText.style.display == "none"){
      dateText.style.display = "block";
    }else{
      dateText.style.display = "none";
    }

 const cssObject={
     "color":"white",
     "background-color":"transparent",
     "margin-bottom":"3rem",
     "padding":"1rem",
 }
 $("#date_id").css(cssObject);
}

// backtotop start
let topFunction = () => {
  if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100){
      $("#back_top").css("display","block");
  }else{
      $("#back_top").css("display","none");
  }
}

window.onscroll = function() {topFunction()};
// backtotop end

// autocomplete start
$( function() {
  var availableTags = [
      "hakkımda",
      "yetenekler",
      "çalışmalar",
      "deneyimler",
      "iletişim"
  ];
  // availableTags.push(document.getElementById("form2Example1").value);

  $("#tags").autocomplete({
    source: availableTags
  });
} );
// autocomplete end

// Show Password Start
function showRegisterPassword(id1,id2) {
let x = document.getElementById(id1);
let y = document.getElementById(id2);
if (x.type === "password" && y.type === "password") {
x.type = "text";
y.type = "text";
} else {
x.type = "password";
y.type = "password";
}
}

function showLoginPassword(id){
let x = document.getElementById(id);
if (x.type === "password") {
x.type = "text";
} else {
x.type = "password";
}
}
// Show Password End

// haveAnAccount Start
function haveAnAccount(){
let registerModal = document.getElementById("registerId");
$(registerModal).css("display","none");
}
// haveAnAccount End

let search = () => {
var NS4 = (document.layers); // hangi browser?
var IE4 = (document.all);

var win = window; // pencere icinde aramak.
var n = 0;

function findInPage(str) {

var txt, i, found;

if (str == "")
return false;

if (NS4) {

if (!win.find(str))
while(win.find(str, false, true))
n++;
else
n++;

if (n == 0)
alert("Bulunamadi.");
}

if (IE4) {
txt = win.document.body.createTextRange();

for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
txt.moveStart("character", 1);
txt.moveEnd("textedit");
}

if (found) {
txt.moveStart("character", -1);
txt.findText(str);
txt.select();
txt.scrollIntoView();
n++;
}

else {
if (n > 0) {
n = 0;
findInPage(str);
}

else
alert("Bulunamadi.");
}
}

return false;
}
}

//Slider Start
var models = [
{
    name : 'HESMAR(THESIS)',
    image : 'picture/HESMAR1.png',
    modal : '#exampleModal1'
},
{
    name : 'ENSAH RESPONSIVE',
    image : 'picture/ensah.png',
    modal : '#exampleModal2'
},
{
    name : 'INSTAGRAM CLONE',
    image : 'picture/instagram.png',
    modal : '#exampleModal3'
},
{
    name : 'LINKEDIN CLONE',
    image : 'picture/linkedin.png',
    modal : '#exampleModal4'
},
{
    name : 'MEDIUM CLONE',
    image : 'picture/medium.png',
    modal : '#exampleModal5'
},
{
  name : 'RESPONSIVE DESIGN',
  image : 'picture/resweb.png',
  modal : '#exampleModal6'
},
{
name : 'SPOTIFY CLONE',
image : 'picture/spotify.png',
modal : '#exampleModal7'
},
{
  name : 'TODOLIST',
  image : 'picture/todolist.png',
  modal : '#exampleModal8'
},
];

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
duration : '2000',
random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function(){
index--;
showSlide(index);
console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function(){
index++;
showSlide(index);
console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
item.addEventListener('mouseenter', function(){
    clearInterval(interval);
});
});

document.querySelectorAll('.arrow').forEach(function(item){
item.addEventListener('mouseleave', function(){
    init(settings);
});
});

function init(settings){

var prev;
interval = setInterval(function(){
    if(settings.random){
        
        do{
            index = Math.floor(Math.random() * slaytCount);
        }while(index == prev){
            prev = index;
        }
    }else{
        if(slaytCount == index+1){
            index = -1;
        }
        showSlide(index);
        console.log(index);
        index++;
    }
    showSlide(index);
}, settings.duration);
}

function showSlide(i){

index = i;

if(i < 0){
    index = slaytCount - 1;
}
if(i >= slaytCount){
    index = 0;
}

document.querySelector('.card-title').textContent = models[index].name;

document.querySelector('.card-img-top').setAttribute('src', models[index].image);

document.querySelector('.card-link').setAttribute('data-bs-target', models[index].modal);
}
//Slider End

// Read More...
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Devamını Oku...";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Gizle...";
      moreText.style.display = "inline";
    }
  }
// Read More End