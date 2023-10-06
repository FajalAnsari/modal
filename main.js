  // Get the modal and the close button
  const modal = document.getElementById('PaymentTerminal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Show the modal on page load
  window.addEventListener('load', () => {
      modal.style.display = 'block';
  });

  // Close the modal when clicking the close button
  closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', (e) => {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });