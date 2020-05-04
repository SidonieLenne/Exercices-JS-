function check() {
    //Déclaration des var qui permettent de remplir les alert
    var majeur = 'Vous êtes majeur!';
    var mineur = 'Vous êtes mineur...';
    //Déclaration de la var qui récupère l'âge entré par l'utilisateur
    var age = document.getElementById('old').value;
    /*SI l'âge est supérieur ou égal à 18 ET inférieur à 120, l'alerte contient le message MAJEUR, 
    SINON SI l'âge est inférieur à 18 ET supérieur à 0, l'alerte contient le message MINEUR
    SINON, l'alerte contient le message ERREUR*/
    if (age >= 18 && age < 120) {
        alert(majeur);
    }
    else if (age < 18 && age > 0){
        alert(mineur);
    }
    else{
        alert('erreur');
    }
}