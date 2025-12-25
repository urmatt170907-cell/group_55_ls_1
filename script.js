(function createSaurfangCard() {
    const body = document.body;
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const subTitle = document.createElement('p');

    Object.assign(body.style, {
        backgroundColor: '#050505',
        height: '100vh',
        margin: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1200px',
        overflow: 'hidden'
    });

    Object.assign(card.style, {
        width: '320px',
        height: '480px',
        backgroundColor: '#1a1a1a',
        borderRadius: '20px',
        border: '2px solid #333',
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRgHvizo23ZA0jH7j3UHscN_-1fLPLRhdoQ&s')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '30px',
        boxSizing: 'border-box',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
        boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        cursor: 'pointer'
    });

    title.innerText = "ВАРОК САУРФАНГ";
    Object.assign(title.style, {
        color: '#d4af37',
        margin: '0',
        fontFamily: 'Arial Black, sans-serif',
        fontSize: '24px',
        textShadow: '2px 2px 10px rgba(0,0,0,1)',
        transform: 'translateZ(60px)',
        pointerEvents: 'none'
    });

    subTitle.innerText = "ОРДА ВЫСТОИТ!,ОРДА СИЛЬНА!!";
    Object.assign(subTitle.style, {
        color: '#fff',
        backgroundColor: '#cc0000',
        padding: '5px 10px',
        fontSize: '12px',
        fontWeight: 'bold',
        marginTop: '10px',
        width: 'fit-content',
        transform: 'translateZ(40px)',
        pointerEvents: 'none'
    });

    card.appendChild(title);
    card.appendChild(subTitle);
    body.appendChild(card);

    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = (e.pageX - centerX) / centerX;
        const deltaY = (e.pageY - centerY) / centerY;

        const rotateX = deltaY * -20;
        const rotateY = deltaX * 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.boxShadow = `${-deltaX * 40}px ${-deltaY * 40}px 60px rgba(204, 0, 0, 0.3)`;
    });

    card.addEventListener('mousedown', () => {
        card.style.transform += ' scale(0.9) translateZ(-50px)';
        body.style.backgroundColor = '#1a0000';
    });

    card.addEventListener('mouseup', () => {
        card.style.transform = card.style.transform.replace(' scale(0.9) translateZ(-50px)', '');
        body.style.backgroundColor = '#050505';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        body.style.backgroundColor = '#050505';
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.1s ease-out';
    });

})();
