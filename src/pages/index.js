import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Качественная и быстрая штукатурка стен и потолков по выгодной цене" />
      <Helmet>
        <meta
          name="description"
          content="Штукатурка стен и потолков по новой технологии в Москве и области. Качественный состав."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h2>Механизированная</h2>
          <h1><strong>Штукатурка стен и потолков</strong></h1>
          <p> Гипсовой смесью в Москве и области c гарантией!
              <br />
              Штукатурка стен от 350 руб/м²
              <br />
              Штукатурка потолков от 450 руб/м²
          </p>
          
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Что входит в пакет "Всё включено"</h2>
          </div>
          {markdown.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p><a href={edge.node.frontmatter.path}>{edge.node.excerpt}</a></p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
