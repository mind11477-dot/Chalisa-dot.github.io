const img = document.getElementById("myImage");
const dropZone = document.getElementById("dropZone");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

img.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  img.style.left = (e.pageX - offsetX) + "px";
  img.style.top = (e.pageY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;

  // 📌 เช็คว่าทับจุด mark ไหม
  const imgRect = img.getBoundingClientRect();
  const zoneRect = dropZone.getBoundingClientRect();

  const isOver =
    imgRect.left < zoneRect.right &&
    imgRect.right > zoneRect.left &&
    imgRect.top < zoneRect.bottom &&
    imgRect.bottom > zoneRect.top;

  if (isOver) {
    // 🧲 snap เข้าที่
    img.style.left = zoneRect.left + "px";
    img.style.top = zoneRect.top + "px";

    alert("✔ วางถูกแล้ว!");
  }
});
