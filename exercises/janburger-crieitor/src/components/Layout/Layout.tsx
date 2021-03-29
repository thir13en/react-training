import React from 'react';
import styles from './Layout.module.scss';

const Layout = (props: any) => (
	<>
		<div>Toolbar</div>
		<main className={styles.content}>
			{props.children}
		</main>
	</>
);

export default Layout;