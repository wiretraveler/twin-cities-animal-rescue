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
