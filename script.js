const oj1 = document.getElementById("oj1");
const dropZone = document.getElementById("dropZone");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

oj1.addEventListener("mousedown", (e) => {
  dragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  oj1.style.left = (e.pageX - offsetX) + "px";
  oj1.style.top = (e.pageY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  dragging = false;

  const imgRect = oj1.getBoundingClientRect();
  const zoneRect = dropZone.getBoundingClientRect();

  const imgCenterX = imgRect.left + imgRect.width / 2;
  const imgCenterY = imgRect.top + imgRect.height / 2;

  const zoneCenterX = zoneRect.left + zoneRect.width / 2;
  const zoneCenterY = zoneRect.top + zoneRect.height / 2;

  const distance = Math.hypot(
    imgCenterX - zoneCenterX,
    imgCenterY - zoneCenterY
  );

  if (distance < 250) {
    oj1.style.left = (zoneCenterX - imgRect.width / 2) + "px";
    oj1.style.top = (zoneCenterY - imgRect.height / 2) + "px";
  }
});
