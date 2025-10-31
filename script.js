const words = [
  {en: "abolish", sv: "avskaffa"},
  {en: "abolitionist", sv: "abolitionist, förkämpe för slavhandelns avskaffande"},
  {en: "achieve", sv: "uppnå, åstadkomma"},
  {en: "along", sv: "längs med"},
  {en: "ancestors", sv: "förfäder"},
  {en: "arrive", sv: "anlända"},
  {en: "attract", sv: "locka"},
  {en: "cargo", sv: "(skepps)last"},
  {en: "civil rights", sv: "medborgerliga rättigheter"},
  {en: "civil rights movement", sv: "medborgarrättsrörelsen"},
  {en: "civil war", sv: "inbördeskrig"},
  {en: "commitment", sv: "engagemang"}, // corrected
  {en: "consequently", sv: "följaktligen"},
  {en: "declare war", sv: "förklara krig"},
  {en: "discover", sv: "upptäcka"},
  {en: "establish", sv: "etablera"},
  {en: "explorer", sv: "upptäcktsresande"},
  {en: "illegal", sv: "olaglig"},
  {en: "illiterate", sv: "analfabet"},
  {en: "incident", sv: "händelse"},
  {en: "independence", sv: "självständighet"},
  {en: "labor", sv: "arbete"},
  {en: "legalize", sv: "legalisera"},
  {en: "liberated", sv: "befriad"},
  {en: "multitude", sv: "stor mängd, folkmassa"},
  {en: "native", sv: "infödd, ursprungs-"},
  {en: "persecution", sv: "förföljelse"},
  {en: "racial segregation", sv: "rassegregation, rasåtskillnad"},
  {en: "revive", sv: "återuppliva"},
  {en: "roughly", sv: "grovt taget, ungefär"},
  {en: "settle", sv: "bosätta sig"},
  {en: "settlement", sv: "bosättning"},
  {en: "sign", sv: "underteckna"},
  {en: "slave labor", sv: "slavarbetskraft"},
  {en: "slavery", sv: "slaveri"},
  {en: "strait", sv: "sund"},
  {en: "struggle", sv: "kamp, kämpa"},
  {en: "taxes", sv: "skatter"}
];

let currentWord;

function nextWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  document.getElementById("word").textContent = currentWord.en;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = currentWord.sv.toLowerCase();
  
  if (correctAnswer.includes(userAnswer) && userAnswer !== "") {
    document.getElementById("feedback").textContent = "✅ Correct!";
    document.getElementById("feedback").style.color = "green";
  } else {
    document.getElementById("feedback").textContent = "❌ Wrong! Correct: " + currentWord.sv;
    document.getElementById("feedback").style.color = "red";
  }
}

window.onload = nextWord;

