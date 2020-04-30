function check() {
    //Déclaration des var qui permettent de remplir les alert
    var majeur = 'Vous êtes majeur!';
    var mineur = 'Vous êtes mineur...';
    //Déclaration de la var qui récupère l'âge entré par l'utilisateur
    var age = document.getElementById('old').value;
    /*SI l'âge est supérieur à 18, l'alerte contient le message MAJEUR, 
    SINON, l'alerte contient le message MINEUR*/
    if (age > 18) {
        alert(majeur);
    } else {
        alert(mineur);
    }
}