import React, {useState, ChangeEvent} from 'react'

import { School } from './Register.types';
import {Link} from 'react-router-dom';

interface Props {
    onChange: (school: School) => void
}

const SchoolInfo = ({onChange}: Props) => {
    const [info, updateInfo] = useState<School>({});
    
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
                    School Information
                </div>

                <div className="f4 tertiary-text">
                    Provide all the required information regarding contestant school
                </div>
            </header>

            <div className="form-box">
                <div className="form-group">

                    <div className="form-element">
                        <div className="fe-stack">
                            <label >School Name</label>
                            <input type="text" onChange = {onInputChange} name="name" id="" />
                        </div>
                        <div className="fe-stack">
                            <label >Class/Grade</label>
                            <input type="text" onChange = {onInputChange}  name="grade" id="" />
                        </div>
                    </div>
                    
                    <div className="form-element">
                        <div className="fe-stack">
                            <label >School Address</label>
                            <input type="text" onChange = {onInputChange}  name="address" id="" />
                        </div>
                       
                    </div>
                    
                    <div className="form-element">
                        <div className="fe-stack">
                            <label >City</label>
                            <input type="text" onChange = {onInputChange}  name="city" id="" />
                        </div>
                        <div className="fe-stack">
                            <label >State</label>
                            <input type="text" onChange = {onInputChange}  name="state" id="" />
                        </div>
                    </div>
                    
                   


                </div>
            </div>

            <footer className="align-end">
                <div className="full-width flex mt-10">
                    <Link to = "/register/guardian" type = "button" className = "btn btn-medium secondary-bg primary-text br-2 f5 cursor-pointer no-decoration">
                        Next
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default SchoolInfo;
