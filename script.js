const container = document.querySelector(".container");

function goNext(){
  container.style.transform = "translateX(-100vw)";
}

function goBack(){
  container.style.transform = "translateX(0)";
}
