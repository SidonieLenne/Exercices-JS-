function reste(){
    var shoe = document.getElementById('shoeSize').value;
    var birth = document.getElementById('birthyear').value;
    var result = (shoe*2+5)*50-birth+1770;
     alert(result);
    }