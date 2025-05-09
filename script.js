// Añade elementos flotantes dinámicos
document.addEventListener("DOMContentLoaded", () => {
    const scienceIcons = [
        "🧫", "🔬", "🧪", "🦠", 
        "💊", "🧬", "🧴", "🧲"
    ];

    for (let i = 0; i < 10; i++) {
        const anim = document.createElement("div");
        anim.className = "floating";
        anim.innerHTML = scienceIcons[Math.floor(Math.random() * scienceIcons.length)];
        anim.style.left = `${Math.random() * 100}vw`;
        anim.style.top = `${Math.random() * 100}vh`;
        anim.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
        anim.style.animationDuration = `${Math.random() * 10 + 10}s`;
        anim.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        document.body.appendChild(anim);
    }
});