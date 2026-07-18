// A modular initialization function that can be run at any time
function initAudioQuiz() {
  // 1. Setup Audio Triggers
  var audioTriggers = document.querySelectorAll(".qz-audio-trigger");
  audioTriggers.forEach(function(btn) {
    // Prevent duplicate event listeners if navigate fires multiple times
    if (btn.dataset.initialized) return;
    btn.dataset.initialized = "true";

    btn.addEventListener("click", function(e) {
      var audioId = e.currentTarget.getAttribute("data-audio-target");
      var audio = document.getElementById(audioId);
      
      if (!audio) {
        console.warn("Audio element missing: " + audioId);
        return;
      }
      
      if (audio.paused) {
        audio.play().catch(function(err) {
          console.warn("Audio playback failed:", err);
        });
        e.currentTarget.innerHTML = "⏸";
      } else {
        audio.pause();
        e.currentTarget.innerHTML = "▶";
      }
      
      audio.onended = function() {
        btn.innerHTML = "▶";
      };
    });
  });

  // 2. Setup Multiple-Choice Options
  var quizOptions = document.querySelectorAll(".qz-vaihtoehto");
  quizOptions.forEach(function(nappi) {
    if (nappi.dataset.initialized) return;
    nappi.dataset.initialized = "true";

    nappi.addEventListener("click", function(e) {
      var valittu = e.currentTarget;
      var groupId = valittu.getAttribute("data-group");
      var onkoOikein = valittu.getAttribute("data-correct") === "true";
      
      var groupContainer = document.getElementById(groupId);
      if (!groupContainer) return;
      
      var siblings = groupContainer.getElementsByClassName("qz-vaihtoehto");
      
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
}

// CATCH BOTH SCENARIOS:
// Scenario A: The script loaded late on a fresh refresh (DOM is already built)
if (document.readyState === "interactive" || document.readyState === "complete") {
  initAudioQuiz();
} else {
  document.addEventListener("DOMContentLoaded", initAudioQuiz);
}

// Scenario B: The user clicked a sidebar link (SPA Page Navigation)
document.addEventListener("nav", initAudioQuiz);