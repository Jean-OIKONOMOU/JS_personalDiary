// CREATE THE TITLE THAT GIVES THE CURRENT DD/MM/YYYY
window.addEventListener("load", () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // JANUARY IS 0
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    const dateTime = document.getElementById("dateTime")
    dateTime.textContent = today
    dateTime.style.marginBottom = "55px"
})

// GRAB THE TEXT FROM THE DIARY TEXTAREA AND ADD IT TO THE DOM IN THE "TODO" SECTION
var form = document.getElementById("entryForm");

var entries = document.getElementById("entries")

function addEntry() {
    var pp = document.createElement("p")
    pp.textContent = document.getElementById('diaryForm').value
    entries.appendChild(pp)
    document.getElementById('diaryForm').value = ""
}

form.addEventListener('submit', (event) => {
    event.preventDefault();  // CROSS-BROWSER COMPATIBLE PREVENT PAGE REFRESH ON SUBMIT
    addEntry() // ADDS ENTRY
});

// CROSS-BROWSER COMPATIBLE SCROLL TO TOP BUTTON
var buttonTop = document.getElementById("btnTop");

buttonTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// CROSS-BROWSER COMPATIBLE SCROLL TO BOTTOM BUTTON
var buttonBottom = document.getElementById("btnBottom");

buttonBottom.addEventListener("click", () => {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
})

