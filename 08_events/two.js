<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Chai aur code</h1>
    <button id="stop">Stop</button>
</body>
<script>
    const sayfenil = function (){
        console.log('fenil');   
    }

    const changetext = function (){
    document.querySelector('h1').innerHTML = 'best men'
    }
    
    const chnageMe =  setTimeout(changetext, 2000)

    document.querySelector('#stop').
    addEventListener('click',function (){
        clearTimeout(chnageMe)
        console.log('stoped');
    })
</script>
</html>
