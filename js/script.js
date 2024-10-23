const optionsBtn = document.getElementById("optionsBtn");
const optionsMobile = document.getElementById("optionsMobile");

optionsBtn.addEventListener("click", function() {

    if (optionsMobile.style.display === "none") {
        optionsMobile.style.display = "block"; 
    } else {
        optionsMobile.style.display = "none"; 
    }
});