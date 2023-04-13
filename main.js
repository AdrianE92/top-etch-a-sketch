function createDivs(event){
    if (event){
        event.preventDefault();
    }

    var numberOfDivs = document.getElementById('numberInput').value;
    if(!numberOfDivs){
        numberOfDivs = 4;
    }
    var container = document.getElementById('container');
    container.innerHTML = '';
    container.classList.add('grid');

    var square = numberOfDivs * numberOfDivs;

    container.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
    

    for(var i = 0; i < square; i++){
        var div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', (event) => { event.target.style.backgroundColor = 'black';});
        div.innerHTML = i;
        container.appendChild(div);
        console.log(i);
    }
}

window.onload = function(){
    createDivs(event);
}