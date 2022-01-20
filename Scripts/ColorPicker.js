const c = document.getElementById("color-picker");
const ctx = c.getContext("2d");

const DrawCircle = () => {
  ctx.lineWidth = 20;

  for (let i = 0; i <= 360; i++) {
    let start = (i / 360) * Math.PI * 2;
    let end = ((i + 1) / 360) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, 100, start, end);
    ctx.strokeStyle = `hsl(${i},100%,50%)`;
    ctx.stroke();
  }
};

const DrawTriangle = () => {
  const start = { x: c.width / 2 - 50, y: c.height / 2 - 50 };

  let _s = 0; // saturation
  for (let l = 100; l >= 0; l--) {
    // l - lightness
    for (let s = 0; s <= _s; s++) {
      ctx.fillStyle = `hsl(${360}, ${s}%, ${l}%)`;
      ctx.fillRect(start.x + s, start.y - l + 100, 1, 1);
    }
    if (_s < 100 && l > 50) {
      _s += 2;
    } else {
      _s -= 2;
    }
  }
};

DrawCircle();
DrawTriangle();
