import React, { useEffect, useState } from 'react';
import './Detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal/Modal';
import sanbanh from './Img/sanbong.jpg'
import sanbanh1 from './Img/sanbong2.jpg'
import sanbanh2 from './Img/sanbong3.jpg'

const Thumbnail = ({arr, image, index}) =>{
    return (
        <div className='thumbnail'>
            {arr.map((imgscr, i) => (
                <img
                    key={i}
                    height="50"
                    src={imgscr}
                    onClick={()=>image(i)}
                    className={index === i ? 'active' : ''}
                />
                ))}
        </div>
    )
}
const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        setIndex(0)
    }, [])
    
    const next = () =>{
        if(index === imgs.length - 1)
        {
            setIndex(0);
        }
        else{
            setIndex(index + 1);
        }
    }

    const prev = () =>{
        if(index === 0)
        {
            setIndex(imgs.length - 1);
        }
        else{
            setIndex(index - 1);
        }
    }

    return <div className='slideshow'>
        <img className='mainImg' src={imgs[index]}/>
        <div className='actions'>
            <button onClick={prev}> <FontAwesomeIcon icon={faCaretLeft} size="2x"/> </button>
            <button onClick={next}> <FontAwesomeIcon icon={faCaretRight} size="2x"/> </button>
        </div>
        <Thumbnail arr={imgs} image={setIndex} index={index}/>
    </div>
}

function Detail(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="card">
            <div className="detail">
                <div className="detail__photo">
                    <Slideshow  
                        imgs={[
                            sanbanh,
                            sanbanh1,
                            sanbanh2,
                        ]}
                    />
                </div>
                <div className="detail__description">
                    <h2>S??n banh Th??? ?????c</h2>
                    <h1 className="detail__money">200.000 VN??</h1>
                    <p><strong className="detail__title">Th??ng tin chi ti???t:</strong></p>
                    <p><strong className="detail__title">?????a ch???:</strong> KTX khu B, ??HQG, D?? An, B??nh D????ng</p>
                    <p><strong className="detail__title">S??? ??i???n tho???i:</strong> 0123456790</p>
                    <p><strong className="detail__title">X???p h???ng: &nbsp;</strong> <strong className="rate-star">4.7 <i className="bi bi-star-fill"></i></strong></p>
                    <p><strong className="detail__title">M?? t???: </strong></p>
                    <ul className="list__contact">
                        <li className="list__contact-item">S??n tho??ng m??t s???ch s???</li>
                        <li className="list__contact-item">C?? nh?? v??? sinh</li>
                        <li className="list__contact-item">Cho thu?? ?????, c?? wifi</li>
                    </ul>
                    <div className="detail__view-map">Xem tr??n b???n ????? &nbsp;<i className="bi bi-geo-alt-fill"></i></div>
                    <p className="detail__yard-numb"><strong>C??n 2 s??n ??? ch??? ch??ng t??i</strong></p>
                    <button className="detail__book-btn" onClick={() => setIsOpen(true)}>?????t ngay</button>
                    <button className="detail__favorite-btn">Y??u th??ch &nbsp;<i className="bi bi-heart-fill"></i></button>
                </div>
                <div className="detail__note">
                    <div className="detail__note-distance">500m</div>
                    <div className="detail__note-status">NEW</div>
                </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
    );
}

export default Detail;

