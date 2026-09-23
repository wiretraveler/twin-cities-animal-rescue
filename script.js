const interest = document.getElementById("interest");

interest.addEventListener("change", function() {
    document.getElementById("interest-info").textContent = interest.value;
});
