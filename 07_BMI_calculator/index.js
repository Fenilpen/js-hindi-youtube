const form = document.querySelector('form')


form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')
    
    if(height === "" || height < 0 || Number.isNaN(height)){
      results.innerHTML = `please give a valid input ${height}`
    }
    else if(weight === "" || weight < 0 || Number.isNaN(weight)){
      results.innerHTML = `please give a valid input ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }

})
