// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');

    const setMenuOpen = (open) => {
        if (!mobileMenu || !navMenu) return;
        navMenu.classList.toggle('show', open);
        mobileMenu.setAttribute('aria-expanded', open ? 'true' : 'false');
        mobileMenu.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
        const spans = mobileMenu.querySelectorAll('span');
        spans.forEach((span) => span.classList.toggle('active', open));
    };

    if (mobileMenu && navMenu) {
        // メニュー ul に id を付与（aria-controls 用）
        if (!navMenu.id) {
            navMenu.id = 'primary-menu';
        }

        mobileMenu.addEventListener('click', () => {
            const willOpen = !navMenu.classList.contains('show');
            setMenuOpen(willOpen);
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.classList.contains('show')) return;
            if (mobileMenu.contains(e.target) || navMenu.contains(e.target)) return;
            setMenuOpen(false);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('show')) {
                setMenuOpen(false);
                mobileMenu.focus();
            }
        });
    }

    // スクロール時のヘッダー切り替え
    const header = document.querySelector('header');
    const changeHeaderOnScroll = () => {
        if (!header) return;
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    };

    window.addEventListener('scroll', changeHeaderOnScroll);

    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (!element) return;

        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const bindSmoothLinks = (links) => {
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href || !href.startsWith('#')) return;
                e.preventDefault();

                if (navMenu && navMenu.classList.contains('show')) {
                    setMenuOpen(false);
                }

                smoothScroll(href);
            });
        });
    };

    bindSmoothLinks(document.querySelectorAll('nav a'));
    bindSmoothLinks(document.querySelectorAll('.footer-links a'));
    bindSmoothLinks(document.querySelectorAll('a[href^="#"]:not(nav a):not(.footer-links a)'));
});
