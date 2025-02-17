document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour détecter si l'utilisateur est sur mobile
  function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
  }

  // Récupère les éléments vidéo
  const desktopVideo = document.querySelector(".desktop-video");
  const mobileVideo = document.querySelector(".mobile-video");

  // Affiche la vidéo correcte
  if (isMobile()) {
    if (desktopVideo) desktopVideo.style.display = "none";
    if (mobileVideo) mobileVideo.style.display = "block";
  } else {
    if (desktopVideo) desktopVideo.style.display = "block";
    if (mobileVideo) mobileVideo.style.display = "none";
  }

  // Ajuste automatiquement si la fenêtre est redimensionnée
  window.addEventListener("resize", function () {
    if (isMobile()) {
      if (desktopVideo) desktopVideo.style.display = "none";
      if (mobileVideo) mobileVideo.style.display = "block";
    } else {
      if (desktopVideo) desktopVideo.style.display = "block";
      if (mobileVideo) mobileVideo.style.display = "none";
    }
  });
});
