import Route from "./Route.js";

// Définir les routes içi
export const allRoutes = [
   new Route("/", "Accueil", "/pages/home.html", []),
   new Route("/galerie", "Galerie", "/pages/galerie.html", [], "/js/galerie.js"),
   new Route("/carte", "La Carte", "/pages/carte.html", []),
   new Route("/connexion", "Connexion", "/pages/authentification/connexion.html", ["disconnected"]),
   new Route("/inscription", "Inscription", "/pages/authentification/inscription.html", ["disconnected"]),
   new Route("/compte", "Mon Compte", "/pages/authentification/compte.html", ["client", "admin"]),
   new Route("/modifPassword", "Modifier le Mot de Passe", "/pages/authentification/modifPassword.html", ["client", "admin"]),
   new Route("/reservation", "Vos Réservations", "/pages/reservations/reservation.html", ["client"]),
   new Route("/reserver", "Réserver une table", "/pages/reservations/reserver.html", ["client"]),
];
// Le titre s'affiche comme ceci : Route.titre - websitename
export const websitename = "Quai-Antique";

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnectés
["client"] -> Réserver aux aux utilisateurs avec le rôle client
["admin"] -> Réserver aux utilisateurs avec le rôle admin
["admin", "client"] -> Réserver aux utilisateurs avec le rôle client ou admin
*/