import React from 'react'
import Link from 'gatsby-link'

const About = () => (
  <div>
  <div className='inner'>
    <div className='about-image'>
    </div>
    <div className='about-prose'>
      <h1>Cheers!</h1>
      <p>I'm a designer living in Washington, D.C.</p>
      <p>I believe research is the foundation to all good design. I’m interested in solving problems that lead to meaningful products and tools.</p>
      <p>I currently do everything from user research to front-end development at <a className='link--primary' href='https://developmentseed.org/'>Development Seed. </a>Before this, I spent my days at National Geographic working on digital platforms. </p>
      <p>I enjoy good stories, old maps and large cups of tea.</p>
      <p>When I'm not designing, I moonlight as a <a className='link--primary' href='http://ahsgardening.org/gardening-resources/master-gardeners'>master gardener.</a></p>
      <section className='index-footer'>
        <h2> Let's Chat.</h2>
        <ul className='contact-list'>
          <li className='contact-list-item'><a className='link--primary' href='https://twitter.com/ascalamogna' target='_blank'>Twitter</a></li>
          <li className='contact-list-item'><a className='link--primary' href='https://github.com/ascalamogna' target='_blank'>Github</a></li>
          <li className='contact-list-item'><a className='link--primary' href='mailto:anna.scalamogna@gmail.com' target='_blank'>Email</a></li>
        </ul>
      </section>
    </div>
  </div>
  </div>
)

export default About
