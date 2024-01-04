import { useState } from 'react';
import { motion } from 'framer-motion';
import ToggleButton from './ToggleButton/ToggleButton';
import NavItem from '../Navigation/NavItem/NavItem';
import { navConfig } from '../../data/navigation';
import s from './BurgerMenu.module.css';

const variants = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 20,
      duration: 0.2, // Длительность анимации открытия (меньше число = быстрее анимация)
    },
  },
  closed: {
    x: '-100%',
    transition: {
      delay: 0.5, // Задержка перед началом  закрытия
      type: 'spring',
      stiffness: 450,
      damping: 40,
      duration: 0.5, // Длительность анимации закрытия (больше число = медленнее анимация)
    },
  },
};

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div className={s.sidebar} animate={isOpen ? 'open' : 'closed'}>
      <motion.div className={s.bg} variants={variants}>
        <nav className={s.container}>
          {navConfig.map(({ id, name, path }) => (
            <NavItem key={id} name={name} to={path} />
          ))}
        </nav>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default BurgerMenu;
