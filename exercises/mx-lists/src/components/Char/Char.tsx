import React from 'react';

const letterStyle = {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	border: '1px solid purple',
};

const Char = ({ char }: { char: string }) => (<span style={letterStyle}>{ char }</span>)

export default Char;
