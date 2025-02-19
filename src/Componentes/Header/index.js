'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.logo}>

                {<Image className={styles.img} src='/images/logo2.jpg' alt="" width={100} height={50}/>}
                
            </div>

            <div 
            className={styles.menuIcon} 
              onClick={menuOpen ? closeMenu : openMenu}>
                  {menuOpen ? '✖' : '☰'}
            </div>

            <ul className={`${styles.lista} ${menuOpen ? styles.open : ''}`}>
                <li>
                    <Link href="/" className={`${styles.Link}`}>Home</Link>
                    <Link href="/" className={`${styles.Link}`}>Listar</Link>
                    
                </li>
                <li className={styles.itemMenu}>
                    <Link href='/medicos'className={`${styles.Link}`}>Médicos</Link>
                    <ul className={styles.submenu}>
                        <li className={styles.lista_submenu}>
                            <a href="/listar">Listar</a>
                        </li>
                        <li  className={styles.lista_submenu}>
                            <a href="#">Adicionar</a>
                        </li>
                        <li  className={styles.lista_submenu}>
                            <a href="#">Editar</a>
                        </li>
                        <li  className={styles.lista_submenu}>
                            <a href="#">Excluir</a>
                        </li>
                    </ul>
                    
                </li>
                <li className={styles.itemMenu}>
                    <Link href="/lista"className={`${styles.Link}`}>Pacientes</Link>
                    <ul className={styles.submenu}>
                        <li className={styles.lista_submenu}>
                            <a href="/Pacientes">Listar</a>
                        </li>
                        <li  className={styles.lista_submenu}>
                            <a href="#">Adicionar</a>
                        </li>
                        <li  className={styles.lista_submenu}>
                            <a href="#">Editar</a>
                        </li>
                        <li  className={styles.lista_submenu}>
                            <a href="#">Excluir</a>
                        </li>
                    </ul>
                    
                </li>
                <li className={styles.itemMenu}>
                    <Link href="/listar"className={`${styles.Link}`}>Agendamento</Link>
                    <ul className={styles.submenu}>
                        <li className={styles.lista_submenu}>
                            <a href="/Pacientes">Listar Consultas</a>
                        </li>
                        <li  className={styles.lista_submenu}>
                            <a href="#">Agendar Consulta</a>
                        </li>
                        <li  className={styles.lista_submenu}>
                            <a href="#">Editar Agendamento</a>
                        </li>
                        <li  className={styles.lista_submenu}>
                            <a href="#">Cancelar</a>
                        </li>
                    </ul>
                    
                </li>

            </ul>
        </header>
    );
}