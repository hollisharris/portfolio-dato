import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
  const { datoCmsGlobal } = useStaticQuery(query);
  const [menuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menuOpen)
  }

  const links = datoCmsGlobal.navigation.map(item => {
    return <Link partiallyActive={true} activeClassName="active" to={`/${item.slug}`} key={item.slug}>{item.navigationText}</Link>
  })

  return (
    <header>
      <nav className="row middle-xs">
        <div className="col-xs col-sm start-xs brand">
          <h1>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.78 87.62"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M40,15.81V0A43.88,43.88,0,0,0,24,4.62V15.81Z"/><path d="M48,71.81V87.62A43.69,43.69,0,0,0,64,83V71.81Z"/><path d="M64,39.81V4.62A43.88,43.88,0,0,0,48,0V23.81H16V9.87a44,44,0,0,0,0,67.88V39.81Z"/><path d="M72,9.87V47.81H24V83a43.69,43.69,0,0,0,16,4.62V63.81H72V77.75A44,44,0,0,0,72,9.87Z"/><path d="M160.3,47.25V71.81h-12V49c0-5-3.12-7.28-7-7.28-4.4,0-7.44,2.56-7.44,8.24V71.81h-12v-56h12V35.57c2.16-3,6.16-4.88,11.44-4.88C153.42,30.69,160.3,36.45,160.3,47.25Z"/><path d="M163.34,51.81a21.2,21.2,0,1,1,21.2,21.12A21,21,0,0,1,163.34,51.81Zm30.4,0c0-5.68-4-9.44-9.2-9.44s-9.2,3.76-9.2,9.44,4,9.44,9.2,9.44S193.74,57.49,193.74,51.81Z"/><path d="M209.34,15.72h12V71.81h-12Z"/><path d="M226.94,15.72h12V71.81h-12Z"/><path d="M243.34,21.09a7.2,7.2,0,1,1,7.2,7.2A7.27,7.27,0,0,1,243.34,21.09Zm1.2,10.72h12v40h-12Z"/><path d="M292.78,59.81c0,9.2-8,13.12-16.64,13.12-8,0-14.08-3-17.2-9.52l10.4-5.92c1,3,3.28,4.72,6.8,4.72,2.88,0,4.32-.88,4.32-2.48,0-4.4-19.68-2.08-19.68-15.92,0-8.72,7.36-13.12,15.68-13.12,6.48,0,12.24,2.88,15.6,8.56l-10.24,5.52c-1.12-2.08-2.72-3.52-5.36-3.52-2.08,0-3.36.8-3.36,2.24C273.1,48.05,292.78,45,292.78,59.81Z"/></g></g></svg>
            </Link>
          </h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>{menuOpen ? 'Close' : 'Menu'}</button>
        <menu className={`${menuOpen ? 'open' : 'close'} col-xs-12 col-md end-xs`}>
          {links}
        </menu>
      </nav>
    </header>
  )
}

export default Header

const query = graphql`
  query Global {
    datoCmsGlobal {
      navigation {
        ... on DatoCmsContact {
          navigationText
          slug
        }
        ... on DatoCmsLanding {
          navigationText
          slug
        }
      }
      logo {
        url
        alt
      }
    }
  }
`