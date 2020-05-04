function reste(){
    var shoe = document.getElementById('shoeSize').value;
    var birth = document.getElementById('birthyear').value;
    var result = (shoe*2+5)*50-birth+1770;
     alert(result);
    }

/*Alternative:
var result = shoe*2;
result +=5;   Une façon d'écrire "result = result+5;" plus rapidement.
result *=50;
result -=birth;
result +=1770;
    */ 