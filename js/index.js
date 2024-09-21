document.getElementById('login').addEventListener('click',function(event){
    event.preventDefault();

    if(isNaN( getInputValue('number'))){
        alert('Please enter a number')
        return;
    }
    if( getInputValue('pin') === 1234 &&  getInputValue('number') === 5678 ){
        window.location.href = './home.html'
    }

    else{
        alert('Please try again')
    }
})