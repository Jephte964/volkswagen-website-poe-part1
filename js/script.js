// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // Enquiry Form Validation
    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const fullname = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const vehicle = document.getElementById("vehicle").value;
            const message = document.getElementById("message").value.trim();

            if (fullname.length < 3) {
                alert("Please enter your full name.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            const phonePattern = /^[0-9]{10}$/;

            if (!phonePattern.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            if (vehicle === "") {
                alert("Please select a vehicle.");
                return;
            }

            if (message.length < 10) {
                alert("Please enter at least 10 characters in your message.");
                return;
            }

            let response = "";

            switch (vehicle) {

                case "golf":
                    response = "Thank you! The Volkswagen Golf is currently available. Our sales team will contact you shortly.";
                    break;

                case "polo":
                    response = "Thank you! The Volkswagen Polo is available. We will send you the latest pricing.";
                    break;

                case "tiguan":
                    response = "Thank you! The Volkswagen Tiguan is available for a test drive.";
                    break;

                case "amarok":
                    response = "Thank you! The Volkswagen Amarok is available for commercial enquiries.";
                    break;

                case "passat":
                    response = "Thank you! The Volkswagen Passat is available on special order.";
                    break;

                case "tcross":
                    response = "Thank you! The Volkswagen T-Cross is available in multiple colours.";
                    break;

                default:
                    response = "Thank you for your enquiry.";
            }

            alert(response);

            enquiryForm.reset();

        });

    }

});