import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/VocabFlashcards.scss"
// @ts-ignore - Quartz supports .inline.ts imports
import script from "./scripts/vocabFlashcards.inline"

type VocabEntry = { fi: string; en: string }

interface Options {
  title?: string
}

const defaultOptions: Options = {
  title: "Vocabulary Flashcards",
}

export default ((userOpts?: Options) => {
  const opts = { ...defaultOptions, ...userOpts }

  function Flashcards({ fileData, displayClass }: QuartzComponentProps) {
    const vocab: VocabEntry[] =
      (fileData.frontmatter?.flashcards as VocabEntry[]) ?? []

    if (vocab.length === 0) {
      return null
    }

    const vocabJson = JSON.stringify(vocab)

    return (
      <div class={`vocab-container ${displayClass ?? ""}`} data-vocab={vocabJson}>
        <h3>{opts.title}</h3>
        <p class="flashcards-subtitle">Learn and practice these vocabulary words.</p>

        <div class="vocab-list">
          {vocab.map((entry, i) => (
            <div class="vocab-item" key={i}>
              <span class="vocab-fi">{entry.fi}</span>
              <span class="vocab-en">{entry.en}</span>
            </div>
          ))}
        </div>

        <button class="practice-btn" data-action="start-flashcards">
          Practice with flashcards
        </button>

        <div class="flashcard-area" style={{ display: "none" }}>
          <div class="flashcard-wrapper" data-action="flip-card">
            <div class="flashcard-inner">
              <div class="flashcard-front"></div>
              <div class="flashcard-back"></div>
            </div>
          </div>
          <p class="flashcard-hint">Click the card to flip</p>
          <div class="flashcard-nav">
            <button class="nav-btn" data-action="prev-card">Prev</button>
            <span class="card-counter"></span>
            <button class="nav-btn" data-action="next-card">Next</button>
          </div>
          <button class="back-btn" data-action="back-to-list">
            Back to list
          </button>
        </div>
      </div>
    )
  }

  Flashcards.css = styles
  Flashcards.afterDOMLoaded = script
  return Flashcards
}) satisfies QuartzComponentConstructor
