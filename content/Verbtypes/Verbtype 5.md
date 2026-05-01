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
  <h3 style="color: var(--secondary);">Verb Practice: Type 5</h3>
  <p>Fill in the missing verb in its correct form.</p>
  <div style="margin-bottom: 20px;">
    <p><strong>tarvita - to need</strong></p>
    <p>1. <input type="text" id="v1" class="finnish-input" placeholder="tarvita"> sinä lisää vaatteita ulos? Siellä on paljon pakkasta.</p>
    <button class="tarkista-btn" onclick="tarkista('v1', 'tarvitsetko')">Check</button>
    <span id="v1-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>2. <input type="text" id="v2" class="finnish-input" placeholder="tarvita"> äiti apua ruoanlaitossa?</p>
    <button class="tarkista-btn" onclick="tarkista('v2', 'tarvitseeko')">Check</button>
    <span id="v2-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>valita - to choose</strong></p>
    <p>3. Voit <input type="text" id="v3" class="finnish-input" placeholder="valita"> minkä tahansa juoman!</p>
    <button class="tarkista-btn" onclick="tarkista('v3', 'valita')">Check</button>
    <span id="v3-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>4. Maisa <input type="text" id="v4" class="finnish-input" placeholder="valita"> lomakohdetta ensi kesälle.</p>
    <button class="tarkista-btn" onclick="tarkista('v4', 'valitsee')">Check</button>
    <span id="v4-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>havaita - to detect</strong></p>
    <p>5. Ulkona on sumua tänään ja on vaikea <input type="text" id="v5" class="finnish-input" placeholder="havaita"> mitään ympärillä.</p>
    <button class="tarkista-btn" onclick="tarkista('v5', 'havaita')">Check</button>
    <span id="v5-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>6. Me <input type="text" id="v6" class="finnish-input" placeholder="havaita"> taivaalla paljon sadepilviä.</p>
    <button class="tarkista-btn" onclick="tarkista('v6', 'havaitsemme')">Check</button>
    <span id="v6-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>mainita - to mention</strong></p>
    <p>7. Matti <input type="text" id="v7" class="finnish-input" placeholder="mainita">, kuinka paljon haluaa säästää rahaa tässä kuussa.</p>
    <button class="tarkista-btn" onclick="tarkista('v7', 'mainitsee')">Check</button>
    <span id="v7-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>8. Te <input type="text" id="v8" class="finnish-input" placeholder="mainita"> usein, että haluaisitte matkustaa Lappiin vaeltamaan.</p>
    <button class="tarkista-btn" onclick="tarkista('v8', 'mainitsette')">Check</button>
    <span id="v8-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>lukita - to lock</strong></p>
    <p>9. Ravintolan henkilökunta <input type="text" id="v9" class="finnish-input" placeholder="lukita"> ovet ennen kotiinlähtöä.</p>
    <button class="tarkista-btn" onclick="tarkista('v9', 'lukitsee')">Check</button>
    <span id="v9-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>10. Maija <input type="text" id="v10" class="finnish-input" placeholder="lukita"> polkupyörän kirjaston lähellä.</p>
    <button class="tarkista-btn" onclick="tarkista('v10', 'lukitsee')">Check</button>
    <span id="v10-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>merkitä - to mark</strong></p>
    <p>11. Minä <input type="text" id="v11" class="finnish-input" placeholder="merkitä"> tämän päivän vapaaksi kalenteriin.</p>
    <button class="tarkista-btn" onclick="tarkista('v11', 'merkitsen')">Check</button>
    <span id="v11-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>12. Voitko <input type="text" id="v12" class="finnish-input" placeholder="merkitä"> nämä tuotteet ostoslistaan?</p>
    <button class="tarkista-btn" onclick="tarkista('v12', 'merkitä')">Check</button>
    <span id="v12-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>iloita - to be happy, to rejoice</strong></p>
    <p>13. Hän <input type="text" id="v13" class="finnish-input" placeholder="iloita">, että sinä saavuit hänen syntymäpäivilleen.</p>
    <button class="tarkista-btn" onclick="tarkista('v13', 'iloitsee')">Check</button>
    <span id="v13-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>14. Me <input type="text" id="v14" class="finnish-input" placeholder="iloita">, että hän sai uuden työpaikan.</p>
    <button class="tarkista-btn" onclick="tarkista('v14', 'iloitsemme')">Check</button>
    <span id="v14-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>sijaita - to be located</strong></p>
    <p>15. Helsinki <input type="text" id="v15" class="finnish-input" placeholder="sijaita"> Etelä-Suomessa, Itämeren rannalla.</p>
    <button class="tarkista-btn" onclick="tarkista('v15', 'sijaitsee')">Check</button>
    <span id="v15-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>16. Missä teidän työpaikkanne <input type="text" id="v16" class="finnish-input" placeholder="sijaita">?</p>
    <button class="tarkista-btn" onclick="tarkista('v16', 'sijaitsee')">Check</button>
    <span id="v16-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>punnita - to weigh (oneself, an item etc.)</strong></p>
    <p>17. Voitko <input type="text" id="v17" class="finnish-input" placeholder="punnita"> nämä banaanit? Haen samalla avokadoja.</p>
    <button class="tarkista-btn" onclick="tarkista('v17', 'punnita')">Check</button>
    <span id="v17-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>18. Hän <input type="text" id="v18" class="finnish-input" placeholder="punnita"> auton isolla vaa'alla.</p>
    <button class="tarkista-btn" onclick="tarkista('v18', 'punnitsee')">Check</button>
    <span id="v18-res" class="palaute"></span>
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