let fighters = [
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🐺",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];
let stageEl = document.getElementById("stage");
let fightBtn = document.getElementById("fightBtn");

fightBtn.addEventListener("click", function () {
  let pickFighterOne = Math.floor(Math.random() * 16) + 1;
  let pickFighterTwo = Math.floor(Math.random() * 16) + 1;
  stageEl.textContent =
    fighters[pickFighterOne] + " VS" + fighters[pickFighterTwo];
});
