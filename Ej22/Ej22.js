document.addEventListener('DOMContentLoaded', main); 

function main(){
    const menu = document.querySelectorAll('.menu');

    menu.forEach(elemento => {
        elemento.addEventListener('mouseover', encimaRaton); 
        
        function encimaRaton(){
            elemento.style.backgroundColor = 'blue';
            elemento.style.color = 'yellow';
        };

        elemento.addEventListener('mouseout', ratonFuera); 
        
        function ratonFuera(){
            elemento.style.backgroundColor = '';
            elemento.style.color = '';
        };
    });
};