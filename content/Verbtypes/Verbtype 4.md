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
  <h3 style="color: var(--secondary);">Verb Practice: Type 4</h3>
  <p>Fill in the missing verb in its correct form.</p>
  <div style="margin-bottom: 20px;">
    <p><strong>haluta - to want</strong></p>
    <p>1. Hän <input type="text" id="v1" class="finnish-input" placeholder="haluta"> ostaa tämän auton.</p>
    <button class="tarkista-btn" onclick="tarkista('v1', 'haluaa')">Check</button>
    <span id="v1-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>2. <input type="text" id="v2" class="finnish-input" placeholder="haluta"> sinä maistaa jälkiruokaa?</p>
    <button class="tarkista-btn" onclick="tarkista('v2', 'Haluatko', 'haluatko')">Check</button>
    <span id="v2-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>osata - to be able to, to know how to</strong></p>
    <p>3. <input type="text" id="v3" class="finnish-input" placeholder="osata"> sinä soittaa pianoa?</p>
    <button class="tarkista-btn" onclick="tarkista('v3', 'Osaatko')">Check</button>
    <span id="v3-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>4. Hän <input type="text" id="v4" class="finnish-input" placeholder="osata"> tämän kappaleen sanat.</p>
    <button class="tarkista-btn" onclick="tarkista('v4', 'osaa')">Check</button>
    <span id="v4-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>pelata - to play (a game)</strong></p>
    <p>5. Haluatko <input type="text" id="v5" class="finnish-input" placeholder="pelata"> tennistä tänään?</p>
    <button class="tarkista-btn" onclick="tarkista('v5', 'pelata')">Check</button>
    <span id="v5-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>6. Me <input type="text" id="v6" class="finnish-input" placeholder="pelata"> lautapelejä yhdessä jouluna.</p>
    <button class="tarkista-btn" onclick="tarkista('v6', 'pelaamme')">Check</button>
    <span id="v6-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>tavata - to meet</strong></p>
    <p>7. Me <input type="text" id="v7" class="finnish-input" placeholder="tavata"> keskustassa puolenpäivän aikoihin.</p>
    <button class="tarkista-btn" onclick="tarkista('v7', 'tapaamme')">Check</button>
    <span id="v7-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>8. Kenet haluaisit <input type="text" id="v8" class="finnish-input" placeholder="tavata">, jos saisit päättää?</p>
    <button class="tarkista-btn" onclick="tarkista('v8', 'tavata')">Check</button>
    <span id="v8-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>siivota - to clean up</strong></p>
    <p>9. Me <input type="text" id="v9" class="finnish-input" placeholder="siivota"> koko talon ennen joulua.</p>
    <button class="tarkista-btn" onclick="tarkista('v9', 'siivoamme')">Check</button>
    <span id="v9-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>10. Hän <input type="text" id="v10" class="finnish-input" placeholder="siivota"> autotallin harjalla.</p>
    <button class="tarkista-btn" onclick="tarkista('v10', 'siivoaa')">Check</button>
    <span id="v10-res" class="palaute"></span>
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