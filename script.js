function openPopup() {
    var button = document.getElementById("share-icon");
    var pop = document.getElementById("popup");
    
    if(button.style.width == "2rem") {
        button.style.transition = "all 300ms ease-in-out";
        button.style.backgroundColor = "hsl(217, 19%, 35%)";
        button.style.width = "2.1rem";
        pop.style.display = "flex";
    }

    else {
        button.style.transition = "all 300ms ease-in-out"
        button.style.backgroundColor = "hsl(210, 46%, 95%)";
        button.style.width = "2rem";
        pop.style.display = "none";
    }

    var ignoreClickOnMeElement = document.getElementById('share-icon');

    document.addEventListener('click', function(event) {
        var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        if (!isClickInsideElement) {
            button.style.transition = "all 300ms ease-in-out"
            button.style.backgroundColor = "hsl(210, 46%, 95%)";
            button.style.width = "2rem";
            pop.style.display = "none";
        }
    });
    
}