import React, { useState } from "react";
import './Modal.css';
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();
  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();

  return (
    <div className='modal__container'>
      <div className='darkBG' onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h5 className='heading'>ĐẶT SÂN</h5>
          </div>
          <button className='closeBtn' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className='modalContent'>
            Khung giờ:
            <ul className="listTime">
              <li>Từ 06h00 - 16h00: 200.000đ</li>
              <li>Từ 17h30 - 19h00: 350.000đ</li>
            </ul>
          </div>
          <h3 className="findYard">Tìm sân trống:</h3>
          <div className='bookYard'>
            <div className='bookYard_from'>
              <div className="bookYard_title"><p>Từ</p></div>
              <div className="bookYard_from_detail">
              <input 
                className="datePicker" 
                type="date" 
                onChange={e=>setDate1(e.target.value)} 
                format="YYYY-MM-DD"
                value={date1}/>
              <input 
                className="timePicker" 
                type="time" 
                onChange={e=>setTime1(e.target.value)} 
                format="hh:mm"
                value={time1}/>
              </div>
            </div>
            <div className='bookYard_to'>
            <div className="bookYard_title"><p>Đến</p></div>
              <div className="bookYard_to_detail">
                <input 
                className="datePicker" 
                type="date" 
                onChange={e=>setDate2(e.target.value)} 
                format="YYYY-MM-DD"
                value={date2}/>
              <input 
                  className="timePicker" 
                  type="time" 
                  onChange={e=>setTime2(e.target.value)} 
                  format="hh:mm"
                  value={time2}/>
              </div>
            </div>
          </div>
          <div className='modalActions'>
            <div className='actionsContainer'>
              <button className='deleteBtn' onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className={'cancelBtn'}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;