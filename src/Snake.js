import React from 'react'

export default function Snake (props) {
    
    
    return (
        <div>
            {props.segments.map((segment, i) => {
                console.log(segment);
                return (<div className="segment" key={i} style={{left: segment[0]*2+"%", top: segment[1]*2+"%"}}></div>);
            })}
        </div>
    );
}