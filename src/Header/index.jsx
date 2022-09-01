import styles from './style.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__fotos}>
                <img src="/ft1.webp" alt="Vite logo" />
                <img src="/ft2.webp" alt="Vite logo" />
                <img src="/ft3.webp" alt="Vite logo" />
            </div>
            <div className={styles.header__perfil}>
                <img src="/bea.jpg" alt="Vite logo" />
                <h1>eu mudei 🫶🏻,</h1>
                <h3>e gostaria de te convidar a comemorar essa nova etapa da minha vida</h3>
            </div>
        </header>
    )
}