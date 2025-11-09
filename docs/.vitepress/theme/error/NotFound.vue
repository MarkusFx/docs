<template>
    <div class="page-404">
        <div class="floating f1">🕸️</div>
        <div class="floating f2">🕷️</div>

        <h1>404</h1>
        <p>( 0_-)... Такой страницы нет... Чойт ты тут... (0_0 )...</p>

        <RouterLink to="/docs/.vitepress/public" class="home-link"
            >Вернуться на главную</RouterLink
        >
    </div>
</template>

<style scoped>
.page-404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - var(--vp-nav-height));
    text-align: center;
    padding: 2rem;
    color: var(--vp-c-text-1);
    background: radial-gradient(
        circle at center,
        var(--vp-c-bg-alt) 0%,
        var(--vp-c-bg) 100%
    );
    overflow: hidden;
}

.page-404 h1 {
    font-size: clamp(4rem, 10vw, 8rem);
    margin: 0;
    font-weight: 800;
    background: linear-gradient(135deg, #7c3aed, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: glow 3s ease-in-out infinite alternate;
}

.page-404 p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: var(--vp-c-text-2);
}

.home-link {
    margin-top: 2rem;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 500;
    color: var(--vp-c-text-1);
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-alt);
    transition: all 0.3s ease;
}

.home-link:hover {
    border-color: var(--vp-c-brand);
    color: var(--vp-c-brand);
    transform: translateY(-1px);
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.15);
}

@keyframes glow {
    from {
        text-shadow:
            0 0 10px rgba(124, 58, 237, 0.4),
            0 0 20px rgba(59, 130, 246, 0.2);
    }
    to {
        text-shadow:
            0 0 25px rgba(124, 58, 237, 0.8),
            0 0 50px rgba(59, 130, 246, 0.4);
    }
}

.floating {
    position: absolute;
    opacity: 0.1;
    font-size: 10rem;
    animation: float 10s ease-in-out infinite;
    pointer-events: none;
    user-select: none;
}

.f1 {
    top: 15%;
    left: 20%;
    animation-delay: 0s;
}

.f2 {
    bottom: 10%;
    right: 25%;
    animation-delay: 3s;
}

@keyframes float {
    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}
</style>
