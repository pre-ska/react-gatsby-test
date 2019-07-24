import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticData from '../../staticData.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const tiles = [
  {
    title: 'Design System',
    text: '10 sections',
    image: require('../images/wallpaper.jpg'),
  },
  {
    title: 'React for Designers',
    text: '12 sections',
    image: require('../images/wallpaper2.jpg'),
  },
  {
    title: 'Sound Design',
    text: '5 sections',
    image: require('../images/wallpaper3.jpg'),
  },
  {
    title: 'ARKit 2',
    text: '10 sections',
    image: require('../images/wallpaper4.jpg'),
  },
  {
    title: 'Designsdasda System',
    text: '10 sections',
    image: require('../images/wallpaper.jpg'),
  },
]

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to
          <br /> design and code React app
        </h1>
        <p>
          Gatsby site sa Reactom <br />i sve ostale fore i trikovi bla bla bla
        </p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" alt="" />
          <img src={require('../images/logo-figma.png')} width="50" alt="" />
          <img src={require('../images/logo-studio.png')} width="50" alt="" />
          <img src={require('../images/logo-framer.png')} width="50" alt="" />
          <img src={require('../images/logo-react.png')} width="50" alt="" />
          <img src={require('../images/logo-swift.png')} width="50" alt="" />
        </div>
      </div>
      <Wave />
    </div>
    <div className="Cards">
      <h2>11 curses more coming</h2>
      <div className="CardGroup">
        {tiles.map((tile, i) => (
          <Card
            key={i}
            title={tile.title}
            text={tile.text}
            image={tile.image}
          />
        ))}
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify"
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticData.cells.map((cell, i) => (
        <Cell key={i} title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
