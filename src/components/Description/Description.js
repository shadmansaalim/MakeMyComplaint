import React from 'react';

const Description = ({ info }) => {
    const { title, content } = info;
    return (
        <div className="mb-4">
            <h4 className="text-start fw-bold">{title}</h4>
            <p className="ms-3">{content}</p>
        </div>
    );
};

export default Description;