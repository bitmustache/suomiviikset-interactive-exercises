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
  <h3 style="color: var(--secondary);">Verb Practice: Type 2</h3>
  <p>Fill in the missing verb in its correct form.</p>
  <div style="margin-bottom: 20px;">
    <p><strong>syödä - to eat</strong></p>
    <p>1. Mitä haluaisit <input type="text" id="v1" class="finnish-input" placeholder="syödä"> lounaaksi tänään?</p>
    <button class="tarkista-btn" data-id="v1" data-answer="syödä">Check</button>
    <span id="v1-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>2. Mitä sinä <input type="text" id="v2" class="finnish-input" placeholder="syödä"> ?</p>
    <button class="tarkista-btn" data-id="v2" data-answer="syöt">Check</button>
    <span id="v2-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>3. Me <input type="text" id="v3" class="finnish-input" placeholder="syödä"> illallista kello 20.00 tänään. Haluatko liittyä seuraamme?</p>
    <button class="tarkista-btn" data-id="v3" data-answer="syömme">Check</button>
    <span id="v3-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>juoda - to drink</strong></p>
    <p>4. Koira <input type="text" id="v4" class="finnish-input" placeholder="juoda"> vettä pitkän juoksulenkin jälkeen.</p>
    <button class="tarkista-btn" data-id="v4" data-answer="juo">Check</button>
    <span id="v4-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>5. Isä <input type="text" id="v5" class="finnish-input" placeholder="juoda"> maitoa, kun hän syö lohikeittoa.</p>
    <button class="tarkista-btn" data-id="v5" data-answer="juo">Check</button>
    <span id="v5-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>6. Mitä te yleensä <input type="text" id="v6" class="finnish-input" placeholder="juoda"> päivällisellä?</p>
    <button class="tarkista-btn" data-id="v6" data-answer="juotte">Check</button>
    <span id="v6-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>luoda - to create</strong></p>
    <p>7. Käyttäjä <input type="text" id="v7" class="finnish-input" placeholder="luoda"> oman tilin palveluun.</p>
    <button class="tarkista-btn" data-id="v7" data-answer="luo">Check</button>
    <span id="v7-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>8. Mitä sinä voit <input type="text" id="v8" class="finnish-input" placeholder="luoda"> mielikuvituksesi avulla?</p>
    <button class="tarkista-btn" data-id="v8" data-answer="luoda">Check</button>
    <span id="v8-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>saada - to get, to receive</strong></p>
    <p>9. Jos minä <input type="text" id="v9" class="finnish-input" placeholder="saada"> hyvän arvosanan tästä kokeesta, pidän juhlat.</p>
    <button class="tarkista-btn" data-id="v9" data-answer="saan">Check</button>
    <span id="v9-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>10. Hän <input type="text" id="v10" class="finnish-input" placeholder="saada"> kyllä auttaa sinua kotitehtävissä.</p>
    <button class="tarkista-btn" data-id="v10" data-answer="saa">Check</button>
    <span id="v10-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p><strong>myydä - to sell</strong></p>
    <p>11. Mitä tuotteita tämä yritys <input type="text" id="v11" class="finnish-input" placeholder="myydä"> ?</p>
    <button class="tarkista-btn" data-id="v11" data-answer="myy">Check</button>
    <span id="v11-res" class="palaute"></span>
  </div>
  <div style="margin-bottom: 20px;">
    <p>12. He <input type="text" id="v12" class="finnish-input" placeholder="myydä"> vihanneksia torilla.</p>
    <button class="tarkista-btn" data-id="v12" data-answer="myyvät">Check</button>
    <span id="v12-res" class="palaute"></span>
  </div>
</div>



