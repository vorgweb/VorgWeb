// Rolagem Suave para as seções internas ao clicar nos botões/links
document.querySelectorAll('nav a, .cta-group a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Comportamento Dinâmico do Menu Superior (Header) ao rolar a página
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 60) {
        navbar.style.padding = '12px 8%';
        navbar.style.backgroundColor = 'rgba(8, 8, 8, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
    } else {
        navbar.style.padding = '20px 8%';
        navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});