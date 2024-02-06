(function () {
  const lienLireSuite = document.createElement("a");
  const lesParagraphes = document.querySelectorAll("p");

  lienLireSuite.setAttribute("href", "#");
  lienLireSuite.setAttribute("class", "lien");

  lienLireSuite.innerHTML = "Lire la suite";

  lesParagraphes[0].appendChild(lienLireSuite);

  function cacherTexte() {
    for (let i = 0; i < lesParagraphes.length; i++) {
      if (i === 0) {
        continue;
      } else if (i >= 1) {
        lesParagraphes[i].style.display = "none";
      }
    }
  }

  function afficherTexte() {
    for (let i = 0; i < lesParagraphes.length; i++) {
      lesParagraphes[i].style.display = "block";
    }
    this.remove();
  }

  cacherTexte();

  lienLireSuite.addEventListener("click", afficherTexte);
})();
