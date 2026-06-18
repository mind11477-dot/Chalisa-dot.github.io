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
  if (!isDragging) return;
  isDragging = false;

  const imgRect = img.getBoundingClientRect();
  const zoneRect = dropZone.getBoundingClientRect();

  // จุดกึ่งกลางของรูป
  const imgCenterX = imgRect.left + imgRect.width / 2;
  const imgCenterY = imgRect.top + imgRect.height / 2;

  // จุดกึ่งกลางของช่อง
  const zoneCenterX = zoneRect.left + zoneRect.width / 2;
  const zoneCenterY = zoneRect.top + zoneRect.height / 2;

  // ระยะห่าง
  const distance = Math.hypot(
    imgCenterX - zoneCenterX,
    imgCenterY - zoneCenterY
  );

  // ถ้าอยู่ในระยะ 100px ให้ดูดเข้าช่อง
  if (distance < /250) {

    img.style.left =
      (zoneCenterX - imgRect.width / 2) + "px";

    img.style.top =
      (zoneCenterY - imgRect.height / 2) + "px";

    console.log("ดูดเข้าที่แล้ว");
  }
});
