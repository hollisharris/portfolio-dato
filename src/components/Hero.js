import React from "react"

const Hero = ({teaser, headline, shortDescription, className, short}) => {
    return (
        <section className={`hero ${className} ${short ? 'short' : 'tall'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-9">
                        {teaser && headline && <p className="text-teaser">{teaser}</p>}
                        <h1 className={teaser && !headline ? 'text-teaser' : ''}>
                            {teaser && !headline ? teaser : headline}
                        </h1>
                    </div>
                    {shortDescription && 
                        <div className="col-xs-12 col-lg-3">
                            <p>{shortDescription}</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero
