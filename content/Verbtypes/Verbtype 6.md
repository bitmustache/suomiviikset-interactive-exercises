<style>
  /* 1. CONTAINER - Uses Quartz highlight background */
  .harjoitus-paketti {
    background-color: var(--highlight); 
    padding: 20px;
    border-radius: 15px;
    border: 1px solid var(--outline);
    margin: 20px 0;
  }

  /* 2. THE CONSTANT LONG LINE INPUT - Uses Quartz accent colors */
  .finnish-input {
    border: none;
    border-bottom: 2px solid var(--secondary);
    width: 160px;
    outline: none;
    background: transparent;
    font-family: inherit;
    font-size: 1.1em;
    text-align: center;
    color: var(--dark);
    transition: border-color 0.2s;
  }
  .finnish-input:focus {
    border-bottom: 2px solid var(--tertiary);
  }

  /* 3. THE TACTILE BUTTON - Uses Quartz theme colors */
  .tarkista-btn {
    background-color: var(--secondary);
    color: var(--light) !important; 
    border: none;
    /* Uses tertiary for the 3D shadow effect */
    border-bottom: 4px solid var(--tertiary);
    border-radius: 12px;
    padding: 8px 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s;
    margin-top: 10px;
    text-decoration: none !important;
    display: inline-block;
  }

  .tarkista-btn:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
    border-bottom-width: 5px;
  }

  .tarkista-btn:active {
    transform: translateY(3px);
    border-bottom-width: 1px;
  }

  /* 4. FEEDBACK TEXT */
  .palaute {
    margin-left: 15px;
    font-weight: bold;
    font-size: 1.1rem;
  }
</style>

<div class="harjoitus-paketti">
  <h3 style="color: var(--secondary);">Verb Practice: Type 6</h3>
  <p>Fill in the missing verb in its correct form.</p>
  <div style="margin-bottom: 20px;">
    <p><strong>lämmetä - to warm up</strong></p>
    <p>1. Odota, että sauna ________!</p>
    <button class="tarkista-btn" onclick="tarkista('v1', 'lämpenee')">Check</button>
    <span id="v1-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>2. Hän ei _______ tälle idealle…</p>
    <button class="tarkista-btn" onclick="tarkista('v2', 'lämpene')">Check</button>
    <span id="v2-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>kylmetä - to chill, to become cold</strong></p>
    <p>3. Sää ________ usein Suomessa helmikuussa.</p>
    <button class="tarkista-btn" onclick="tarkista('v3', 'kylmenee')">Check</button>
    <span id="v3-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>4. Pakastimessa jäätelö ________ ja jäätyy taas nopeasti.</p>
    <button class="tarkista-btn" onclick="tarkista('v4', 'kylmenee')">Check</button>
    <span id="v4-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>tarjeta - to withstand the cold, to be warm enough</strong></p>
    <p>5. __________ sinä ulkona tuolla takilla?</p>
    <button class="tarkista-btn" onclick="tarkista('v5', 'tarkenetko')">Check</button>
    <span id="v5-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>6. Hyvillä ja paksuilla hanskoilla ________ kyllä myös helmikuun pakkasissa!</p>
    <button class="tarkista-btn" onclick="tarkista('v6', 'tarkenee')">Check</button>
    <span id="v6-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>kyetä - to be able to, to be capable of</strong></p>
    <p>7. Me mietimme, _________ hän vielä tähän tehtävään.</p>
    <button class="tarkista-btn" onclick="tarkista('v7', 'kykeneekö')">Check</button>
    <span id="v7-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>8. ___________ nämä ihmiset ymmärtämään tilanteen vakavuuden?</p>
    <button class="tarkista-btn" onclick="tarkista('v8', 'kykenevätkö')">Check</button>
    <span id="v8-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>vanheta - to become older, to expire</strong></p>
    <p>9. Valtionvelka ei _______.</p>
    <button class="tarkista-btn" onclick="tarkista('v9', 'vanhene')">Check</button>
    <span id="v9-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>10. Tuo mies ________ tyylikkäästi.</p>
    <button class="tarkista-btn" onclick="tarkista('v10', 'vanhenee')">Check</button>
    <span id="v10-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>nuoreta - to become younger</strong></p>
    <p>11. Hän ei tuosta enää _______.</p>
    <button class="tarkista-btn" onclick="tarkista('v11', 'nuorene')">Check</button>
    <span id="v11-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>12. Iho kuin ________, kun käytät tätä ihovoidetta!</p>
    <button class="tarkista-btn" onclick="tarkista('v12', 'nuorenee')">Check</button>
    <span id="v12-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>vaieta - to become silent</strong></p>
    <p>13. Miksi sinä ________, vaikka sinun pitäisi sanoa ääneen, mitä ajattelet?</p>
    <button class="tarkista-btn" onclick="tarkista('v13', 'vaikenet')">Check</button>
    <span id="v13-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>14. Kaupungin äänet __________ ympärillä, kun he suutelivat.</p>
    <button class="tarkista-btn" onclick="tarkista('v14', 'vaikenivat')">Check</button>
    <span id="v14-res" class="palaute"></span>
  </div>
</div>

<script>
function tarkista(id, answer) {
  const input = document.getElementById(id);
  const res = document.getElementById(id + '-res');
  const userVal = input.value.trim().toLowerCase();
  
  if (userVal === answer) {
    res.innerHTML = '✅ Hienoa!';
    // Matches the "Correct" state to your theme's primary accent
    res.style.color = 'var(--secondary)';
    input.style.borderBottomColor = 'var(--secondary)';
  } else {
    res.innerHTML = '❌ Yritä uudelleen';
    // Keeping red for errors as it's universally recognized, 
    // but you could use var(--tertiary) if you prefer theme-specific errors.
    res.style.color = '#e74c3c';
    input.style.borderBottomColor = '#e74c3c';
  }
}
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.finnish-input');
  inputs.forEach(function(input) {
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const parentDiv = input.closest('div');
        const button = parentDiv.querySelector('.tarkista-btn');
        if (button) {
          button.click();
        }
      }
    });
  });
});
</script>