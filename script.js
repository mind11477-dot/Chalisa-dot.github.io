const img = document.getElementById("myImage");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

img.addEventListener("mousedown", (e) => {
  isDragging = true;

  // เก็บตำแหน่งที่คลิกบนรูป
  offsetX = e.offsetX;
  offsetY = e.offsetY;

  img.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  // คำนวณตำแหน่งใหม่
  img.style.left = (e.pageX - offsetX) + "px";
  img.style.top = (e.pageY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  img.style.cursor = "grab";
});
