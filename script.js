document.addEventListener('DOMContentLoaded', () => {
    // Set the target date based on the image (25 days, 12 hours, 43 mins, 19 secs from now)
    // For a real scenario, this would be a fixed date, e.g., new Date('2024-10-31T00:00:00')
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 25);
    targetDate.setHours(targetDate.getHours() + 12);
    targetDate.setMinutes(targetDate.getMinutes() + 43);
    targetDate.setSeconds(targetDate.getSeconds() + 19);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference < 0) {
            // Timer ended
            daysEl.innerText = '00';
            hoursEl.innerText = '00';
            minutesEl.innerText = '00';
            secondsEl.innerText = '00';
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Add leading zero if needed
        daysEl.innerText = days < 10 ? '0' + days : days;
        hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    // Initial call
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);

    // Add glitch effect randomly to the title for extra horror vibe
    const titleSpan = document.querySelector('.hero-title span');
    
    setInterval(() => {
        if (Math.random() > 0.8) {
            if (titleSpan) {
                titleSpan.style.opacity = '0.5';
                titleSpan.style.transform = 'translate(2px, -2px)';
                setTimeout(() => {
                    titleSpan.style.opacity = '1';
                    titleSpan.style.transform = 'translate(0, 0)';
                }, 100);
            }
        }
    }, 2000);

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });
});
