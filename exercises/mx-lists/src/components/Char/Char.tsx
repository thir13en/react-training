import React from 'react';

const letterStyle = {
	display: 'inline-block',
	width: '2rem',
	height: '2rem',
	border: '1px solid purple',
};

const Char = ({ char, deleteElement }: { char: string, deleteElement: any, key: number }) =>
	(<span style={letterStyle} onClick={deleteElement}>{ char }</span>)

export default Char;
