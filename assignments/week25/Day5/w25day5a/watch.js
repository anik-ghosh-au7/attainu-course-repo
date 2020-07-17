window.onload = () => {
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let ms = document.getElementById('centi_sec');

    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let reset = document.getElementById('reset');

    let start_min, start_sec, start_ms;

    start.addEventListener('click', () => {
        start_ms = setInterval(() => {
            ms.innerText = parseInt(ms.innerText) + 1 > 9 ? parseInt(ms.innerText) + 1 : '0' + (parseInt(ms.innerText) + 1);
            if (ms.innerText === '99') {
                ms.innerText = '00';
            }
        }, 10);
        start_sec = setInterval(() => {
            if (sec.innerText === '60') {
                sec.innerText = '00';
            }
            sec.innerText = parseInt(sec.innerText) + 1 > 9 ? parseInt(sec.innerText) + 1 : '0' + (parseInt(sec.innerText) + 1);
        },1000);
        start_min = setInterval(() => {
            if (min.innerText === '60') {
                min.innerText = '00';
            }
            min.innerText = parseInt(min.innerText) + 1 > 9 ? parseInt(min.innerText) + 1 : '0' + (parseInt(min.innerText) + 1);
        },1000 * 60);
    });

    stop.addEventListener('click', () => {
        clearInterval(start_ms);
        clearInterval(start_sec);
        clearInterval(start_min);
    });

    reset.addEventListener('click', () => {
        clearInterval(start_ms);
        ms.innerText = '00';
        clearInterval(start_sec);
        sec.innerText = '00';
        clearInterval(start_min);
        min.innerText = '00';
    });
};