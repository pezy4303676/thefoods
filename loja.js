function addnumber() {
  let Element = document.getElementById("span");

  let value = Element.innerHTML;

  ++value;

  localStorage.setItem("number", value);

  document.getElementById("span").innerHTML = value;
}

window.onload = function() {
  let number = localStorage.getItem("number");
  document.getElementById("span").innerHTML = number;
}

let addcart = document.getElementById("addcart");
addcart.addEventListener("click", addnumber);

function adnumber() {
  let Element = document.getElementById("span");

  let value = Element.innerHTML;

  ++value;

  localStorage.setItem("number", value);

  document.getElementById("span").innerHTML = value;
}

window.onload = function() {
  let number = localStorage.getItem("number");
  document.getElementById("span").innerHTML = number;
}


let addcarte = document.getElementById("addcarte");
addcarte.addEventListener("click", addnumber);

function adnumber() {
  let Element = document.getElementById("span");

  let value = Element.innerHTML;

  ++value;

  localStorage.setItem("number", value);

  document.getElementById("span").innerHTML = value;
}

window.onload = function() {
  let number = localStorage.getItem("number");
  document.getElementById("span").innerHTML = number;
}


let imgC = document.getElementById("imgcontaapload");
let modalMenu = document.getElementById("sin");

imgC.addEventListener("click", opaCite);

function opaCite() {
  if (modalMenu.style.opacity === "1") {
    modalMenu.style.opacity = "0";
  } else {
    modalMenu.style.opacity = "1";
  }
}

let addcar = document.getElementById("addcar");
addcar.addEventListener("click", adnumber);



