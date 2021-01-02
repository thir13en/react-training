import React from 'react';

const Validation = ({ inputLength }: { inputLength: number }) => {
	const validationMessage = inputLength > 4 ? 'Text long enough' : 'Text too short';

    return <h4>{ validationMessage }</h4>;
};

export default Validation;
