<style>
  .vocab-container {
    margin: 20px 0;
    padding: 20px;
    background-color: var(--highlight);
    border-radius: 15px;
    border: 1px solid var(--outline);
  }

  .vocab-container h3 {
    color: var(--secondary);
  }

  .vocab-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 12px;
    margin-bottom: 24px;
  }

  .vocab-item {
    background: var(--light, #f5f5f5);
    border-radius: 8px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .vocab-fi {
    font-weight: 600;
  }

  .vocab-en {
    color: #757575;
    font-style: italic;
  }

  .practice-btn {
    background: var(--secondary);
    color: var(--light) !important;
    border: none;
    border-bottom: 4px solid var(--tertiary);
    padding: 10px 24px;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s;
    text-decoration: none !important;
  }

  .practice-btn:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
    border-bottom-width: 5px;
  }

  .practice-btn:active {
    transform: translateY(3px);
    border-bottom-width: 1px;
  }

  .flashcard-area {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 16px;
  }

  .flashcard-wrapper {
    perspective: 800px;
    width: 300px;
    height: 180px;
    cursor: pointer;
  }

  .flashcard-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
  }

  .flashcard-wrapper.flipped .flashcard-inner {
    transform: rotateY(180deg);
  }

  .flashcard-front,
  .flashcard-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 16px;
    box-sizing: border-box;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .flashcard-front {
    background: var(--secondary);
    color: var(--light) !important;
  }

  .flashcard-back {
    background: var(--light, #e8eaf6);
    color: var(--dark, #333);
    transform: rotateY(180deg);
  }

  .flashcard-hint {
    font-size: 0.85rem;
    color: #9e9e9e;
    margin-top: -8px;
  }

  .flashcard-nav {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .nav-btn {
    background: #e0e0e0;
    border: none;
    border-bottom: 4px solid #bdbdbd;
    padding: 8px 20px;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s;
    color: var(--dark) !important;
    text-decoration: none !important;
  }

  .nav-btn:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
    border-bottom-width: 5px;
  }

  .nav-btn:active {
    transform: translateY(3px);
    border-bottom-width: 1px;
  }

  .card-counter {
    font-size: 0.9rem;
    color: #757575;
    min-width: 60px;
    text-align: center;
  }

  .back-btn {
    background: transparent;
    border: 2px solid var(--secondary);
    border-bottom: 4px solid var(--tertiary);
    color: var(--secondary) !important;
    padding: 8px 20px;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s;
    text-decoration: none !important;
  }

  .back-btn:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
    border-bottom-width: 5px;
  }

  .back-btn:active {
    transform: translateY(3px);
    border-bottom-width: 1px;
  }
</style>

<div class="vocab-container" id="vocabContainer">
  <h3>Vocabulary: Pets (Lemmikit)</h3>
  <p>Learn the Finnish words for common pets.</p>

  <div id="vocabList" class="vocab-list">
    <div class="vocab-item"><span class="vocab-fi">koira</span><span class="vocab-en">dog</span></div>
    <div class="vocab-item"><span class="vocab-fi">kissa</span><span class="vocab-en">cat</span></div>
    <div class="vocab-item"><span class="vocab-fi">hamsteri</span><span class="vocab-en">hamster</span></div>
    <div class="vocab-item"><span class="vocab-fi">kala</span><span class="vocab-en">fish</span></div>
    <div class="vocab-item"><span class="vocab-fi">papukaija</span><span class="vocab-en">parrot</span></div>
    <div class="vocab-item"><span class="vocab-fi">kani</span><span class="vocab-en">rabbit</span></div>
    <div class="vocab-item"><span class="vocab-fi">marsu</span><span class="vocab-en">guinea pig</span></div>
    <div class="vocab-item"><span class="vocab-fi">kilpikonna</span><span class="vocab-en">turtle</span></div>
    <div class="vocab-item"><span class="vocab-fi">hiiri</span><span class="vocab-en">mouse</span></div>
    <div class="vocab-item"><span class="vocab-fi">lintu</span><span class="vocab-en">bird</span></div>
    <div class="vocab-item"><span class="vocab-fi">fretti</span><span class="vocab-en">ferret</span></div>
    <div class="vocab-item"><span class="vocab-fi">gerbiili</span><span class="vocab-en">gerbil</span></div>
    <div class="vocab-item"><span class="vocab-fi">kultakala</span><span class="vocab-en">goldfish</span></div>
    <div class="vocab-item"><span class="vocab-fi">poni</span><span class="vocab-en">pony</span></div>
  </div>

  <button class="practice-btn" onclick="startFlashcards()">Practice with flashcards</button>

  <div id="flashcardArea" class="flashcard-area">
    <div class="flashcard-wrapper" id="flashcard" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="flashcard-front" id="cardFront"></div>
        <div class="flashcard-back" id="cardBack"></div>
      </div>
    </div>
    <p class="flashcard-hint">Click the card to flip</p>
    <div class="flashcard-nav">
      <button class="nav-btn" onclick="prevCard()">&#8592; Prev</button>
      <span class="card-counter" id="cardCounter"></span>
      <button class="nav-btn" onclick="nextCard()">Next &#8594;</button>
    </div>
    <button class="back-btn" onclick="backToList()">&#8592; Back to list</button>
  </div>
</div>

<script>
var _fcVocab = [
  { fi: "koira", en: "dog" },
  { fi: "kissa", en: "cat" },
  { fi: "hamsteri", en: "hamster" },
  { fi: "kala", en: "fish" },
  { fi: "papukaija", en: "parrot" },
  { fi: "kani", en: "rabbit" },
  { fi: "marsu", en: "guinea pig" },
  { fi: "kilpikonna", en: "turtle" },
  { fi: "hiiri", en: "mouse" },
  { fi: "lintu", en: "bird" },
  { fi: "fretti", en: "ferret" },
  { fi: "gerbiili", en: "gerbil" },
  { fi: "kultakala", en: "goldfish" },
  { fi: "poni", en: "pony" }
];

var _fcCurrent = 0;

function _fcUpdateCard() {
  document.getElementById("cardFront").textContent = _fcVocab[_fcCurrent].en;
  document.getElementById("cardBack").textContent = _fcVocab[_fcCurrent].fi;
  document.getElementById("cardCounter").textContent = (_fcCurrent + 1) + " / " + _fcVocab.length;
  document.getElementById("flashcard").classList.remove("flipped");
}

function startFlashcards() {
  _fcCurrent = 0;
  _fcUpdateCard();
  document.getElementById("vocabList").style.display = "none";
  document.querySelectorAll(".practice-btn").forEach(function (b) { b.style.display = "none"; });
  document.getElementById("flashcardArea").style.display = "flex";
}

function flipCard() {
  document.getElementById("flashcard").classList.toggle("flipped");
}

function nextCard() {
  _fcCurrent = (_fcCurrent + 1) % _fcVocab.length;
  _fcUpdateCard();
}

function prevCard() {
  _fcCurrent = (_fcCurrent - 1 + _fcVocab.length) % _fcVocab.length;
  _fcUpdateCard();
}

function backToList() {
  document.getElementById("vocabList").style.display = "grid";
  document.querySelectorAll(".practice-btn").forEach(function (b) { b.style.display = ""; });
  document.getElementById("flashcardArea").style.display = "none";
}
</script>

