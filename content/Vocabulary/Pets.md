<style>
  .vocab-container {
    font-family: inherit;
  }

  .vocab-container h3 {
    color: var(--secondary, #5c6bc0);
  }

  .vocab-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 12px;
    margin-bottom: 24px;
  }

  .vocab-item {
    background: #f5f5f5;
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
    background: var(--secondary, #5c6bc0);
    color: #fff;
    border: none;
    padding: 10px 24px;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .practice-btn:hover {
    opacity: 0.9;
  }

  .flashcard-area {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 16px;
  }

  .flashcard-area.active {
    display: flex;
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
    background: var(--secondary, #5c6bc0);
    color: #fff;
  }

  .flashcard-back {
    background: #e8eaf6;
    color: #333;
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
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .nav-btn:hover {
    background: #bdbdbd;
  }

  .card-counter {
    font-size: 0.9rem;
    color: #757575;
    min-width: 60px;
    text-align: center;
  }

  .back-btn {
    background: transparent;
    border: 1px solid var(--secondary, #5c6bc0);
    color: var(--secondary, #5c6bc0);
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }

  .back-btn:hover {
    background: var(--secondary, #5c6bc0);
    color: #fff;
  }
</style>

<div class="vocab-container">
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
  (function () {
    var vocab = [
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

    var current = 0;

    function updateCard() {
      document.getElementById("cardFront").textContent = vocab[current].en;
      document.getElementById("cardBack").textContent = vocab[current].fi;
      document.getElementById("cardCounter").textContent = (current + 1) + " / " + vocab.length;
      document.getElementById("flashcard").classList.remove("flipped");
    }

    window.startFlashcards = function () {
      current = 0;
      updateCard();
      document.getElementById("vocabList").style.display = "none";
      document.querySelectorAll(".practice-btn").forEach(function (b) { b.style.display = "none"; });
      document.getElementById("flashcardArea").classList.add("active");
    };

    window.flipCard = function () {
      document.getElementById("flashcard").classList.toggle("flipped");
    };

    window.nextCard = function () {
      current = (current + 1) % vocab.length;
      updateCard();
    };

    window.prevCard = function () {
      current = (current - 1 + vocab.length) % vocab.length;
      updateCard();
    };

    window.backToList = function () {
      document.getElementById("vocabList").style.display = "grid";
      document.querySelectorAll(".practice-btn").forEach(function (b) { b.style.display = ""; });
      document.getElementById("flashcardArea").classList.remove("active");
    };
  })();
</script>
