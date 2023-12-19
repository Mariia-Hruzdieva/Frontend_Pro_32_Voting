function counterIncrement(event) {
    const counter = event.target.parentElement.nextElementSibling;

    counter.textContent = String(+counter.textContent + 1);
}


document.addEventListener('DOMContentLoaded', function(){
	
    document.querySelectorAll('li > .smile').forEach(smile => {
        smile.addEventListener('click', counterIncrement);
    });

});











