import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>todo</h1>
            {theme === 'light' ? (
                <img
                    src="/images/icon-moon.svg"
                    className={styles.logo}
                    onClick={toggleTheme}
                />
            ) : (
                <img
                    src="/images/icon-sun.svg"
                    className={styles.logo}
                    onClick={toggleTheme}
                />
            )}
        </div>
    );
};

export default Header;
