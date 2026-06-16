:::writing{variant="standard" id="53172"}
const dog = document.getElementById("dog");
const bone = document.getElementById("bone");

bone.addEventListener("click", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = 200 + Math.random() * 300;

    bone.style.left = x + "px";
    bone.style.top = y + "px";

    setTimeout(() => {
        dog.style.left = x + "px";
        dog.style.top = y + "px";
    }, 300);

});
:::

แล้วใน `index.html` ต้องมี

```html
<div id="dog">🐶</div>
<div id="bone">🦴</div>

<script src="script.js"></script>
