function figyelmeztetes(e){
    let cucc = e.target.id;
    let beleegyezik = confirm(`biztos vagy benne, hogy az ${cucc} dobozt választod?`);
    if(beleegyezik){
       if(e.target.classList.contains('nyertes')){
            alert('nyertzél')
       } else{
            alert('nem nyert')
       }

       
    }
}

function nyertes_kiválasztása(dobozok){
    return dobozok[Math.floor(Math.random()*3)];
    
}

function main(){
    let dobozok = document.querySelectorAll('.skatulya');

    for (const doboz of dobozok) {
        doboz.addEventListener('click', figyelmeztetés)
    }
    let nyertesdoboz = nyertes_kiválasztása(dobozok);
    // a nyertes doboz kapjon egy class-jelölőt hogy ő a nyertes.

    nyertesdoboz.classList.toggle('nyertes');
}


main();


