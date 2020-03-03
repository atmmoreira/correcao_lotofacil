(function () {

    const dezenas = [01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    console.log(`Dezenas: [ ${dezenas} ]`);    

    // Dezenas Eliminadas
    const el1 = 06;
    const el2 = 15;

    // Mostrando Dezenas Eliminadas
    const dezenasEliminadas = document.getElementById('dezenasEliminadas');
    dezenasEliminadas.getElementsByClassName('form-control')[0].value = el1
    dezenasEliminadas.getElementsByClassName('form-control')[1].value = el2

    // Retirando as Dezenas Eliminadas do Array Dezenas
    dezenas.splice(dezenas.indexOf(el1), 1);
    dezenas.splice(dezenas.indexOf(el2), 1);
    console.log(`Dezenas: ${el1} e ${el2} retirada: [ ${dezenas} ]`);  
    
    // Dezenas Fixas
    const dezenasFixas1 = 02;
    const dezenasFixas2 = 04;
    const dezenasFixas3 = 08;
 
    // Mostrando Dezenas Fixas
    const dezenasFixas = document.getElementById('dezenasFixas');
    console.log(dezenasFixas.getElementsByClassName('form-control').length);
    
    dezenasFixas.getElementsByClassName('form-control')[0].value = dezenasFixas1
    dezenasFixas.getElementsByClassName('form-control')[1].value = dezenasFixas2
    dezenasFixas.getElementsByClassName('form-control')[2].value = dezenasFixas3

    // Retirando as Dezenas Eliminadas do Array Dezenas
    dezenas.splice(dezenas.indexOf(dezenasFixas1), 1);
    dezenas.splice(dezenas.indexOf(dezenasFixas2), 1);
    dezenas.splice(dezenas.indexOf(dezenasFixas3), 1);
    console.log(`Dezenas: ${dezenasFixas1}, ${dezenasFixas2} e ${dezenasFixas3} fixas: [ ${dezenas} ]`);  

    
    
    
})();