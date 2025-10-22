const timeElement = document.getElementById("currentTime");
if (timeElement) {
  const updateTime = () => {
    timeElement.textContent = Date.now();
  };
  updateTime();
  setInterval(updateTime, 1000);
}

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("test-contact-success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear old errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMessage.hidden = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();
  console.log(form.message.value.trim());

  let valid = true;

  // Name validation
  if (name === "") {
    document.getElementById("test-contact-error-name").textContent =
      "Full name is required.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
  if (email === "") {
    document.getElementById("test-contact-error-email").textContent =
      "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("test-contact-error-email").textContent =
      "Please enter a valid email address.";
    valid = false;
  }

  // Subject validation
  if (subject === "") {
    document.getElementById("test-contact-error-subject").textContent =
      "Subject is required.";
    valid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("test-contact-error-message").textContent =
      "Message is required.";
    valid = false;
  } else if (message.length < 10) {
    document.getElementById("test-contact-error-message").textContent =
      "Message must be at least 10 characters.";
    valid = false;
  }

  // If valid, show success
  if (valid) {
    successMessage.focus();
    form.reset();

    setTimeout(() => {
     successMessage.hidden = true;
    }, 4000);
  }
});
