document.addEventListener('DOMContentLoaded', () => {
    const data = [
        {
            letters: 'All DAY'
        },
        {
            letters: 'I DREAMT ABOUT'
        },
        {
            letters: 'SPORTS'
        },
    ];

    const titles = document.querySelectorAll('.hero-title');

    const fadeInTitle = (title: Element, delay: number) => {
        setTimeout(() => {
            title.classList.add('fade-in');
        }, delay);
    };

    let delay = 0;

    titles.forEach((title, index) => {
        fadeInTitle(title, delay);
        delay += 500;
    });
});