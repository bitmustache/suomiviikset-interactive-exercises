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
<h3 style="color: var(--secondary);">Verb Practice: Type 1</h3>
<p>Fill in the missing verb in its correct form.</p>
<div style="margin-bottom: 20px;">
<p><strong>sanoa - to say</strong></p>
<p>1. Me <input type="text" id="v1" class="finnish-input" placeholder="sanoa"> muille ystäville "Näkemiin!".</p>
<button class="tarkista-btn" onclick="tarkista('v1', 'sanomme')">Check</button>
<span id="v1-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>2. Minä <input type="text" id="v2" class="finnish-input" placeholder="sanoa"> , että tämä on hyvä idea.</p>
<button class="tarkista-btn" onclick="tarkista('v2', 'sanon')">Check</button>
<span id="v2-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>3. He <input type="text" id="v3" class="finnish-input" placeholder="sanoa"> , että he menevät kuntosalille myöhemmin.</p>
<button class="tarkista-btn" onclick="tarkista('v3', 'sanovat')">Check</button>
<span id="v3-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>katsoa - to look, to watch</strong></p>
<p>4. Kaikki <input type="text" id="v4" class="finnish-input" placeholder="katsoa"> uutta elokuvaa yhdessä.</p>
<button class="tarkista-btn" onclick="tarkista('v4', 'katsovat')">Check</button>
<span id="v4-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>5. Hän <input type="text" id="v5" class="finnish-input" placeholder="katsoa"> dokumenttia.</p>
<button class="tarkista-btn" onclick="tarkista('v5', 'katsoo')">Check</button>
<span id="v5-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>6. Sinä <input type="text" id="v6" class="finnish-input" placeholder="katsoa"> , minä teen.</p>
<button class="tarkista-btn" onclick="tarkista('v6', 'katsot')">Check</button>
<span id="v6-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>varoa - to beware, to avoid</strong></p>
<p>7. Meidän pitää <input type="text" id="v7" class="finnish-input" placeholder="varoa"> isoa koiraa pihalla.</p>
<button class="tarkista-btn" onclick="tarkista('v7', 'varoa')">Check</button>
<span id="v7-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>8. Asiakkaiden pitää <input type="text" id="v8" class="finnish-input" placeholder="varoa"> liukasta lattiaa.</p>
<button class="tarkista-btn" onclick="tarkista('v8', 'varoa')">Check</button>
<span id="v8-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>9. Tyttö <input type="text" id="v9" class="finnish-input" placeholder="varoa"> äänekästä naapuria.</p>
<button class="tarkista-btn" onclick="tarkista('v9', 'varoo')">Check</button>
<span id="v9-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>puhua - to speak</strong></p>
<p>10. Pekka <input type="text" id="v10" class="finnish-input" placeholder="puhua"> montaa kieltä.</p>
<button class="tarkista-btn" onclick="tarkista('v10', 'puhuu')">Check</button>
<span id="v10-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>11. Me <input type="text" id="v11" class="finnish-input" placeholder="puhua"> suomen kieltä Suomessa.</p>
<button class="tarkista-btn" onclick="tarkista('v11', 'puhumme')">Check</button>
<span id="v11-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>12. Liisa ja Matti <input type="text" id="v12" class="finnish-input" placeholder="puhua"> kahvilassa.</p>
<button class="tarkista-btn" onclick="tarkista('v12', 'puhuvat')">Check</button>
<span id="v12-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>nukkua - to sleep</strong></p>
<p>13. Ensi sunnuntaina me <input type="text" id="v13" class="finnish-input" placeholder="nukkua"> pitkään.</p>
<button class="tarkista-btn" onclick="tarkista('v13', 'nukumme')">Check</button>
<span id="v13-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>14. Minä <input type="text" id="v14" class="finnish-input" placeholder="nukkua"> vielä. Tehdään aamupalaa pian.</p>
<button class="tarkista-btn" onclick="tarkista('v14', 'nukun')">Check</button>
<span id="v14-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>15. Perhe <input type="text" id="v15" class="finnish-input" placeholder="nukkua"> viikonlopun mökillä.</p>
<button class="tarkista-btn" onclick="tarkista('v15', 'nukkuu')">Check</button>
<span id="v15-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>rakastua - to fall in love</strong></p>
<p>16. Tässä kirjassa Petra <input type="text" id="v16" class="finnish-input" placeholder="rakastua"> Tommiin.</p>
<button class="tarkista-btn" onclick="tarkista('v16', 'rakastuu')">Check</button>
<span id="v16-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>17. Me <input type="text" id="v17" class="finnish-input" placeholder="rakastua"> usein hetkellä, joka on yllätys.</p>
<button class="tarkista-btn" onclick="tarkista('v17', 'rakastumme')">Check</button>
<span id="v17-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>muuttua - to change</strong></p>
<p>18. Tietotekniikan maailma <input type="text" id="v18" class="finnish-input" placeholder="muuttua"> nopeasti.</p>
<button class="tarkista-btn" onclick="tarkista('v18', 'muuttuu')">Check</button>
<span id="v18-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>19. Sää <input type="text" id="v19" class="finnish-input" placeholder="muuttua"> nopeasti tänään.</p>
<button class="tarkista-btn" onclick="tarkista('v19', 'muuttuu')">Check</button>
<span id="v19-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>sattua - to hurt</strong></p>
<p>20. Lasta <input type="text" id="v20" class="finnish-input" placeholder="sattua"> käteen, koska hänelle tuli haava.</p>
<button class="tarkista-btn" onclick="tarkista('v20', 'sattuu')">Check</button>
<span id="v20-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>21. Minua <input type="text" id="v21" class="finnish-input" placeholder="sattua"> mahaan. Minä söin huonosti tänään.</p>
<button class="tarkista-btn" onclick="tarkista('v21', 'sattuu')">Check</button>
<span id="v21-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>unohtua - to be forgotten</strong></p>
<p>22. Joskus kiireiset asiat voivat <input type="text" id="v22" class="finnish-input" placeholder="unohtua"> .</p>
<button class="tarkista-btn" onclick="tarkista('v22', 'unohtua')">Check</button>
<span id="v22-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>23. Hänen puhelin <input type="text" id="v23" class="finnish-input" placeholder="unohtua"> joskus kotiin, kun hänellä on kiire.</p>
<button class="tarkista-btn" onclick="tarkista('v23', 'unohtuu')">Check</button>
<span id="v23-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>pysyä - to stay</strong></p>
<p>24. Sinä voit mennä kauppaan, minä voin <input type="text" id="v24" class="finnish-input" placeholder="pysyä"> tässä.</p>
<button class="tarkista-btn" onclick="tarkista('v24', 'pysyä')">Check</button>
<span id="v24-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>25. Voitko <input type="text" id="v25" class="finnish-input" placeholder="pysyä"> hetken hiljaa? Olemme kirjastossa.</p>
<button class="tarkista-btn" onclick="tarkista('v25', 'pysyä')">Check</button>
<span id="v25-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>26. Miksi tämä ovi ei <input type="text" id="v26" class="finnish-input" placeholder="pysyä"> kiinni?</p>
<button class="tarkista-btn" onclick="tarkista('v26', 'pysy')">Check</button>
<span id="v26-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>etsiä - to search for</strong></p>
<p>27. Minun ystäväni <input type="text" id="v27" class="finnish-input" placeholder="etsiä"> uutta työtä.</p>
<button class="tarkista-btn" onclick="tarkista('v27', 'etsii')">Check</button>
<span id="v27-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>28. Mitä sinä <input type="text" id="v28" class="finnish-input" placeholder="etsiä"> ?</p>
<button class="tarkista-btn" onclick="tarkista('v28', 'etsit')">Check</button>
<span id="v28-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>29. Me <input type="text" id="v29" class="finnish-input" placeholder="etsiä"> hotellia, joka on keskustassa.</p>
<button class="tarkista-btn" onclick="tarkista('v29', 'etsimme')">Check</button>
<span id="v29-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>miettiä - to think, to consider</strong></p>
<p>30. Minä <input type="text" id="v30" class="finnish-input" placeholder="miettiä"> , haluaisitko lähteä kanssani elokuviin tänään?</p>
<button class="tarkista-btn" onclick="tarkista('v30', 'mietin')">Check</button>
<span id="v30-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>31. Hän <input type="text" id="v31" class="finnish-input" placeholder="miettiä"> , voisiko auttaa sinua kotitehtävissä.</p>
<button class="tarkista-btn" onclick="tarkista('v31', 'miettii')">Check</button>
<span id="v31-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>32. He <input type="text" id="v32" class="finnish-input" placeholder="miettiä"> usein filosofisia aiheita.</p>
<button class="tarkista-btn" onclick="tarkista('v32', 'miettivät')">Check</button>
<span id="v32-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>lukea - to read</strong></p>
<p>33. Mitä kirjoja te <input type="text" id="v33" class="finnish-input" placeholder="lukea"> ?</p>
<button class="tarkista-btn" onclick="tarkista('v33', 'luette')">Check</button>
<span id="v33-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>34. Akseli <input type="text" id="v34" class="finnish-input" placeholder="lukea"> mielenkiintoista historiaromaania.</p>
<button class="tarkista-btn" onclick="tarkista('v34', 'lukee')">Check</button>
<span id="v34-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>35. Me <input type="text" id="v35" class="finnish-input" placeholder="lukea"> kirjastossa.</p>
<button class="tarkista-btn" onclick="tarkista('v35', 'luemme')">Check</button>
<span id="v35-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>laskea - to calculate, to put down</strong></p>
<p>36. Voitko <input type="text" id="v36" class="finnish-input" placeholder="laskea"> ensi kuukauden budjetin?</p>
<button class="tarkista-btn" onclick="tarkista('v36', 'laskea')">Check</button>
<span id="v36-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>37. Sinä voit <input type="text" id="v37" class="finnish-input" placeholder="laskea"> ostokset pöydälle.</p>
<button class="tarkista-btn" onclick="tarkista('v37', 'laskea')">Check</button>
<span id="v37-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>antaa - to give</strong></p>
<p>38. Myyjä <input type="text" id="v38" class="finnish-input" placeholder="antaa"> sinulle lipun, ole hyvä.</p>
<button class="tarkista-btn" onclick="tarkista('v38', 'antaa')">Check</button>
<span id="v38-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>39. Voitko <input type="text" id="v39" class="finnish-input" placeholder="antaa"> minulle suolaa?</p>
<button class="tarkista-btn" onclick="tarkista('v39', 'antaa')">Check</button>
<span id="v39-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>40. Minä <input type="text" id="v40" class="finnish-input" placeholder="antaa"> sinulle lahjan huomenna.</p>
<button class="tarkista-btn" onclick="tarkista('v40', 'annan')">Check</button>
<span id="v40-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>auttaa - to help</strong></p>
<p>41. Me <input type="text" id="v41" class="finnish-input" placeholder="auttaa"> sinua löytämään työn!</p>
<button class="tarkista-btn" onclick="tarkista('v41', 'autamme')">Check</button>
<span id="v41-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>42. Palomiehet <input type="text" id="v42" class="finnish-input" placeholder="auttaa"> vanhusta, jolla on hätä.</p>
<button class="tarkista-btn" onclick="tarkista('v42', 'auttavat')">Check</button>
<span id="v42-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>43. Voisitko <input type="text" id="v43" class="finnish-input" placeholder="auttaa"> minua? Laitetaan vaatteet kaappiin.</p>
<button class="tarkista-btn" onclick="tarkista('v43', 'auttaa')">Check</button>
<span id="v43-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>odottaa - to wait</strong></p>
<p>44. Jaakko <input type="text" id="v44" class="finnish-input" placeholder="odottaa"> , että hänen pakettinsa saapuu kotiin.</p>
<button class="tarkista-btn" onclick="tarkista('v44', 'odottaa')">Check</button>
<span id="v44-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>45. He <input type="text" id="v45" class="finnish-input" placeholder="odottaa"> vastausta lääkäristä.</p>
<button class="tarkista-btn" onclick="tarkista('v45', 'odottavat')">Check</button>
<span id="v45-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>46. Me <input type="text" id="v46" class="finnish-input" placeholder="odottaa"> meidän vuoroamme jonossa.</p>
<button class="tarkista-btn" onclick="tarkista('v46', 'odotamme')">Check</button>
<span id="v46-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>soittaa - to play, to call</strong></p>
<p>47. Jere <input type="text" id="v47" class="finnish-input" placeholder="soittaa"> kitaraa taitavasti.</p>
<button class="tarkista-btn" onclick="tarkista('v47', 'soittaa')">Check</button>
<span id="v47-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>48. Joku <input type="text" id="v48" class="finnish-input" placeholder="soittaa"> ovikelloa. Voitko avata oven?</p>
<button class="tarkista-btn" onclick="tarkista('v48', 'soittaa')">Check</button>
<span id="v48-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>49. Sinä <input type="text" id="v49" class="finnish-input" placeholder="soittaa"> ystävällesi usein illalla.</p>
<button class="tarkista-btn" onclick="tarkista('v49', 'soitat')">Check</button>
<span id="v49-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>nukahtaa - to fall asleep</strong></p>
<p>50. Isä ja äiti <input type="text" id="v50" class="finnish-input" placeholder="nukahtaa"> pitkän päivän jälkeen.</p>
<button class="tarkista-btn" onclick="tarkista('v50', 'nukahtavat')">Check</button>
<span id="v50-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>51. Koira <input type="text" id="v51" class="finnish-input" placeholder="nukahtaa"> lenkin jälkeen.</p>
<button class="tarkista-btn" onclick="tarkista('v51', 'nukahtaa')">Check</button>
<span id="v51-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p><strong>aloittaa - to start, to begin</strong></p>
<p>52. Minä <input type="text" id="v52" class="finnish-input" placeholder="aloittaa"> uuden harrastuksen ensi kuussa.</p>
<button class="tarkista-btn" onclick="tarkista('v52', 'aloitan')">Check</button>
<span id="v52-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>53. Pertti <input type="text" id="v53" class="finnish-input" placeholder="aloittaa"> karaten maanantaina.</p>
<button class="tarkista-btn" onclick="tarkista('v53', 'aloittaa')">Check</button>
<span id="v53-res" class="palaute"></span>
</div>
<div style="margin-bottom: 20px;">
<p>54. Voisitteko te <input type="text" id="v54" class="finnish-input" placeholder="aloittaa"> siivoamisen?</p>
<button class="tarkista-btn" onclick="tarkista('v54', 'aloittaa')">Check</button>
<span id="v54-res" class="palaute"></span>
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