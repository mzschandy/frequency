import React, {useState, useEffect} from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby"
//import Layout from "../../layout/layout.component"
import HomeProfile from "../../components/profiles/home-profile/home-profile.component"
import EpisodesList from "../../components/episodes-list/episodes-list.component"

import Container from "react-bootstrap/Container"
import config from "../../../data/SiteConfig"
import "./main.scss"
import Player from "../../components/player/player.component"
import PlayerContext from "../../components/player/player.context"

const Home = ({data}) => {
    const episodes = data.allMarkdownRemark.edges
    /*
    const [audio, setAudio] = useState()
    const playAudio = (event, data) => {
      event.preventDefault()
      console.log("audio data" , data)
      setAudio(data);
    }
    const audioFolderPath = "/audio/"
    console.log("audio path", audioFolderPath + audio)
    */

    return (
        <div>
          <Helmet>
            <title>{config.siteTitle}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          </Helmet>
          <Container>
            <HomeProfile/>
            <EpisodesList episodes={episodes} />
          </Container>
          {/*<Player mp3={audioFolderPath + audio} /> */}
        </div>
    )
}

export default Home

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            audioPath
            shortDescription
            episodeNumber
            audioPath
            showLength
          }
        }
      }
    }
  }
`;