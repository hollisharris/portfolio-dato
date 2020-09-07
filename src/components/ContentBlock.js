import React from "react"
import ReactHtmlParser from 'react-html-parser';
import Img from 'gatsby-image'

const ContentBlock = ({split, sticky, teaser, media, contentPosition, content}) => {
    const isSplit = split || false
    const isSticky = sticky || false
    let position = 'start-xs'

    if(contentPosition === 'left') {
        position = 'start-xs'
    } else if (contentPosition === 'right') {
        position = 'end-xs'
    } else {
        position = 'center-xs'
    }

    const mediaList = media.map((media, index) => {
        if(media.isImage) {
            return (
                <figure key={index}>
                    <Img fluid={media.fluid} alt={media.alt} />
                    {media.title && <figcaption className="text-xs text-light">{media.title}</figcaption>}
                </figure>
            )
        } else if(media.video) {
            return (
                <figure key={index}>
                    <video muted autoPlay loop poster={media.video.thumbnailUrl} title={media.title}>
                        <source src={media.video.mp4Url} type="video/mp4" />
                    </video>
                    {media.title && <figcaption className="text-xs text-light">{media.title}</figcaption>}
                </figure>
            )
        } else {
            return null
        }
    })

    if(isSplit) {
        return (
            <section className="content-block split">
                <div className="container">
                    <div className={`row ${position}`}>
                        {teaser &&
                            <div className="col-xs-12 col-sm-6 col-md-2">
                                <h2 className="text-teaser">{teaser}</h2>
                            </div>
                        }
                        {content &&
                            <div className="content-container col-xs-12 col-sm-6 col-md-6 col-lg-offset-1">
                                {ReactHtmlParser(content)}
                            </div>
                        }
                        {mediaList.length > 0 &&
                            <div className="media-container col-xs-12">
                                {mediaList}
                            </div>
                        }
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className={`content-block ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className={`row ${isSticky || (mediaList.length > 0 && position !== 'center-xs') ? 'between-xs' : ''} ${position} `}>
                        <div className={`content-container col-xs-12 col-md-10 ${position === 'start-xs' ? 'first-xs' : 'last-xs'} ${isSticky || (mediaList.length > 0 && position !== 'center-xs') ? 'col-lg-5' : 'col-lg-6'}`}>
                            {teaser && <h2 className="text-teaser">{teaser}</h2>}
                            {content && ReactHtmlParser(content) }
                        </div>
                        {mediaList.length > 0 && 
                            <div className={`media-container ${position !== 'center-xs' ? 'col-xs-12 col-lg-6' : 'col-xs-12'} ${position !== 'end-xs' ? 'last-xs' : 'first-xs'}`}>
                                {mediaList}
                            </div>
                        }
                    </div>
                </div>
            </section>
        )
    }
    
}

export default ContentBlock
