<style>
  .kuuntelu-paketti {
    background-color: var(--highlight);
    padding: 20px;
    border-radius: 15px;
    border: 1px solid var(--outline);
    margin: 20px 0;
    font-family: var(--bodyFont);
  }
  .visa-otsikko {
    color: var(--secondary);
    margin-top: 0;
  }
  .audio-ohjain {
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: rgba(var(--secondary), 0.05);
    padding: 12px 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .soita-btn {
    background-color: var(--secondary);
    color: var(--light) !important;
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .vaihtoehdot-ryhma {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .valinta-btn {
    background-color: var(--light);
    color: var(--dark);
    border: 2px solid var(--outline);
    border-radius: 10px;
    padding: 12px 16px;
    font-size: 1.05rem;
    text-align: left;
    cursor: pointer;
  }
</style>

<div class="kuuntelu-paketti">
  <h3 class="visa-otsikko">🎧 Kuunteluharjoitus</h3>
  <p>Kuuntele äänite ja valitse oikea vaihtoehto.</p>

  <audio id="audio-v1" src="/static/audio/sää.mp3"></audio>

  <div class="audio-ohjain">
    <button class="soita-btn qz-audio-trigger" data-audio-target="audio-v1">▶</button>
    <span><strong>Kuuntele näyte</strong></span>
  </div>

  <div class="vaihtoehdot-ryhma" id="ryhma-v1">
	<p>Onko sanassa A vai Ä?</p>
    <button class="valinta-btn qz-vaihtoehto" data-group="ryhma-v1" data-correct="false">saa</button>
    <button class="valinta-btn qz-vaihtoehto" data-group="ryhma-v1" data-correct="true">sää</button>
  </div>
</div>

<script src="/static/audio-quiz.js"></script>

