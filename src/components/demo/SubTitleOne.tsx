import React from 'react'

interface TitleProps {
    name: string;
}

export const SubTitleOne: React.FC<TitleProps> = ({ name }) => {
    return (
        <h2 className="scroll-m-20 text-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {name}
        </h2>
    );
};
