document.getElementById('socials-button').addEventListener('click', function() {
    var socials = document.getElementById('socials');
    if (socials.classList.contains('show')) {
        socials.classList.remove('show'); 
    } else {
        socials.classList.add('show'); 
    }
});