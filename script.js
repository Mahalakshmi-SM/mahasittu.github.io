// build dot matrix grid: 3 rows x 9 cols, weighted toward "on" to suggest a filled dataset
const dg = document.getElementById("dotgrid");
const total = 27;
const onCount = 20;
const pattern = Array.from({ length: total }, (_, i) => i < onCount);
for (let i = pattern.length - 1; i > 0; i--) {
  const j = Math.floor((((i * 9301 + 49297) % 233280) / 233280) * (i + 1));
  [pattern[i], pattern[j]] = [pattern[j], pattern[i]];
}
pattern.forEach((on) => {
  const dot = document.createElement("i");
  if (on) dot.classList.add("on");
  dg.appendChild(dot);
});
