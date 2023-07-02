import {Card, Button} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import {Link } from 'react-router-dom'
import InfoIcon from '../assets/info-icon.png'
import './creatorCard.css'
export default function CreatorCard({id, title, name, description, profile_img, youtube_url, instagram_url}) {
const [showMore, setShowMore] = useState(false)

    return(
        <>
        <div className='card'>
        <Card style={{ width: '100%', backgroundColor: 'black',color:'white'}}
        >
            <Card.Img variant="top" src={profile_img} />
            <Card.Body>
                {title} <Link to={'/read/' + id} className='edit-icon' style={{textDecoration: 'none'}}>
                <img src={InfoIcon} alt="info-icon" className='info-icon' style={{width: '20px', height: '20px'}}/></Link> 
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {showMore ? description : `${description.substring(0, 100)}...`}
                    <span onClick={() => setShowMore(!showMore)} className='show-more'>
                        {showMore ? ' Show Less' : ' Show More'}
                    </span>
                </Card.Text>
                <SocialIcon url={youtube_url} className='social-icon' />
                <SocialIcon url={instagram_url} className='social-icon' />

            </Card.Body>
        </Card>
        </div>
        </>
    )
}
