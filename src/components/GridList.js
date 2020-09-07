import React from "react"

const GridList = ({headline, darkBg, list}) => {
    const columns = list.map((item, index) => {
        return (
            <div className="col-xs-12 col-lg-6 column-item" key={index}>
                <h3 className="text-reg">
                    <span className="text-light">{`0${index+1}`}</span>
                    <strong>{item.headline}</strong>
                </h3>
                <p>{item.description}</p>
            </div>
        )
    })
    return (
        <section className={`grid-list ${darkBg ? 'bg-dark' : ''}`}>
            <div className="container">
                <div className="row end-xs">
                    <div className="col-xs-12 col-lg-3">
                        <h2>{headline}</h2>
                    </div>
                    <div className="col-xs-12 col-lg-9">
                        <div>
                            <div className="row between-xs">
                                {columns}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GridList
