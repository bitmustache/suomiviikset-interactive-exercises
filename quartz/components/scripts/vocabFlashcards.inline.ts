type VocabEntry = { fi: string; en: string }

function initFlashcard(container: HTMLElement) {
  const vocab: VocabEntry[] = JSON.parse(container.dataset.vocab ?? "[]")
  if (vocab.length === 0) return

  let current = 0

  const vocabList = container.querySelector(".vocab-list") as HTMLElement
  const practiceBtn = container.querySelector(
    '[data-action="start-flashcards"]',
  ) as HTMLElement
  const flashcardArea = container.querySelector(".flashcard-area") as HTMLElement
  const cardWrapper = container.querySelector(".flashcard-wrapper") as HTMLElement
  const cardFront = cardWrapper.querySelector(".flashcard-front") as HTMLElement
  const cardBack = cardWrapper.querySelector(".flashcard-back") as HTMLElement
  const cardCounter = container.querySelector(".card-counter") as HTMLElement

  function updateCard() {
    cardFront.textContent = vocab[current].en
    cardBack.textContent = vocab[current].fi
    cardCounter.textContent = `${current + 1} / ${vocab.length}`
    cardWrapper.classList.remove("flipped")
  }

  function showFlashcards() {
    current = 0
    updateCard()
    vocabList.style.display = "none"
    practiceBtn.style.display = "none"
    flashcardArea.style.display = "flex"
    flashcardArea.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  function showList() {
    vocabList.style.display = "grid"
    practiceBtn.style.display = ""
    flashcardArea.style.display = "none"
  }

  function handleClick(e: Event) {
    const target = e.target as HTMLElement
    const actionEl = target.closest("[data-action]")
    if (!actionEl) return

    const action = (actionEl as HTMLElement).dataset.action
    switch (action) {
      case "start-flashcards":
        showFlashcards()
        break
      case "flip-card":
        cardWrapper.classList.toggle("flipped")
        break
      case "next-card":
        current = (current + 1) % vocab.length
        updateCard()
        break
      case "prev-card":
        current = (current - 1 + vocab.length) % vocab.length
        updateCard()
        break
      case "back-to-list":
        showList()
        break
    }
  }

  container.addEventListener("click", handleClick)
  window.addCleanup(() => container.removeEventListener("click", handleClick))
}

document.addEventListener("nav", () => {
  document
    .querySelectorAll<HTMLElement>(".vocab-container")
    .forEach((el) => initFlashcard(el))
})
