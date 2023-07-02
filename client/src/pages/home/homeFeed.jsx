import { Container, Row, Col } from 'react-bootstrap'
import React, { useState,useEffect} from 'react'
import { supabase } from './../../Client'
import Banner from '../../assets/banner.png'
import Card from '../../components/creatorCard'
import './homeFeed.css'

export default function HomeFeed({allCreators, setAllCreators}){

    useEffect(() => {
        const fetchCreators = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
            setAllCreators(data)
        }
        fetchCreators()
    }, [])


    return(
        <>
        <div>
        <img src={Banner} alt="banner" className='banner' />
        <div className='home-feed'>
        <Container>
            <Row xs={1} md={3} className='mt-1'>
                {allCreators.map((creator, index) => (
                    <Col className='mt-5'>
                        <Card
                            key={index}
                            id={creator.id}
                            name = {creator.name}
                            title={creator.title}
                            description={creator.description}
                            profile_img={creator.profile_img}
                            youtube_url={creator.youtube_url}
                            instagram_url={creator.instagram_url}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
        </div>
        </>

    )
}