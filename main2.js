
const toggleBtn = document.getElementById("toggleBtn");
const hiddenDiv = document.getElementById("hiddenDiv");

toggleBtn.addEventListener("click", function() {

    if (hiddenDiv.style.display === "none") {
        hiddenDiv.style.display = "block";
    } else {
        hiddenDiv.style.display = "none";
    }
});
