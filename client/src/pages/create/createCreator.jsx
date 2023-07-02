import {Form , Button, Container, Row, Col, Nav} from 'react-bootstrap'
import React, { useState } from 'react'
import Banner from '../../assets/banner.png'
import { supabase } from './../../Client'
import { useNavigate } from 'react-router-dom'
import './createCreator.css'
export default function CreateCreator(){
    const navigate = useNavigate()
    const [newCreator, setNewCreator] = useState({
        name: '',
        title: '',
        description: '',
        profile_img: '',
        youtube_url: '',
        instagram_url: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewCreator(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    const createCreator = async (e) => {
        e.preventDefault();

             await supabase
            .from('creators')
            .insert([
                {
                    name: newCreator.name,
                    title: newCreator.title,
                    description: newCreator.description,
                    profile_img: newCreator.profile_img,
                    youtube_url: newCreator.youtube_url,
                    instagram_url: newCreator.instagram_url
                }
            ])
            .select()
        alert('New Creator Added!')
        navigate('/')
    }


    return(
        <>
        <img src={Banner} alt="banner" className='banner' />
        <div className='create-creator'>
            <Form onSubmit={createCreator}>
                <Container className='mt-4'>
                    <Row className='mt-1'>
                        <Col lg={6}className='mt-5'>
                        <h1>Add a New Creator</h1>
                        <br></br>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                
                                <Form.Control type="text" placeholder="Enter name" name='name' value={newCreator.name} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" name='title' value={newCreator.title} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter description" name='description' value={newCreator.description} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Profile Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter profile image url (include 'https://')" name='profile_img' value={newCreator.profile_img} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Youtube URL</Form.Label>
                                <Form.Control type="text" placeholder="Enter youtube url" name='youtube_url' value={newCreator.youtube_url} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Instagram URL</Form.Label>
                                <Form.Control type="text" placeholder="Enter instagram url" name='instagram_url' value={newCreator.instagram_url} onChange={handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={createCreator}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>


        </>
        
    )
}