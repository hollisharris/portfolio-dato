import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'


const WorksMosaic = ({headline, works}) => {

    if(!works) return null

    const sizes = [
        "col-md-4 landscape-small",
        "col-md-4 portrait-large",
        "col-md-3 portrait-small",
        "col-md-6 landscape-large"
    ]

    const workList = works.map((work,index) => {
        const   teaser      = work.teaser,
                headline    = work.shortDescription,
                fullSlug    = work.slug,
                thumbnail  = work.thumbnail;
    
        let counter;
        if(sizes[index]) {
          counter = index
        } else {
          counter = 0
        }
    
        return (
            <div className={`work-item col-xs-12 col-sm-6 ${sizes[counter]}`} key={index}>
                <Link to={`/works/${fullSlug}`}>
                    {thumbnail &&
                        <div className="thumbnail">
                            <Img fluid={thumbnail.fluid} alt={thumbnail.alt} key={thumbnail.filename}/>
                        </div>
                    }
                    <div className="work-item-content">
                        <p className="text-reg"><strong>{headline}</strong></p>
                        <h3 className="text-sm text-light">{teaser}</h3>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <section className="works-mosaic">
            <div className="container">
                {headline && <div className="row">
                    <div className="col-xs-12 col-sm-3">
                        <h2>{headline}</h2>
                    </div>
                </div>}
                <div className="mosaic-grid row">
                    {workList}
                </div>
            </div>
        </section>
    )
}

export default WorksMosaic
