
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent =
    new Date().getFullYear();

  // Replace this with your WhatsApp number.
  // Example format: 919876543210
  const whatsappNumber = "91YOURNUMBER";

  const whatsappLink = document.getElementById("whatsapp");

  whatsappLink.href =
    "https://wa.me/" + whatsappNumber;

  whatsappLink.addEventListener("click", function (event) {
    if (whatsappNumber.includes("YOURNUMBER")) {
      event.preventDefault();
      alert("Please add your WhatsApp number in script.js.");
    }
  });
});
