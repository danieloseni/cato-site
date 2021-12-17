const Participant = require("../models/participant");
const { v4 } = require("uuid");

interface ParticipantSchoolDetails {
  name: string;
  address: string;
  city: string;
  state: string;
  grade: string;
}
interface ParticipantGuardianDetails {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  state: string;
  country: string;
  relationship: string;
}

interface RegistrationDetails {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  amount: string;
  school: ParticipantSchoolDetails;
  guardian: ParticipantGuardianDetails;
}

const handleErrors = (err:any) => {
    console.log(err.message, err.code)
    let error:{[x:string]: any} = {}

    // if(err.message === 'Incorrect email'){
    //     error.email = "Unregistered email"
    // }

    // if(err.message === "Incorrect password"){
    //     error.password = "Password is not correct"
    // }

    // //duplicate error code
    // if(err.code === 11000){
    //     error.email = "Email is already registered"
    // }

    if(err.message.includes("participant validation failed")){
        Object.values(err.errors).forEach((properties:any) => {
            error[properties.path] = properties.message
        })
    }

    return error;
}

module.exports = class RegistrationController {
  static register = async (req: any, res: any, next: Function) => {
    console.log(req.body)
    const data: RegistrationDetails = req.body;
    const {
      firstname,
      lastname,
      email,
      phone,
      dob,
      address,
      city,
      state,
    } = data;
    const school: ParticipantSchoolDetails = req.body.school || {};

    const guardian: ParticipantGuardianDetails = req.body.guardian || {}

    const {
      name,
      address: schoolAddress,
      city: schoolCity,
      state: schoolState,
      grade,
    } = school;

    const {
      firstname: gurardianFirstname,
      lastname: guradianLastname,
      email: guardianEmail,
      address: guardianAddress,
      city: guardianCity,
      state: guardianState,
      country: guardianCountry,
      relationship,
    } = guardian;

    const transactionReference = await Participant.generateReference();
    const initialRegistrationDateTime = new Date();

    const details = {
      firstname,
      lastname,
      email,
      phone,
      dob,
      address,
      city,
      state,
      guardian: {
        firstname: gurardianFirstname,
        lastname: guradianLastname,
        email: guardianEmail,
        address: guardianAddress,
        city: guardianCity,
        state: guardianState,
        country: guardianCountry,
        relationship,
      },
      school: {
        name,
        address: schoolAddress,
        city: schoolCity,
        state: schoolState,
        grade,
      },
      transactionReference,
      initialRegistrationDateTime,
    };

    try {
        console.log(Participant.participant)
        const participant = await Participant.create(details)
    //   ParticipantModel.save();
      res.status(201).json({ ...details, message: "Successful" });
    } catch (error) {
        const errors = handleErrors(error)
      res.status(400).send(errors);
    }
  };
};
