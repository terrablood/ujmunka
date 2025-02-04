function figyelmeztetes(e){
    let cucc = e.target.id;
    confirm(`biztos vagy benne, hogy az ${cucc} dobozt választod?`);
}
function nyertes_kiválasztása(dobozok){
    Math.floor(Math.random()*3);
    
}


function main(){
    let dobozok = document.querySelectorAll('.skatulya');

    for (const doboz of dobozok) {
        doboz.addEventListener('click', figyelmeztetés)
    }
    nyertes_kiválasztása(dobozok);
}



