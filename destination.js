/* ==========================================================================
   PANDORA TRAVEL — DEDICATED DESTINATION PAGES INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll to contact form when CTA buttons are clicked
  const ctaTriggers = document.querySelectorAll('.trigger-contact-scroll');
  ctaTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetForm = document.getElementById('contact-form-section');
      if (targetForm) {
        targetForm.scrollIntoView({ behavior: 'smooth' });
        // Optional pre-fill topic
        const topic = btn.getAttribute('data-topic');
        const notesField = document.getElementById('inquiry-notes');
        if (topic && notesField) {
          notesField.value = `Inquiry regarding: ${topic}\n` + (notesField.value || '');
          notesField.focus();
        }
      }
    });
  });

  // Handle direct inquiry form submission
  const inquiryForm = document.getElementById('dest-inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inquiry-name')?.value || 'Traveler';
      const email = document.getElementById('inquiry-email')?.value || '';
      const dest = document.getElementById('inquiry-dest')?.value || 'Philippines';
      const notes = document.getElementById('inquiry-notes')?.value || '';

      const subject = encodeURIComponent(`Pandora Travel Concierge Inquiry: ${dest}`);
      const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Destination: ${dest}\n` +
        `Special Requests / Notes: ${notes}\n\n` +
        `Sent via Pandora Travel Destination Landing Page.`
      );

      // Open mailto link
      window.location.href = `mailto:info@pandoratravel.dk?subject=${subject}&body=${body}`;

      // Feedback toast / alert
      alert(`Thank you, ${name}! Your inquiry for ${dest} has been prepared. Opening your email client to send to info@pandoratravel.dk.`);
    });
  }
});
