import React from 'react';

export function Discovery(props) {
    return (
        <div className="absolute flex top-0 w-full p-2 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-80 z-10"
            style={{backgroundImage:'url(/img/network.jpg)'}}>
            <div className="absolute flex top-0 col-sm-5 p-2 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-100 z-10">
                <p style={{color:'yellow', fontSize:'30px'}}>Discovery Guides</p>
            </div>
            <div className="absolute flex top-0 col-sm-5 p-2 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-100 z-10">
                <p style={{color:'white'}}>{props.text}</p>
            </div>
        </div>
    );
}

export function QuickStart(props) {
    return (
        <div className="absolute flex top-0 w-full p-2 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-80 z-10"
            style={{backgroundImage:'url(/img/quickstart.jpg)'}}>
            <div className="absolute flex top-0 col-sm-5 p-2 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-100 z-10">
                <p style={{color:'yellow', fontSize:'30px'}}>QuickStart Track</p>
            </div>
            <div className="absolute flex top-0 col-sm-5 p-2 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-100 z-10">
                <p style={{color:'white'}}>{props.text}</p>
            </div>
        </div>
    );
}

export function QuickStartModule(props) {
    return (
        <div className="absolute flex top-0 w-full p-2 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-80 z-10"
            style={{backgroundImage:'url(/img/quickstart.jpg)'}}>
            <div className="absolute flex top-0 col-sm-5 p-2 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-100 z-10">
                <p style={{color:'yellow', fontSize:'30px'}}>QuickStart Module</p>
            </div>
            <div className="absolute flex top-0 col-sm-5 p-2 h-416 md:h-400 lg:h-424 xl:h-352 mt-136 bg-no-repeat bg-right-bottom bg-height-fit sm:opacity-100 opacity-100 z-10">
                <p style={{color:'white'}}>{props.text}</p>
            </div>
        </div>
    );
}

export function InDepth(props) {
    return (
        <a href={props.href} className="m-1 btn btn-outline-primary">In-Depth Information</a>
    );
}

export function Tutorial(props) {
    return (
        <a href={props.href} className="m-1 btn btn-outline-success">Tutorial: {props.name}</a>
    );
}

export function MoreInfo(props) {
    return (
        <a href={props.href} className="m-1 btn btn-outline-primary">More Information</a>
    );
}

