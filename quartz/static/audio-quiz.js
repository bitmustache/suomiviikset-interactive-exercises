// This file is safe from Quartz's Markdown parser. No characters will be escaped!
document.addEventListener("nav", function() {
  
  // 1. Setup Audio Triggers
  var audioTriggers = document.querySelectorAll(".qz-audio-trigger");
  audioTriggers.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      var audioId = e.target.getAttribute("data-audio-target");
      var audio = document.getElementById(audioId);
      
      if (!audio) return;
      
      if (audio.paused) {
        audio.play().catch(function(err) {
          console.warn("Audio playback failed or file missing:", err);
        });
        e.target.innerHTML = "⏸";
      } else {
        audio.pause();
        e.target.innerHTML = "▶";
      }
      
      audio.onended = function() {
        e.target.innerHTML = "▶";
      };
    });
  });

  // 2. Setup Multiple-Choice Options
  var quizOptions = document.querySelectorAll(".qz-vaihtoehto");
  quizOptions.forEach(function(nappi) {
    nappi.addEventListener("click", function(e) {
      var valittu = e.currentTarget;
      var groupId = valittu.getAttribute("data-group");
      var onkoOikein = valittu.getAttribute("data-correct") === "true";
      
      var groupContainer = document.getElementById(groupId);
      if (!groupContainer) return;
      
      var siblings = groupContainer.getElementsByClassName("qz-vaihtoehto");
      
      // Lock all buttons in this specific question block
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].disabled = true;
        if (siblings[i] === valittu) {
          if (onkoOikein) {
            valittu.style.backgroundColor = "#2ecc71";
            valittu.style.color = "white";
          } else {
            valittu.style.backgroundColor = "#e74c3c";
            valittu.style.color = "white";
          }
        }
      }
    });
  });
  
});