import React from 'react';
import Button from "@mui/material/Button";

const ButtonInput = () => {
    const inputTypes = [
        {
            name: 'Button',
            label: 'Button',
            type: 'Button',
            id: 'Button',
            variant : '',
            startIcon :'',
            endIcon :'',
            onClick : '',
            href :''

        }
    ];

    return (
        <>
            {inputTypes.map((inputType, index) => (
                <Button {...inputType} key={index} />
            ))}
        </>
    );
};

export default ButtonInput;
