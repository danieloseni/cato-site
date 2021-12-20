import React, {ChangeEvent, useState} from 'react'
import {Link} from 'react-router-dom';
import { Guardian } from './Register.types';

interface Props {
    onChange: (guardian: Guardian) => void,
    onDone: () => void
}

const GuardianInfo = ({onChange}: Props) => {
    const [info, updateInfo] = useState<Guardian>({});
    
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newInfo = {
            ...info,
            [e.target.name]: e.target.value
        }
        updateInfo(newInfo);
        onChange(newInfo);
    }
    return (
        <div className="container primary-bg full-height registration-box  white-text">
            <header>
                <div className="f8">
                    Parent/Guardian Information
                </div>

                <div className="f4 tertiary-text">
                    Provide all the required information regarding parents, guardians or chaperones 
                </div>
            </header>

            <div className="form-box">
                <div className="form-group">

                    <div className="form-element">
                        <div className="fe-stack">
                            <label >Firstname</label>
                            <input type="text" onChange = {onInputChange} name="firstname" id="" />
                        </div>
                        <div className="fe-stack">
                            <label >Lastname</label>
                            <input type="text" onChange = {onInputChange} name="lastname" id="" />
                        </div>
                    </div>
                    
                    <div className="form-element">
                        <div className="fe-stack">
                            <label >Email</label>
                            <input type="text" onChange = {onInputChange} name="email" id="" />
                        </div>
                        <div className="fe-stack">
                            <label >Phone Number</label>
                            <input type="text" onChange = {onInputChange} name="phone" id="" />
                        </div>
                    </div>
                    
                    <div className="form-element">
                        <div className="fe-stack">
                            <label >Address</label>
                            <input type="text" onChange = {onInputChange} name="address" id="" />
                        </div>
                        <div className="fe-stack">
                            <label >City</label>
                            <input type="text" onChange = {onInputChange} name="city" id="" />
                        </div>
                    </div>
                    
                    <div className="form-element">
                        <div className="fe-stack">
                            <label >State</label>
                            <input type="text" onChange = {onInputChange} name="state" id="" />
                        </div>
                        <div className="fe-stack">
                            <label >Country</label>
                            <input type="text" onChange = {onInputChange} name="country" id="" />
                        </div>
                    </div>

                    <div className="form-element">
                        <div className="fe-stack">
                            <label >Relationship</label>
                            <input type="text" onChange = {onInputChange} name="relationship" id="" />
                        </div>
                    </div>

                </div>
            </div>

            <footer className="align-end">
                <div className="full-width flex mt-10">
                    <Link to = "/register/school" type = "button" className = "btn btn-medium secondary-bg primary-text br-2 f5 cursor-pointer no-decoration">
                        Done
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default GuardianInfo;
