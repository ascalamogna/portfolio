import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'


const IndexPage = () => (

  <div>
    <div className='index-header__container'>
      <header className='index-header'>
        <div className='inner'>
         <Header/>
          <div className='index-header__content'>
            <h1 className='header-title'>Hi, I'm Anna.</h1>
            <h2 className='header-description'>I’m a <span className='highlight'>designer</span> in Washington, D.C. powered by <span className='highlight'>tea</span>, inspired by <span className='highlight'>nature</span> and driven by <span className='highlight'>users.</span></h2>
          </div>
        </div>
      </header>
    </div>
    <section className='index-body'>
        <div className='projects-list__container'>
          <ul className='project-list'>

            <li className='project-list__item'>
              <Link to={'/openaq'} className='project-container openaq'>
              <span className='project-container-span'></span>
                <div className='inner'> 
                  <div className='inner-project-container'>
                    <div className='project-info'>
                      <div className='project-number-container'>
                        <p className='project-number'>01</p>
                      </div>
                      <div className='project-title-container'>
                       <h2 className='project-title'>Fighting Air Inequality</h2>
                       <p className='project-description'>User Research, UX Design, Visual Design, HTML/CSS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li className='project-list__item'>
              <Link to={'/ifrc'} className='project-container ifrc'>
              <span className='project-container-span'></span>
                <div className='inner'> 
                  <div className='inner-project-container'>
                    <div className='project-info'>
                      <div className='project-number-container'>
                        <p className='project-number'>02</p>
                      </div>
                      <div className='project-title-container'>
                       <h2 className='project-title'>Disaster Response Management</h2>
                       <p className='project-description'>User Research, UX Design, Visual Design, HTML/CSS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li className='project-list__item'>
              <Link to={'/civicdr'} className='project-container civicdr'>
              <span className='project-container-span'></span>
                <div className='inner'> 
                  <div className='inner-project-container'>
                    <div className='project-info'>
                      <div className='project-number-container'>
                        <p className='project-number'>03</p>
                      </div>
                      <div className='project-title-container'>
                       <h2 className='project-title'>Solving Cyber Threats</h2>
                       <p className='project-description'>UX Design, Visual Design, HTML/CSS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li className='project-list__item'>
              <Link to={'/greenhouse'} className='project-container greenhouse'>
              <span className='project-container-span'></span>
                <div className='inner'> 
                  <div className='inner-project-container'>
                    <div className='project-info'>
                      <div className='project-number-container'>
                        <p className='project-number'>04</p>
                      </div>
                      <div className='project-title-container'>
                       <h2 className='project-title'>The Greenhouse</h2>
                       <p className='project-description'>UX Design, Visual Design, HTML/CSS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li className='project-list__item'>
              <Link to={'/disaster-mapping'} className='project-container facebook'>
              <span className='project-container-span'></span>
                <div className='inner'> 
                  <div className='inner-project-container'>
                    <div className='project-info'>
                      <div className='project-number-container'>
                        <p className='project-number'>05</p>
                      </div>
                      <div className='project-title-container'>
                       <h2 className='project-title'>Disaster Data Mapping</h2>
                       <p className='project-description'>UX Design, Visual Design, HTML/CSS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

          <li className='project-list__item'>
              <Link to={'/mapping-egypt'} className='project-container egypt'>
              <span className='project-container-span'></span>
                <div className='inner'> 
                  <div className='inner-project-container'>
                    <div className='project-info'>
                      <div className='project-number-container'>
                        <p className='project-number'>06</p>
                      </div>
                      <div className='project-title-container'>
                       <h2 className='project-title'>Mapping Egypt</h2>
                       <p className='project-description'>Visual Design, HTML/CSS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

          </ul>
        </div>
    </section>

    <div className='index-footer__container'>
      <section className='index-footer'>
        <div className='index-footer__content'>
          <div className='inner'>
          <h1> Let's Chat.</h1>
          <ul className='contact-list'>
            <li className='contact-list-item'><a className='link--primary' href='https://twitter.com/ascalamogna' target='_blank'>Twitter</a></li>
            <li className='contact-list-item'><a className='link--primary' href='https://github.com/ascalamogna' target='_blank'>Github</a></li>
            <li className='contact-list-item'><a className='link--primary' href='mailto:anna.scalamogna@gmail.com' target='_blank'>Email</a></li>
          </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default IndexPage
