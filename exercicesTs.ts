//Exercice 1

/**
 * Fonction qui dit bonjour à une personne en console
 * @param prenom : prenom de la personne à qui dire bonjour
 */
const bonjour = (prenom: string): void => {
  console.log(`Bonjour ${prenom}`);
};

//Exercice 2

/**
 * Fonction qui somme deux nombres et renvoie le résultat en console
 * @param nombre1 : Premier nombre à sommer
 * @param nombre2 : Second nombre à sommer
 */
const somme = (nombre1: number, nombre2: number): void => {
  console.log(nombre1 + nombre2);
};

// Exercice 3

/**
 * Fonction qui donne le gain ou la perte d'un produit
 * @param prixVente : Prix de Vente du produit
 * @param prixFabrication : Prix de Fabrication du produit
 * @returns Gain ou perte de la vente du produit
 */
const benefice = (prixVente: number, prixFabrication: number): string => {
  const prixRevient: number = prixVente - prixFabrication;
  if (prixRevient >= 0) {
    return `Gain de ${prixRevient}€`;
  } else {
    return `Perte de ${-1 * prixRevient}€`;
  }
};

//Exercice 4

/**
 * Fonction qui renvoie le plus grand nombre d'une liste de trois
 * @param nombre1 : Le premier nombre à comparer
 * @param nombre2 : Le second nombre à comparer
 * @param nombre3 : Le troisième nombre à comparer
 * @returns Le plus grand des trois nombres
 */
const nomPlusGrandNombre = (
  nombre1: number,
  nombre2: number,
  nombre3: number
): number => {
  const plusGrandNombre: number = Math.max(nombre1, nombre2, nombre3);
  return plusGrandNombre;
};

//Exercice 5

/**
 * Fonction qui renvoie le plus grand nombre d'une liste de taille indéfinie
 * @param nums : Tableau de taille indéfini contenant la liste des nombres à comparer
 * @returns Le plus grand des nombres contenus dans le tableau
 */
const nomPlusGrandNombreTableau = (...nums: number[]): number => {
  const plusGrandNombre: number = Math.max(...nums);
  return plusGrandNombre;
};

//Exercice 6

/**
 * Fonction qui renvoie la moyenne d'un elève donné avec un commentaire
 * @param eleve : Nom de l'élève
 * @param notes : liste de taille indéfinie des notes de l'élève
 * @returns La moyenne de l'élève ainsi qu'un commentaire accompagnant la note
 */
const resulat = (eleve: string, ...notes: number[]): string => {
  const moyenne = calculMoyenne(notes);
  const commentaire = commentaireMoyenne(moyenne);
  return `${moyenne} : ${commentaire}`;
};

/**
 * Fonction qui calcule la moyenne d'un tableau de nombres donné
 * @param nums : Tableau dont on veut la moyenne
 * @returns La moyenne du tableau
 */
const calculMoyenne = (nums: number[]): number => {
  const somme: number = nums.reduce((a, b) => a + b);
  return somme / nums.length;
};

/**
 * Fonction qui renvoie le commentaire associé à la moyenne passé en paramètre, tout en vérifiant si la moyenne est réaliste
 * @param moyenne : Moyenne dont on veut le commentaire
 * @returns Le commentaire associé à la moyenne
 */
const commentaireMoyenne = (moyenne: number): string => {
  if (validationNote(moyenne)) {
    switch (true) {
      case moyenne <= 4:
        return "Castastrophique";
      case moyenne <= 10:
        return "Insuffisant";
      case moyenne <= 14:
        return "Passable";
      case moyenne <= 18:
        return "Bien";
      default:
        return "Très bien";
    }
  } else {
    return "Note non valide!";
  }
};

/**
 * Fonction vérifiant si la moyenne est dans la tranche valide [0-20]
 * @param moyenne : Moyenne à vérifier
 * @returns Boolean de vérification
 */
const validationNote = (moyenne: number): boolean => {
  if (moyenne < 0 || moyenne > 20) {
    return false;
  } else {
    return true;
  }
};

//Exercice 7

/**
 * Fonction qui effectue un calcul entre deux nombre avec un opérateur fourni par l'utilisateur
 * @param operande1 : Le premier opérande du calcul
 * @param operateur : L'opérateur du calcul
 * @param operande2 : Le deuxième opérande du calcul
 * @returns Le résultat du calcul
 */
const calc = (
  operande1: number,
  operateur: string,
  operande2: number
): number => {
  switch (operateur) {
    case "+":
      return operande1 + operande2;
    case "-":
      return operande1 - operande2;
    case "*":
      return operande1 * operande2;
    case "/":
      return operande1 / operande2;
    default:
      return NaN;
  }
};

//Exercice 8

/**
 * Fonction qui fait une pyramide horizontale de hauteur maximale donnée en paramètre ecrit en console
 * @param taille : Hauteur maximale de la pyramide
 */
const pyramide = (taille: number): void => {
  for (let index: number = 1; index <= taille; index++) {
    console.log("*".repeat(index));
  }
  for (let index: number = taille - 1; index >= 1; index--) {
    console.log("*".repeat(index));
  }
};