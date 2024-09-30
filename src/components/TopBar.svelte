<script>
  import { Link } from "svelte-routing";
  // Vous pouvez ajouter ici la logique du composant si nécessaire
</script>

<div class="top-bar">
  <div class="logo">
    <img src="../favicon.ico" alt="Logo" />
  </div>
  <nav>
    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/about">À Propos</a></li>
      <li><a href="/pricing">Tarifs</a></li>
      <li><a href="/affiliate">Affiliation</a></li>
      <li><a href="/examples">Exemples</a></li>
      <!-- Ajoutez d'autres éléments de menu si nécessaire -->
    </ul>
  </nav>
</div>

<style>
  .top-bar {
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(90deg, rgb(255, 255, 255), rgba(255, 255, 255, 0.95));
    background-origin: padding-box;
    background-position: 0% 0%;
    background-repeat: repeat;
    background-size: auto;
    border-radius: 50px; /* Réduit la taille de la barre de navigation */
    box-shadow: rgba(2, 2, 43, 0.2) 0px 2px 15px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Inter", sans-serif; /* Changement de la police */
    height: 50px; /* Réduit la hauteur de la barre de navigation */
    opacity: 1;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    max-width: 1200px;
    z-index: 1000;
    padding: 0 20px;
    -webkit-font-smoothing: antialiased;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-right: 20px; /* Ajouté pour réduire l'espace entre le logo et les liens */
  }

  .logo img {
    height: 30px;
    width: auto;
  }

  nav ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin-left: 20px;
  }

  nav ul li a {
    text-decoration: none; /* Supprime le soulignement */
    color: #333; /* Couleur du texte */
    font-weight: 600; /* Épaissir le texte */
    padding: 10px 15px; /* Ajoute du padding pour rendre les liens plus jolis */
    border-radius: 5px; /* Ajoute des coins arrondis */
    transition: background-color 0.3s ease, color 0.3s ease; /* Ajoute une transition pour les effets de survol */
  }

  nav ul li a:hover {
    background-color: #f0f0f0; /* Change la couleur de fond au survol */
    color: #000; /* Change la couleur du texte au survol */
    border-radius: 80px; /* Arrondit l'effet grisant au survol */
  }

  nav ul li a {
    text-decoration: none;
    color: #333;
  }
</style>