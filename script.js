const img = document.getElementById("myImage");
const dropZone = document.getElementById("dropZone");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let isPlaced = false; // 👈 สถานะว่าเข้าแล้วหรือยัง

img.addEventListener("mousedown", (e) => {
  if (isPlaced) return; // ❌ วางแล้วจะลากไม่ได้ (ถ้าอยากให้ลากได้ เอาออกบรรทัดนี้)

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

  const zoneCenterX = zoneRect.left + zoneRect.width / 2;
  const zoneCenterY = zoneRect.top + zoneRect.height / 2;

  const imgCenterX = imgRect.left + imgRect.width / 2;
  const imgCenterY = imgRect.top + imgRect.height / 2;

  const distance = Math.hypot(
    zoneCenterX - imgCenterX,
    zoneCenterY - imgCenterY
  );

  // 🧲 ถ้าเข้าใกล้
  if (distance < 80) {
    img.style.left =
      zoneRect.left + zoneRect.width / 2 - imgRect.width / 2 + "px";
    img.style.top =
      zoneRect.top + zoneRect.height / 2 - imgRect.height / 2 + "px";

    isPlaced = true; // ✅ บอกว่าเข้าแล้ว

    dropZone.style.backgroundColor = "rgba(0,255,0,0.2)"; // 🟢 เปลี่ยนสีช่อง

    console.log("✔ เข้าแล้ว"); // 👈 ดูใน console ได้ด้วย
  }
});
