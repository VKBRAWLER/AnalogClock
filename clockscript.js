setInterval(() => {
    d = new Date();
    Hour = d.getHours();
    Minute = d.getMinutes();
    Second = d.getSeconds();
    Srotate = 6*Second;
    Mrotate = 6*Minute;
    Hrotate = 30*Hour + Minute/2;

    hrs.style.transform = `rotate(${Hrotate}deg)`;
    min.style.transform = `rotate(${Mrotate}deg)`;
    sec.style.transform = `rotate(${Srotate}deg)`;

}, 1000);
/*
hrs.style.transform = `rotate(0deg)`;
min.style.transform = `rotate(00deg)`;
sec.style.transform = `rotate(30deg)`;
*/