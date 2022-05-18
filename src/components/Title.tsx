import { ReactNode } from 'react';
import styles from './styles/Title.module.css';

interface TitleProps {
	children: ReactNode;
}

const Title = (props: TitleProps) => {
	return <div className={styles.title}>{props.children}</div>;
};

export default Title;
