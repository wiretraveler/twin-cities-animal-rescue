const interestDetails = {
    volunteer: "Volunteers help with animal care, events, and community outreach.",
    foster: "Foster families provide temporary homes for rescue animals."
};
const interest = document.getElementById("interest");

function updateInterestInfo() {
    document.getElementById("interest-info").textContent =
        interestDetails[interest.value] || "";
}

interest.addEventListener("change", updateInterestInfo);

function validateName() {
    const name = document.getElementById("name").value.trim();
    const error = document.getElementById("name-error");

    if (name === "") {
        error.textContent = "Please enter your name.";
        return false;
    }

    error.textContent = "";
    return true;
}
function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("email-error");

    if (email === "") {
        error.textContent = "Please enter your email.";
        return false;
    }

    error.textContent = "";
    return true;
}
