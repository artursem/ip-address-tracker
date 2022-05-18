import { ReactNode } from 'react';
import styles from './styles/Value.module.css';

interface ValueProps {
	children: ReactNode;
}

const Value = ({ children }: ValueProps) => {
	return <div className={styles.value}>{children}</div>;
};

export default Value;
