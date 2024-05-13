const paymentForm = document.getElementById("payment-form");
const paymentProgress = document.getElementById("payment-progress");

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Simulate payment processing
  const paymentPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  // Update progress bar while payment is processing
  paymentPromise.then(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      paymentProgress.value = progress;

      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 100);
  });

  // Redirect to success page after payment is processed
  paymentPromise.then(() => {
    window.location.href = "success.html";
  });
});