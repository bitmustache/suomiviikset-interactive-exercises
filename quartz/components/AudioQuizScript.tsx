import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AudioQuizScript: QuartzComponent = (props: QuartzComponentProps) => {
  return <script src="/static/audio-quiz.js" defer></script>
}

export default (() => AudioQuizScript) satisfies QuartzComponentConstructor