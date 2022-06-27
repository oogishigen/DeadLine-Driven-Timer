function updateUIOfCountdown() {

   window.addEventListener('load', function () {
      updateUIOfCountdown();
      setInterval(updateUIOfCountdown, 1000);
   })

   const now = new Date(); //現在時刻を取得

   location.search.substring(1 + "deadline=", location.search.length);
   const v = location.search.split("=")[1];
   const par = parseInt(v);


   const time = new Date(par);

   const diff = time.getTime() - now.getTime(); //時間の差を取得（ミリ秒）

   //ミリ秒から単位を修正
   const calcDay = Math.floor(diff / 1000 / 60 / 60 / 24);
   const calcHour = Math.floor(diff % (24 * 60 * 60 * 1000) / 1000 / 60 / 60) - 9;
   const calcMin = Math.floor(diff % (24 * 60 * 60 * 1000) / 1000 / 60) % 60;
   const calcSec = Math.floor(diff % (24 * 60 * 60 * 1000) / 1000) % 60;

   day = document.getElementById('day');
   hour = document.getElementById('hour');
   min = document.getElementById('min');
   sec = document.getElementById('sec');

   //取得した時間を表示（2桁表示）
   day.innerHTML = calcDay < 10 ? '0' + calcDay : calcDay;
   hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
   min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
   sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
}


window.addEventListener('load', function () {
    updateUIOfCountdown();
    setInterval(updateUIOfCountdown, 1000);
})

