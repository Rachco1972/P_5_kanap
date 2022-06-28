//------------------------------------------------------------------------
// Récupération des produits de l'api
//------------------------------------------------------------------------
const params = new URLSearchParams(document.location.search);
const id = params.get("_id");
console.log(id);
//recupération des produits de l'API 
fetch('http://localhost:3000/api/products')
// quand tu as la réponse donne le résultat en json.
.then((response) => response.json())
.then((res) => {handleData(res)})
.catch((err) => {
    document.querySelector(".item").innerHTML = "<h1> erreur 404</h1>";
    console.log("erreur404 , sur ressource api :" + err);
});
//creation d'objet article client//
//déclaration objet article client prêt à être modifié par les fonctions suivantes d'évenements//
let articleClient = {};
//id du produit//
articleClient._id = id;
//fonction d' affichage du produit de l' api//


function handleData(res) {
    const altTxt = document.querySelector("article div.item__img");
    const colors = document.querySelector("#colors");
    const description = document.querySelector("#description");
    const name =document.querySelector("#title");
    const price = document.querySelector("#price");
 // Boucle for pour rechercher un indice 
 for (let choix of res ) {
    //si l'id defini par l'url identique à un _id d'un des produits du tableau , on récupère son indice
    if (id === choix._id) {
       
     altTxt.innerHTML = `<img src ="${choix.imageUrl}" alt = "${choix.altTxt}">`;
     name.textContent = `${choix.name}`;
     price.textContent = `${choix.price}`;
     description.textContent = `${choix.description}`;
     //on ajoute le prix également dans le panier , 
     articleClient.price = `${choix.price}`;
     //Boucle pour recherche de couleur de chaque produit
     for (let couleur of choix.colors) {
        colors.innerHTML += `<option value = "${couleur}">${couleur}</option>`;

     }

    }
 }

}
            
        const button = document.querySelector("#addTocart")
        if  (button != null) {
            button.addEventListener("click", (e) => {
                const color = document.querySelector("#color")
            })
        }
    


    
 

