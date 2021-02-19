/* eslint-disable react/jsx-filename-extension */
import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {Link} from "gatsby"

import "./episodes.scss"

export default function EpisodesList({episodes}) {
    const episodeList = []
    episodes.forEach((episode) => {
        episodeList.push({
            path: episode.node.fields.slug,
            title: episode.node.frontmatter.title,
            date: episode.node.fields.data,
            exerpt: episode.node.excerpt,
            timeToRead: episode.node.timeToRead,
        })
    })
    return (
        <div className="episodes-list">
            <div className="list-header sticky-top">All Episodes</div>
            {
                episodeList.map((episode) => (
                        <Row className="episode">
                            <Col xs={1} md={1} className="play-button">
                                <span className="fa fa-play-circle"></span>
                            </Col>
                            <Link to={episode.path} key={episode.title} className="col-12 col-md-11 episode-info">
                                <div className="data d-none d-md-flex">
                                    <div className="date">{episode.date}</div>
                                    <div className="length">2:05:00</div>
                                </div>
                                <div className="title">{episode.title}</div>
                                <div className="description">{episode.excerpt}</div>
                                <div className="mobile-play-button d-sm-block d-md-none">
                                    <div className="btn play-button">
                                        <span className="fa fa-play-circle"></span>
                                        <div className="date">{episode.date}</div>
                                        <div className="length">2:05:00</div>
                                    </div>
                                </div>
                                <hr/>
                            </Link>
                        </Row>
                ))
            }
        </div>
    )
}