window.addEventListener("load", () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    const dateTime = document.getElementById("dateTime")
    dateTime.textContent = today
    dateTime.style.marginBottom = "55px"
})

var form = document.getElementById("entryForm");
function handleForm(event) { 
    event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);