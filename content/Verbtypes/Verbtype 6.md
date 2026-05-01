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
    <p>1. Odota, että sauna <input type="text" id="v1" class="finnish-input" placeholder="lämmetä">!</p>
    <button class="tarkista-btn" onclick="tarkista('v1', 'lämpenee')">Check</button>
    <span id="v1-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>2. Hän ei <input type="text" id="v2" class="finnish-input" placeholder="lämmetä"> tälle idealle…</p>
    <button class="tarkista-btn" onclick="tarkista('v2', 'lämpene')">Check</button>
    <span id="v2-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>kylmetä - to chill, to become cold</strong></p>
    <p>3. Sää <input type="text" id="v3" class="finnish-input" placeholder="kylmetä"> usein Suomessa helmikuussa.</p>
    <button class="tarkista-btn" onclick="tarkista('v3', 'kylmenee')">Check</button>
    <span id="v3-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>4. Pakastimessa jäätelö <input type="text" id="v4" class="finnish-input" placeholder="kylmetä"> ja jäätyy taas nopeasti.</p>
    <button class="tarkista-btn" onclick="tarkista('v4', 'kylmenee')">Check</button>
    <span id="v4-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>tarjeta - to withstand the cold, to be warm enough</strong></p>
    <p>5. <input type="text" id="v5" class="finnish-input" placeholder="tarjeta"> sinä ulkona tuolla takilla?</p>
    <button class="tarkista-btn" onclick="tarkista('v5', 'tarkenetko')">Check</button>
    <span id="v5-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>6. Hyvillä ja paksuilla hanskoilla <input type="text" id="v6" class="finnish-input" placeholder="tarjeta"> kyllä myös helmikuun pakkasissa!</p>
    <button class="tarkista-btn" onclick="tarkista('v6', 'tarkenee')">Check</button>
    <span id="v6-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>kyetä - to be able to, to be capable of</strong></p>
    <p>7. Me mietimme, <input type="text" id="v7" class="finnish-input" placeholder="kyetä"> hän vielä tähän tehtävään.</p>
    <button class="tarkista-btn" onclick="tarkista('v7', 'kykeneekö')">Check</button>
    <span id="v7-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>8. <input type="text" id="v8" class="finnish-input" placeholder="kyetä"> nämä ihmiset ymmärtämään tilanteen vakavuuden?</p>
    <button class="tarkista-btn" onclick="tarkista('v8', 'kykenevätkö')">Check</button>
    <span id="v8-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>vanheta - to become older, to expire</strong></p>
    <p>9. Valtionvelka ei <input type="text" id="v9" class="finnish-input" placeholder="vanheta">.</p>
    <button class="tarkista-btn" onclick="tarkista('v9', 'vanhene')">Check</button>
    <span id="v9-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>10. Tuo mies <input type="text" id="v10" class="finnish-input" placeholder="vanheta"> tyylikkäästi.</p>
    <button class="tarkista-btn" onclick="tarkista('v10', 'vanhenee')">Check</button>
    <span id="v10-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>nuoreta - to become younger</strong></p>
    <p>11. Hän ei tuosta enää <input type="text" id="v11" class="finnish-input" placeholder="nuoreta">.</p>
    <button class="tarkista-btn" onclick="tarkista('v11', 'nuorene')">Check</button>
    <span id="v11-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>12. Iho kuin <input type="text" id="v12" class="finnish-input" placeholder="nuoreta">, kun käytät tätä ihovoidetta!</p>
    <button class="tarkista-btn" onclick="tarkista('v12', 'nuorenee')">Check</button>
    <span id="v12-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>vaieta - to become silent</strong></p>
    <p>13. Miksi sinä <input type="text" id="v13" class="finnish-input" placeholder="vaieta">, vaikka sinun pitäisi sanoa ääneen, mitä ajattelet?</p>
    <button class="tarkista-btn" onclick="tarkista('v13', 'vaikenet')">Check</button>
    <span id="v13-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>14. Kaupungin äänet <input type="text" id="v14" class="finnish-input" placeholder="vaieta"> ympärillä, kun he suutelevat.</p>
    <button class="tarkista-btn" onclick="tarkista('v14', 'vaikenevat')">Check</button>
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