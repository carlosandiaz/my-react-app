import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <div>
      <div className="Hero">
       <div className="HeroGroup">
          <h1>React for Designers</h1>
          <p>Learn how to build a modern site using React and the most efficient libraries to get your
          site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data 
          with Contentful and deploying your site with Netlify.</p>
          <Link to="/page-2/">Watch the video</Link>
       </div>
      </div>
    </div>
      

)

export default IndexPage
