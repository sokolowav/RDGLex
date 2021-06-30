console.log('accordion-service.js added')

var acc = document.getElementsByClassName("accordion-service");
var i;

for (i = 0; i < acc.length; i++ ) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("accordion__active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}