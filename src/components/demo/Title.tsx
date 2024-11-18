import React from 'react';

interface TitleProps {
    name: string;
}

export const Title: React.FC<TitleProps> = ({ name }) => {
    return (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
            {name}
        </h1>
    );
};
