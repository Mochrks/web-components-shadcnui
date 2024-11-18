import React from 'react'

interface TitleProps {
    name: string;
}

export const SubTitleTwo: React.FC<TitleProps> = ({ name }) => {
    return (
        <h3 className="scroll-m-20 text-center text-2xl font-semibold tracking-tight">
            {name}
        </h3>
    );
};
