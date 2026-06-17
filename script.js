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

  const imgRect = img.getBoundingClientRect();
  const zoneRect = dropZone.getBoundingClientRect();

  // 🎯 หาจุดกลางของ dropZone
  const zoneCenterX = zoneRect.left + zoneRect.width / 2;
  const zoneCenterY = zoneRect.top + zoneRect.height / 2;

  // 📏 หาจุดกลางของรูป
  const imgCenterX = imgRect.left + imgRect.width / 2;
  const imgCenterY = imgRect.top + imgRect.height / 2;

  // 🔍 คำนวณระยะห่าง
  const distance = Math.hypot(
    zoneCenterX - imgCenterX,
    zoneCenterY - imgCenterY
  );

  // ✨ ถ้าใกล้พอ → ดูดเข้าที่
  if (distance < 80) {
    img.style.left = (zoneRect.left + zoneRect.width / 2 - imgRect.width / 2) + "px";
    img.style.top = (zoneRect.top + zoneRect.height / 2 - imgRect.height / 2) + "px";

    alert("✔ ดูดเข้าที่แล้ว!");
  }
});
