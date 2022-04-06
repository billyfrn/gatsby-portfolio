import * as React from 'react'
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import SEO from "../@lekoarts/gatsby-theme-cara/src/components/seo"
import "./styles.css"

const PortfolioPage = () => {
    return (
    <>
      <Helmet>
        <title>Agency Work</title>
      </Helmet>
      <header>
        <Link to="/" className="brand-color logo-text">
          back to home
        </Link>
      </header>
      <main>
       <title>Agency Portfolio page</title>
       <div class='wrapper'>
        <h1>Agency work</h1>
        <p>hi this is the agency portfolio page</p>
       </div>
      </main>
    </>
    )
}

export default PortfolioPage
