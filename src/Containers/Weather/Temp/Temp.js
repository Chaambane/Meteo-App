import React from 'react';
import DetailsTemp from './DetailsTemp/DetailsTemp';

const temp = (props) => (
    <>
        <div className="container title temp border rounded-3 w-25">
            <div className="text-center">
                <h2 className="fw-bold lh-lg">Perpignan</h2>
                <h3 className="fw-bold fs-1">32°</h3>
                <div className="p-2">
                    <p>Desciption</p>
                    <div>Image</div>
                </div>
            </div>
        </div>
        <DetailsTemp/>
    </>
);

export default temp;