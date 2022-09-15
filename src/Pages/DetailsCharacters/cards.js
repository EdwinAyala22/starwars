import React from 'react'

export const Cards = ({title}) => {
    return (
        <>
            <div className="card text-white bg-dark mb-3 mt-3" style={{maxWidth: "18rem"}}>
                <div className="card-header">Films</div>
                <div className="card-body">
                    {/* <h5 className="card-title"></h5> */}
                    <p className="card-text">
                        {title}
                    </p>
                </div>
            </div>
        </>
    )
}
