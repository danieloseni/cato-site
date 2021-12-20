import React, {ChangeEvent, useState} from 'react'
import { Participant } from './Register.types';
import {Link} from 'react-router-dom';
interface Props {
    onChange: (participant: Participant) => void
}

const ParticipantInfo = ({onChange}: Props) => {
    const [info, updateInfo] = useState<Participant>({});
    
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newInfo = {
            ...info,
            [e.target.name]: e.target.value
        }
        updateInfo(newInfo);
        onChange(newInfo);
    }

    return (
        

            <div className="form-box">
                <div className="form-group">

                    <div className="form-element">
                        <div className="fe-stack">
                            <label >Firstname</label>
                            <input type="text" onChange = {onInputChange} name="firstname" id="" />
                        </div>
                        <div className="fe-stack">
                            <label >Lastname</label>
                            <input type="text" name="lastname"  id="" onChange = {onInputChange} />
                        </div>
                    </div>
                    
                    <div className="form-element">
                        <div className="fe-stack">
                            <label >Email</label>
                            <input type="text" name="email" id="" onChange = {onInputChange} />
                        </div>
                        <div className="fe-stack">
                            <label >Phone Number</label>
                            <input type="text" name="phone" id="" onChange = {onInputChange} />
                        </div>
                    </div>
                    
                    <div className="form-element">
                        <div className="fe-stack">
                            <label >Date of Birth</label>
                            <input type="text" name="dob" id="" onChange = {onInputChange} />
                        </div>
                        <div className="fe-stack">
                            <label >Address</label>
                            <input type="text" name="address" onChange = {onInputChange} id="" />
                        </div>
                    </div>
                    
                    <div className="form-element">
                        <div className="fe-stack">
                            <label >City</label>
                            <input type="text" name="city" id="" onChange = {onInputChange} />
                        </div>
                        <div className="fe-stack">
                            <label >State</label>
                            <input type="text" name="state" id="" onChange = {onInputChange} />
                        </div>
                    </div>


                </div>
            </div>

            
    )
}

export default ParticipantInfo;