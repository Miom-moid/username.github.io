// فتح وإغلاق القائمة في الهواتف
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// فتح وإغلاق نافذة التواصل
function openModal() {
  document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('contactModal').style.display = 'none';
}

// إغلاق النافذة بالنقر خارجها
window.onclick = function(event) {
  const modal = document.getElementById('contactModal');
  if (event.target === modal) {
    closeModal();
  }
};

// معالجة إرسال النموذج
function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const messageDiv = document.getElementById('formMessage');

  // محاكاة إرسال البريد
  setTimeout(() => {
    messageDiv.innerHTML = `<p style="color: green;">شكرًا لك، ${name}! تم إرسال رسالتك بنجاح.</p>`;
    document.getElementById('contactForm').reset();
    setTimeout(() => {
      closeModal();
      messageDiv.innerHTML = '';
    }, 2000);
  }, 1000);
}

// تأثير التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // تحديث الرابط النشط
    document.querySelectorAll('.nav-list a').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});
