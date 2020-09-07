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
              <img src={'/logo-light.svg'} alt='Hollis Harris' />
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