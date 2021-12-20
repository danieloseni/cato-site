// import React, { useState } from 'react';
// import { nigerianStates } from '../../helpers/Data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes, faInfoCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { PaystackButton } from "react-paystack"
// import Loader from "react-loader-spinner";
// import axios from 'axios';
// const Register = (props) => {
//     const publicKey = "pk_test_809def00550139865d4d7979c0a736e4b7c0c432";

//     const [firstname, setFirstname] = useState("")
//     const [lastname, setLastname] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone, setPhone] = useState("")
//     const [address, setAddress] = useState("")
//     const [city, setCity] = useState("")
//     const [state, setState] = useState("")
//     const [paymentSuccessful, setPaymentSuccessful] = useState(false)
//     const [registering, setRegistering] = useState(false)
//     const [showSuccess, setShowSuccess] = useState(false)

//     const name = firstname + lastname;
//     const amount = 20000 * 100
//     const componentProps = {
//         email,
//         amount,
//         metadata: {
//           name,
//           phone,
//         },
//         publicKey,
//         text: "Next",
//         onSuccess: () => {

//             addDetails()
//         },

//         onClose: () => alert('here')

//       }

//       const addDetails =  () => {


//             setRegistering(true)


//         axios.post(`${window.location.origin}/register`, {
//            firstname,
//            lastname,
//            email,
//            address,
//            city,
//            state,
//            phone
//        }).then(response => {
//            setShowSuccess(true)
//        }).catch(error => {
//            console.log(error)
//        })
//     }


//     return (
//         <div className = "black-modal enroll-modal ">
//             <div className = {showSuccess ? "enroll-box hide" : "enroll-box" }>
//                 <div className = "title">
//                     Enroll
//                     <FontAwesomeIcon className = "close-button" icon = {faTimes} />
//                 </div>

//                 <div>
//                     {/* was a form before  */}
//                     <div className = "form-group">
//                         <div className = "form-element form-element-group">
//                             <input onChange = {(e) => setFirstname(e.target.value)} placeholder = "First Name" type = "text" />
//                             <input onChange = {(e) => setLastname(e.target.value)} placeholder = "Last Name" type = "text" />
//                         </div>
//                         <div className = "form-element">
//                             <input type = "text" onChange = {(e) => setEmail(e.target.value)} placeholder = "Email" />
//                         </div>
//                         <div className = "form-element">
//                             <input type = "text" onChange = {(e) => setPhone(e.target.value)} placeholder = "Phone number" />
//                         </div>
//                         <div className="form-element">
//                             <input type="text" placeholder = "Address" onChange = {(e) => setAddress(e.target.value)} name="" id="" />
//                         </div>
//                         <div className="form-element form-element-group">
//                             <input type="text" name="" id="" placeholder="City" onChange = {(e) => setCity(e.target.value)} />
//                             <input onChange = {(e) => setState(e.target.value)} type="text" name="" id="" placeholder="State" />
//                         </div>
//                     </div>

//                     <div className="info-box">
//                         <div className="icon">
//                             <FontAwesomeIcon icon = {faInfoCircle} />
//                         </div>

//                         <div>
//                             For enrollment to be confirmed, an entry fee of $<span className="fee">5</span> would have to be paid.
//                         </div>
//                     </div>

//                     <div className="align-items-flex-end">
//                         {
//                             !registering ?
//                                 <PaystackButton className = "cta-button mgt-20" {...componentProps} />
//                             :

//                                 <button disabled = {registering} className="cta-button mgt-20 ">
//                                     <Loader  type="ThreeDots" color="#fff"  height={40} width={40}       />
//                                 </button>

//                         }

//                         {/*  */}
//                     </div>
//                 </div>
//             </div>

//             <div  className= {!showSuccess ? "success-modal hide" : "success-modal"}>
//                     <div className="title">
//                         <span className = "back-button" onClick = {() => props.history.push('/')}>
//                             <FontAwesomeIcon icon = {faArrowLeft} /> Back
//                         </span>



//                     </div>
//                 <div className="icon">
//                     <img src = {window.location.origin + '/images/payment_successful.gif'} />
//                 </div>
//                 <div className="message">
//                     You have successfully enrollled. We've sent information concerning the competiton to your mail.
//                 </div>
//             </div>
//          </div>

//     )





// }

// export default Register;
import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom';
import GuardianInfo from './GuardianInfo';
import ParticipantInfo from './ParticipantInfo';
import { Guardian, Participant, School } from './Register.types';
import SchoolInfo from './SchoolInfo';

interface Props {

}

enum Progress { PARTICIPANT, SCHOOL, GUARDIAN }

interface State {
    participant?: Participant
    school?: School
    guardian?: Guardian,
    progress: Progress,

    headings: {
        [Progress.PARTICIPANT]: {
            title: string,
            subtitle: string
        },
        [Progress.SCHOOL]: {
            title: string,
            subtitle: string
        },
        [Progress.GUARDIAN]: {
            title: string,
            subtitle: string
        },
    }
}

export default class Register extends Component<Props, State> {
    state: State = {
        progress: Progress.PARTICIPANT,
        headings: {
            [Progress.PARTICIPANT]: {
                title: "Contestant Information",
                subtitle: "Provide contestant information"
            },
            [Progress.SCHOOL]: {
                title: "School Information",
                subtitle: " Provide all the required information regarding contestant school"
            },
            [Progress.GUARDIAN]: {
                title: "Parent/Guardian Information",
                subtitle: "Provide all the required information regarding parents, guardians or chaperones "
            },
        }
    }

    render() {
        const { headings, progress } = this.state
        return (
            <Fragment>
                <div className="container primary-bg full-height registration-box  white-text">
                    <header>
                        <div className="f8">
                            {headings[progress].title}
                        </div>

                        <div className="f4 tertiary-text">
                            {headings[progress].subtitle}
                        </div>
                    </header>
                    <Routes>

                        <Route path="/participant" element={<ParticipantInfo onChange={this.onParticipantInfoChange} />} />

                        <Route path="/school" element={<SchoolInfo onChange={this.onSchoolInfoChange} />} />

                        <Route path="/guardian" element={<GuardianInfo onChange={this.onGuardianInfoChange} onDone={this.submitDetails} />} />

                    </Routes>

                    <footer className="align-end">
                        <div className="full-width flex mt-10">
                            {/* <Link to = "/register/school" type = "button" className = "btn btn-medium secondary-bg primary-text br-2 f5 cursor-pointer no-decoration"> */}
                            Next
                            {/* </Link> */}
                        </div>
                    </footer>
                </div>

            </Fragment>
        )
    }

    onParticipantInfoChange = (participant: Participant) => {
        this.setState({
            participant
        })
    }

    onSchoolInfoChange = (school: School) => {
        this.setState({
            school
        })
    }
    onGuardianInfoChange = (guardian: Guardian) => {
        this.setState({
            guardian
        })
    }

    submitDetails = () => {

    }
}

