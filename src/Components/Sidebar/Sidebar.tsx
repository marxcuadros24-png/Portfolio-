import React from 'react';
import GooeyNav from '../GooeyNav/GooeyNav';
import './Sidebar.css';

interface SidebarProps {
    navItems: { label: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
    // Función para manejar el scroll suave con offset
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;

            // Offset para dejar un pequeño espacio arriba (ajusta según necesites)
            const topOffset = 80; // Espacio desde el top de la ventana

            // Calcular la posición para mostrar la sección desde arriba
            const scrollPosition = offsetTop - topOffset;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    // Modificar los items para agregar el manejador de click
    const navItemsWithHandler = navItems.map(item => ({
        ...item,
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href)
    }));

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <span className="logo-text">MC</span>
            </div>

            <div className="sidebar-nav">
                <GooeyNav
                    items={navItemsWithHandler}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 4]}
                />
            </div>
        </aside>
    );
};

export default Sidebar;
