import React from 'react';

const Validation = ({ inputLength }: { inputLength: number }) => {
    return (
        <>
            { inputLength > 4 && <h4>Text long enough</h4> }
            { inputLength <= 4 && <h4>Text too short</h4> }
        </>
    );
};

export default Validation;
