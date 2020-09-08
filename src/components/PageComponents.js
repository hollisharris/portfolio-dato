import React from "react"

import ContentBlock from "./ContentBlock"
import WorksMosaic from "./WorksMosaic"
import CtaBlock from "./CtaBlock"
import GridList from "./GridList"
import Columns from "./Columns"

const PageComponents = ({components}) => {
    
    if(!components) return null

    return (
       components.map(component => {
            if(component.model) {
              switch(component.model.name) {
                case 'Content Block':
                    return <ContentBlock
                            split={component.splitContent}
                            teaser={component.teaser}
                            content={component.content}
                            sticky={component.sticky}
                            contentPosition={component.contentPosition}
                            media={component.media}
                            key={component.id}
                            />
                case 'Featured Work':
                    return <WorksMosaic
                            headline={component.headline}
                            works={component.work}
                            key={component.id}
                            />
                case 'Grid List':
                    return <GridList
                            headline={component.headline}
                            darkBg={component.darkBackground}
                            list={component.listing}
                            key={component.id}
                            />
                case 'Media Column':
                    return  <Columns
                            media={component.media}
                            desktop={component.desktop}
                            mobile={component.mobile}
                            key={component.id}
                            />
                case 'CTA Block':
                    return <CtaBlock
                            teaser={component.teaser}
                            headline={component.headline}
                            description={component.description}
                            link={component.link}
                            key={component.id}
                            />
                default:
                  return null;
              }
            } else {
              return null;
            }
            
          })
    )
}

export default PageComponents
