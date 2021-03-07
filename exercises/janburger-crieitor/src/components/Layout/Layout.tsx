import React from 'react';

const Layout = (props: any) => (
	<>
		<div>Toolbar</div>
		<main>{props.children}</main>
	</>
);

export default Layout;