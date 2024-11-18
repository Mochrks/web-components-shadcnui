import React from 'react'

interface TitleProps {
    text: string;
}

export const Description: React.FC<TitleProps> = ({ text }) => {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {text}
        </p>
    );
};
