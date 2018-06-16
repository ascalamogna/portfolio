import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'
import Header from '../components/header'


export default function Template({
  data
}) {
  const { markdownRemark: post } = data;
  return (
    <div className="blog-post-container">
      <div className='inner'>
        <Header/>
      </div>
      <Helmet title={`${post.frontmatter.title}`} />
      <div className='inpage__header'>
        <div className={post.frontmatter.class}>
          <div className='inner'>
            <h1 className='inpage__title'>{post.frontmatter.title}</h1>
              {post.frontmatter.link !==
          null ? (
            <a className='link--primary' href={post.frontmatter.link}>Visit Site</a>
            ) : (
            <span></span>
            )}
          </div>
        </div>
        <div className={post.frontmatter.color}>
          <div className='inpage__body prose'>
             <div className='inpage-project__info'>
               <div className='inner'>
                 <aside className='project__challenge'>
                   <h3 className='section__label'> Challenge</h3>
                   <p>{post.frontmatter.challenge}</p>
                 </aside>
                 <aside className='project__role'>
                   <h3 className='section__label'> Partner</h3>
                   <p>{post.frontmatter.partner}</p>
                   <h3 className='section__label'> My Role</h3>
                   <p>{post.frontmatter.role}</p>
                 </aside>
               </div>
             </div>
             <section className="project__content">
               <div dangerouslySetInnerHTML={{ __html: post.html }} />
             </section>
          </div>
        </div>
        <div className='next-project light'>
            <div className={post.frontmatter.nextcolor}>
            <Link to={post.frontmatter.nextpath} className='next-project-container'>
            <span className='project-container-span'></span>
              <div className='inner'> 
                <div className='inner-next-project-container'>
                  <div className='project-info'>
                    <p className='next-label'>Next Project</p>
                    <div className='project-number-container'>
                      <p className='project-number'>0{post.frontmatter.nextindex}</p>
                    </div>
                    <div className='project-title-container'>
                     <h2 className='project-title'>{post.frontmatter.nexttitle}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        link
        class
        color
        challenge
        role
        partner
        nexttitle
        nextindex
        nextpath
        nextcolor
      }
    }
  }
`;