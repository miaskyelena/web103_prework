import {Row, Col, Container, Button, Image} from 'react-bootstrap'
import {supabase} from './../../Client'
import { useParams } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import Banner from '../../assets/banner.png'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './readCreator.css'
export default function ReadCreator({allCreators}) {
    let {id} = useParams(); 
    let idNum = parseInt(id) 
    const getCreator = allCreators.filter((item) => item.id === idNum)[0];
    const [editCreator, setEditCreator] = useState(getCreator)
    const [editMode, setEditMode] = useState(false)
    const navigate = useNavigate()

    const deleteCreator = async () => {
        const { data } = await supabase
            .from('creators')
            .delete()
            .eq('id', id)
        alert('Creator Deleted!')
        .reload()
    }

    const updateCreator = async (e) => {
        e.preventDefault();
        const { data } = await supabase
            .from('creators')
            .update({
                name: editCreator.name,
                title: editCreator.title,
                description: editCreator.description,
                profile_img: editCreator.profile_img,
                youtube_url: editCreator.youtube_url,
                instagram_url: editCreator.instagram_url
            })
            .eq('id', id)
        alert('Creator Updated!')
        setEditMode(false)
        navigate('/')



    }

    function handleClick() {
        const navigate = useNavigate()
        navigate('/home')
    }

    useEffect(() => {
        const fetchCreators = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
            allCreators(data)
        }
        fetchCreators()
    }, [])


    const handleChange = (e) => {
        setEditCreator((prev) =>
            ({
                ...prev,
                [e.target.name]: e.target.value
                })
            )
    }






    return(
        <>
        { getCreator &&
        <div className='read-creator'>
        <img src={Banner} alt="banner" className='banner' />
        <Container className='mt-4 ms-5'>
            <Row md={12} className='mt-1'>
                <Col className='mt-5'>
                    <div className='card-img'>
                        <img src={getCreator.profile_img} rounded className='profile-img'
                        style={{maxWidth: '100%', borderRadius: '10px'}}/>
                    </div>
                </Col>
                <Col className='mt-5 ms-5'>
                    { !editMode ?
                    <div className='card-info'>
                        <h1>{getCreator.name}</h1>
                        <h3>{getCreator.title}</h3>
                        <p>{getCreator.description}</p>
                        <SocialIcon url={getCreator.youtube_url} className='social-icon mt-2' />
                        <SocialIcon url={getCreator.instagram_url} className='social-icon mt-2' />
                        <div className='button-container flex flex-row mt-5 gap-2'>
                            <Button variant="outline-light me-2" className='button' onClick={() => setEditMode(true)}>Edit</Button>
                            <Button variant="outline-light" className='button' onClick={() => deleteCreator()}>Delete</Button>
                        </div>
                    </div>
                    :
                    <form className='card-info' onSubmit={updateCreator}>
                        <h1><input
                            type='text'
                            placeholder={editCreator.name}
                            value = {editCreator.name}
                            name='name'
                            className='input'
                            onChange={handleChange}
                        /></h1>
                        <h3><input
                            type='text'
                            placeholder={editCreator.title}
                            value = {editCreator.title}
                            name='title'
                            className='input'
                            onChange={handleChange}
                        /></h3>
                        <p><textarea
                            type='text'
                            placeholder={editCreator.description}
                            value = {editCreator.description}
                            name='description'
                            onChange={handleChange}
                            className='input'
                            cols='50'
                            rows='5'
                        /></p>
                        <SocialIcon url={getCreator.youtube_url} className='social-icon mt-2' />
                        <SocialIcon url={getCreator.instagram_url} className='social-icon mt-2' />
                        <div className='button-container flex flex-row mt-5 gap-2'>
                            <Button variant="outline-light me-2" className='button' onClick={updateCreator}>Save</Button>
                            <Button variant="outline-light" className='button' onClick={() => setEditMode(false)}>Cancel</Button>
                        </div>
                    </form>
                    }

         

                </Col>
            </Row>
        </Container>
      
        </div>
        }
        </>
      
    )

}