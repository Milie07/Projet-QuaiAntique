import Route from "/Route;js";
import { allRoutes, websitename } from "allRoutes.js";

// Création d'une route pour la page 404
const route404 = new Route("404", "Page introuvable", "pages/404.html");

// Fontion pour récupérer la route correspondant à une url donnée
const getRouteByUrl = (url) => {
   let currentRoute = null;

   // Parcours de toutes les routes pour trouver la correspondance
   allRoutes.forEach((element) => {
      if (element.url == url) {
         currentRoute = element;
      }
   });
   // Si aucune correspondance n'est trouvée, on retourne la route 404
   if (current != null) {
      return currentRoute;
   }  else {
      return route404;
   }
};

// Fonction pour charger le contenu de la page
const LoadContentPage = async () => {
   const path = window.location.pathname
   // Récupération de l'URL actuelle
   const actualRoute = getRouteByUrl(path);
   // Récupération du contenu HTML ) l'élément avec l'ID "main-page"
   document.getElementById("main-page").innerHTML = html;

   // Ajout du contenu JS
   if (actialRoute.pathJS != "") {
      // Création d'une balise script
      var scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "text/javascript");
      scriptTag.setAttribute("src", actualRoute.pathJS);
      // Ajout de la balise script au corps du document
      document.querySelector("body").appendChild(scriptTag);
   }
   // Chargement du titre de la page 
   document.title = actualRoute.title + " - " + websitename;
};

// Fonction pour gérer les évenments du routage (clic sur les liens)
const routeEvent = (event) => {
   event = event || window.event;
   event.preventDefault();
   // Mise à jour de l'URL dan sl'historique du navigateur
   window.history.pushState({}, "", event.target.href);
   // Chargement du contenu de la nouvelle page
   LoadContentPage();
};

// Gestion de l'evenement de retour en arrière dan sl'historique du navigateur
window.onpopstate = LoadContentPage;
// Assignation de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent;
// Chargement du contenu de la page au chargement initial
LoadContentPage();