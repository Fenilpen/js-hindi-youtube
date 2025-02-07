const Mytime = document.getElementById('clock')

setInterval(function (){
    const time = new Date()
    Mytime.innerHTML = time.toLocaleTimeString()
},1000)