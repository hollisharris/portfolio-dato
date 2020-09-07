import React from "react"
import Img from 'gatsby-image'

const Columns = ({media, desktop, mobile}) => {
   
    const makeClasses = (columnNumber) => {
        if(columnNumber === 3) {
            return 4
        } else if (columnNumber === 2) {
            return 6
        } else {
            return 12
        }
    }

    const makeColumns = media.map((media, index) => {
        if(media.isImage) {
            return (
                <div key={index} className={`media-column col-xs-${makeClasses(mobile)} col-md-${makeClasses(desktop)}`}>
                    <figure>
                        <Img fluid={media.fluid} alt={media.alt} />
                        {media.title && <figcaption className="text-xs text-light">{media.title}</figcaption>}
                    </figure>
                </div>
            )
        } else if(media.video) {
            return (
                <div key={index} className={`media-column col-xs-${makeClasses(mobile)} col-md-${makeClasses(desktop)}`}>
                    <figure>
                        <video muted autoPlay loop poster={media.video.thumbnailUrl} title={media.title}>
                            <source src={media.video.mp4Url} type="video/mp4" />
                        </video>
                        {media.title && <figcaption className="text-xs text-light">{media.title}</figcaption>}
                    </figure>
                </div>
            )
        } else {
            return null
        }
    })
    return (
        <section className="media-columns">
            <div className="container">
                <div className="row center-xs">
                    {makeColumns}
                </div>
            </div>
        </section>
    )
}

export default Columns
