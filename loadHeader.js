function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {

            document.getElementById("nav").innerHTML = data;
        })
}

function navToPage() {
    let selectedValue = document.getElementById("destinations-select").value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
}



document.addEventListener("DOMContentLoaded", loadHeader);
document.addEventListener("DOMContentLoaded", loadFooter);
