<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Chai aur javascript</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
</body>
<script>

// qustion use start and stop button
// answer

    let intervalid;
    
    document.querySelector('#start').addEventListener('click',function(){
        if (!intervalid){
            const datenow = function () {
                console.log('start clicked');
                console.log(Date.now());
            }
            intervalid = setInterval(datenow,500)
        }
        
    })
    

    document.querySelector('#stop').
    addEventListener('click',function(){
        console.log('stop clicked');
        clearInterval(intervalid)
        intervalid = null
    })

</script>
</html>
