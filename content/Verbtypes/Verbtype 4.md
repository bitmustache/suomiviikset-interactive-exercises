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
    <button class="tarkista-btn" onclick="tarkista('v2', 'haluatko')">Check</button>
    <span id="v2-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>osata - to be able to, to know how to</strong></p>
    <p>3. <input type="text" id="v3" class="finnish-input" placeholder="osata"> sinä soittaa pianoa?</p>
    <button class="tarkista-btn" onclick="tarkista('v3', 'osaatko')">Check</button>
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
  <div style="margin-bottom: 20px;">
    <p><strong>herätä - to wake up</strong></p>
    <p>11. Mihin aikaan sinä <input type="text" id="v11" class="finnish-input" placeholder="herätä"> yleensä aamuisin?</p>
    <button class="tarkista-btn" onclick="tarkista('v11', 'heräät')">Check</button>
    <span id="v11-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>12. Tommi <input type="text" id="v12" class="finnish-input" placeholder="herätä"> kello seitsemän joka aamu.</p>
    <button class="tarkista-btn" onclick="tarkista('v12', 'herää')">Check</button>
    <span id="v12-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>vastata - to answer</strong></p>
    <p>13. Voitko <input type="text" id="v13" class="finnish-input" placeholder="vastata"> puhelimeen? Joku soittaa.</p>
    <button class="tarkista-btn" onclick="tarkista('v13', 'vastata')">Check</button>
    <span id="v13-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>14. Anni <input type="text" id="v14" class="finnish-input" placeholder="vastata"> sinun sähköpostiisi huomenna.</p>
    <button class="tarkista-btn" onclick="tarkista('v14', 'vastaa')">Check</button>
    <span id="v14-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>avata - to open</strong></p>
    <p>15. Me <input type="text" id="v15" class="finnish-input" placeholder="avata"> ravintolan taas huomenna.</p>
    <button class="tarkista-btn" onclick="tarkista('v15', 'avaamme')">Check</button>
    <span id="v15-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>16. Voitko <input type="text" id="v16" class="finnish-input" placeholder="avata"> tämän tonnikalapurkin samalla kun sekoitan ruokaa?</p>
    <button class="tarkista-btn" onclick="tarkista('v16', 'avata')">Check</button>
    <span id="v16-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>pudota - to fall (freefall)</strong></p>
    <p>17. Vesilasi <input type="text" id="v17" class="finnish-input" placeholder="pudota">, jos et ole varovainen!</p>
    <button class="tarkista-btn" onclick="tarkista('v17', 'putoaa')">Check</button>
    <span id="v17-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>18. Omena <input type="text" id="v18" class="finnish-input" placeholder="pudota"> puusta.</p>
    <button class="tarkista-btn" onclick="tarkista('v18', 'putoaa')">Check</button>
    <span id="v18-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>tilata - to order</strong></p>
    <p>19. He <input type="text" id="v19" class="finnish-input" placeholder="tilata"> usein ison pizzan.</p>
    <button class="tarkista-btn" onclick="tarkista('v19', 'tilaavat')">Check</button>
    <span id="v19-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>20. <input type="text" id="v20" class="finnish-input" placeholder="tilata"> te osat jostakin verkkokaupasta?</p>
    <button class="tarkista-btn" onclick="tarkista('v20', 'tilaatteko')">Check</button>
    <span id="v20-res" class="palaute"></span>
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