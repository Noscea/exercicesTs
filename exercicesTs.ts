//Exercice 1

/**
 * Fonction qui dit bonjour à une personne en console
 * @param prenom : prenom de la personne à qui dire bonjour
 */
const bonjour = (prenom : string) : void => {
    console.log(`Bonjour ${prenom}`);
}

//Exercice 2

/**
 * Fonction qui somme deux nombres et renvoie le résultat en console
 * @param nombre1 : Premier nombre à sommer
 * @param nombre2 : Second nombre à sommer
 */
const somme = (nombre1 : number, nombre2 : number) : void => {
    console.log(nombre1+nombre2);
}

// Exercice 3

/**
 * Fonction qui donne le gain ou la perte d'un produit
 * @param prixVente : Prix de Vente du produit
 * @param prixFabrication : Prix de Fabrication du produit
 * @returns Gain ou perte de la vente du produit
 */
const benefice = (prixVente : number, prixFabrication : number) : string => {
    const prixRevient : number = prixVente - prixFabrication;
    if (prixRevient >= 0) { 
        return `Gain de ${prixRevient}€`;
    }else{
        return `Perte de ${-1*prixRevient}€`;
    }
}

//Exercice 4

/**
 * Fonction qui renvoie le plus grand nombre d'une liste de trois
 * @param nombre1 : Le premier nombre à comparer
 * @param nombre2 : Le second nombre à comparer
 * @param nombre3 : Le troisième nombre à comparer
 * @returns Le plus grand des trois nombres
 */
const nomPlusGrandNombre = (nombre1 :number, nombre2: number, nombre3: number) : number => {
    const plusGrandNombre : number = Math.max(nombre1, nombre2, nombre3);
    return plusGrandNombre;
}

//Exercice 5


/**
 * Fonction qui renvoie le plus grand nombre d'une liste de taille indéfinie
 * @param nums : Tableau de taille indéfini contenant la liste des nombres à comparer
 * @returns Le plus grand des nombres contenus dans le tableau
 */
const nomPlusGrandNombreTableau = (...nums : number[]) : number =>{
    const plusGrandNombre :number = Math.max(...nums);
    return plusGrandNombre;
}