import React from "react"
import { Link } from "gatsby"

const CtaBlock = ({teaser, headline, description, link}) => {
    return (
        <section className="cta-block">
            <div className="container">
                <div className="row center-xs">
                    <div className="col-xs-8">
                        <Link to={`/${link.slug}`}>
                            {teaser && <h2 className="text-teaser">{teaser}</h2>}
                            {headline && <p className="text-xl">{headline}</p>}
                            {description && <p>{description}</p>}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaBlock
