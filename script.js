// script.js
document.addEventListener("DOMContentLoaded", () => {

  // ---------------------------
  // CONTACT FORM HANDLER
  const form = document.getElementById("contactform");
  const feedback = document.getElementById("feedback");

  if (form && feedback) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = document.getElementById("name");
      const name = nameInput?.value.trim() || "Guest";

      const message = `Thank you, ${name}! Your message has been recorded.`;
      feedback.textContent = message;
      alert(message);

      form.reset();
    });
  }

  // ---------------------------
  // SOFTWARE TOGGLE
  const softwareBtn = document.getElementById("softwareBtn");
  const softwareText = document.getElementById("softwareText");

  if (softwareBtn && softwareText) {
    softwareBtn.addEventListener("click", () => {
      const isHidden = softwareText.hidden;

      softwareText.hidden = !isHidden;
      softwareBtn.textContent = isHidden
        ? "Hide software"
        : "Show software";
    });
  }

});
