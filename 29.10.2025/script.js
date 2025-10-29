// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const item = document.getElementById('item').value;
  const notes = document.getElementById('notes').value;

  // You can replace this link with WhatsApp or Email later
  alert(`✅ Thank you, ${name}!\nYour order for ${item} has been received.\nWe’ll deliver soon to: ${address}\n📞 Contact: ${phone}`);

  // Example: Redirect to thank you page
  // window.location.href = "thankyou.html";
}
