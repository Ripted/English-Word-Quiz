// Data: English -> Swedish
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
  {en: "commitment", sv: "engagemang"},
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

// Data: German Q&A
const germanQuestions = [
  {q: "Wie heißt du? (What’s your name?)", a: "Mein Name ist ... / Ich heiße ..."},
  {q: "Wo wohnst du? (Where do you live?)", a: "Ich wohne in ..."},
  {q: "Wie alt bist du? (How old are you?)", a: "Ich bin ... Jahre alt"},
  {q: "Was ist deine Lieblingsfarbe? (What’s your favorite color?)", a: "Meine Lieblingsfarbe ist ..."},
  {q: "Hast du Geschwister? (Do you have siblings?)", a: "Ja/Nein, ich habe ..."},
  {q: "Was machst du gern? (What do you like to do?)", a: "Ich mache gern ..."},
  {q: "Magst du Musik? (Do you like music?)", a: "Ja, ich mag Musik / Nein"},
  {q: "Was ist dein Lieblingsessen? (What’s your favorite food?)", a: "Mein Lieblingsessen ist ..."},
  {q: "Welche Sprache sprichst du? (Which language do you speak?)", a: "Ich spreche ..."},
  {q: "Was bedeutet „Danke“?", a: "Thank you"},
  {q: "Wie sagt man „Goodbye“ auf Deutsch?", a: "Auf Wiedersehen / Tschüss"},
  {q: "Was bedeutet „Wie geht’s?“?", a: "How are you?"},
  {q: "Was ist die deutsche Zahl für „drei“?", a: "drei"},
  {q: "Was bedeutet „Entschuldigung“?", a: "Sorry / Excuse me"},
  {q: "Wie sagt man „My name is…“ auf Deutsch?", a: "Mein Name ist ... / Ich heiße ..."}
];

document.addEventListener("DOMContentLoaded", () => {
  // Tabs
  const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
  const tabContents = Array.from(document.querySelectorAll(".tab-content"));

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
      // Toggle active button
      tabButtons.forEach(b => b.classList.toggle("active", b === btn));
      // Toggle content
      tabContents.forEach(c => c.classList.toggle("active", c.id === target));
    });
  });

  // English quiz
  let currentWord = null;
  let score = 0;

  const wordEl = document.getElementById("word");
  const answerEl = document.getElementById("answer");
  const feedbackEl = document.getElementById("feedback");
  const scoreEl = document.getElementById("score
