function reste(){
    var shoe = document.getElementById('shoeSize').value;
    var birth = document.getElementById('birthyear').value;

    var shoe2 = shoe/2;
    var shoe25 = shoe2+5;
    var x50 = shoe25*50;
    var birthLess = x50-birth;
    var plus1769 = birthLess+1769;

     alert(shoe2 +'\n'+ shoe25 +'\n'+ x50 +'\n'+ birthLess +'\n'+ plus1769);
    }