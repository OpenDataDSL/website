import React from 'react';

export function Discovery(props) {
    return (
        <div className="absolute flex top-0 w-50 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-80 z-10">
            <hr />
            <font color='grey'>{props.text}</font>
            <hr />
        </div>
    );
}

export function InDepth(props) {
    return (
        <a href={props.href} className="btn btn-outline-primary">In-Depth Information</a>
    );
}