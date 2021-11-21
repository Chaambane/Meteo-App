import React from 'react';

const title = (props) => {
    const styleTitle = `text-center text-white rounded p-2 fw-bold w-50`;
    return(
        <div className="title">
            <h1 className={styleTitle}>
                {props.children}
            </h1>
        </div>
    )
};

export default title;