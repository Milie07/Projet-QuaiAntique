const tokenCookieName = "accesstoken";
const RoleCookieName = "role";


// Gestion du rôle utilisateur
function getRole(){
   return getCookie(RoleCookieName);
}

// Gestion de la Déconnexion
function signout(){
   eraseCookie(tokenCookieName);
   window.location.reload();
}

// Gestion de la connexion
function setToken(token){
   setCookie(tokenCookieName, token, 7)
}
function getToken(){
   return getCookie(tokenCookieName);
}

// Méthode pour les cookies
function setCookie(name,value,days){
   let expires = '';
   if (days){
      let date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
   }
   document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name){
   let nameEQ = name + "=";
   let ca = document.cookie.split(';');
   for(let i=0;i < ca.length;i++){
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
   }
   return null;
}
function eraseCookie(name){
   document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Savoir si on est connecté
function isConnected(){
   if(getToken() == null || getToken == undefined){
      return false;
   }
   else{
      return true;
   }
}

/* Gestion de 4 rôles
   - Disconnected
   - Connected (admin ou client)
   - Admin
   - Client */

function showAndHideElementsForRoles(){
   const userConnected = isConnected();
   const role = getRole();

   let allElementsToEdit = document.querySelectorAll('[data-show]');

   allElementsToEdit.forEach(element =>{
      switch(element.CDATA_SECTION_NODE.show){
         case 'disconnected':
            if(userConnected){
               element.classList.add("d-none");
            }
            break;
         case 'connected':
            if(!userConnected){
               element.classList.add("d-none");
            }
            break;
         case 'admin':
            if(!userConnected || role != "admin"){
               element.classList.add("d-none");
            }
            break;
         case 'client':
            if(!userConnected || role != "client"){
               element.classList.add("d-none");
            }
            break;
      }
   })
}