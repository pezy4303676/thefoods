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

