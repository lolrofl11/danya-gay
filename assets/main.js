let isNegr = false
console.log("inited")

document.getElementById('make-negr').addEventListener('click', function() {
    console.log("clicked");
    if (!isNegr) {
        this.parentElement.querySelector('.section-image').setAttribute('src', 'assets/lgbt-daniil-negr.png');
        this.innerHTML = `Сделать Даню
                <img class="inline h-4 ml-1 mr-0.2" src="assets/Netflix_logo.svg" alt="netflix_logo"/>
                ормальным`
        isNegr = true;
        return;
    }
    this.innerHTML = `Сделать Даню
                <img class="inline h-4 ml-1 mr-0.2" src="assets/Netflix_logo.svg" alt="netflix_logo"/>
                егром`
    this.parentElement.querySelector('.section-image').setAttribute('src', 'assets/lgbt-daniil.jpg');
    isNegr = false;
});