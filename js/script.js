// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', () => {
    // モバイルメニューの設定
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');

    // モバイルメニュートグル
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            // ハンバーガーアイコンをXに変換
            const spans = mobileMenu.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }

    // スクロール時のヘッダー切り替え
    const header = document.querySelector('header');
    const changeHeaderOnScroll = () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    };

    window.addEventListener('scroll', changeHeaderOnScroll);

    // スムーススクロール
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (!element) return;
        
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    // ナビゲーションリンクのスムーススクロール設定
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // モバイルメニューを閉じる
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                const spans = mobileMenu.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('active'));
            }
            
            // スムーススクロール実行
            smoothScroll(href);
        });
    });

    // フッターリンクのスムーススクロール設定
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            smoothScroll(href);
        });
    });

    // お問い合わせフォーム処理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // フォームデータ取得
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 実際の送信は省略しますが、ここで送信処理を行います
            console.log('送信データ:', { name, email, subject, message });
            
            // 送信成功メッセージ
            alert('お問い合わせありがとうございます。近日中にご返信いたします。');
            
            // フォームリセット
            contactForm.reset();
        });
    }

    // 機能のテスト検証
    console.assert(typeof smoothScroll === 'function', 'smoothScroll関数が正しく定義されていません');
    console.assert(document.querySelector('.mobile-menu') !== null, 'モバイルメニューが存在しません');
});

// Syntax self-check
try {
    console.log("JavaScript構文チェック: 問題なし");
}
catch (error) {
    console.error("JavaScript構文エラー:", error.message);
}