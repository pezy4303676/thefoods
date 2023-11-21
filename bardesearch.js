function search() {
  let filter = document.getElementById("textINP").value.toUpperCase();
  let items = document.querySelectorAll("#product");

  for (var i = 0; i < items.length; i++) {
    let a = items[i].querySelector("stro");
    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().includes(filter)) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}
