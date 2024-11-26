// Méthode pour la connexion
const btnSingin = document.getElementById("btnSingin");

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){
   // Appeller l'API içi pour vérifier les credententials en BDD
   if(mailInput.value == "test@mail.com" && passwordInput.value == "123") {

      // vrai Token à récupérer
      const token = "lkjsdngfljsqdnglkjsdglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
      setToken(token);

      // Placer ce token en cookie pour simuler la gestion du role de l'utilisateur
      setCookie(RoleCookieName, "admin", 7) 
      window.location.replace("/");
   }
   else {
      mailInput.classList.add("is-invalid");
      passwordInput.classList.add("is-invalid");
   }
}
//