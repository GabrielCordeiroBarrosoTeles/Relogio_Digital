const horas  = document.getElementById('horas');
const minutos  = document.getElementById('minutos');
const segundos  = document.getElementById('segundos');

const relogio = setInterval(
    function time(){
        let dateToday = new Date();
        let hora = dateToday.getHours();
        let minuto = dateToday.getMinutes();
        let segundo = dateToday.getSeconds();

        if(hora<10) hora = '0'+hora;
        if(minuto<10) minuto = '0'+minuto;
        if(segundo<10) segundo = '0'+segundo;

        horas.textContent = hora;
        minutos.textContent = minuto;
        segundos.textContent = segundo;
    }
)