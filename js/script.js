document.querySelector('button').addEventListener('click', ()=>{
    let container = [];
    let resultado = document.getElementById('result');
    for (i = 1; i <= 100; i++) {
       
        if( i % 3 == 0 && i % 5 == 0){
            container.push('FizzBuzz')
        }
        else if(i % 3 == 0){
            container.push('Fizz')
        }
        else if(i % 5 == 0){
            container.push('Buzz')
        }
        else{
            container.push(i)
        }
        
    }
    container.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultado.appendChild(li);
    });
})