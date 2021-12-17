"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
const Participant = require("../models/participant");
const { v4 } = require("uuid");
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let error = {};
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
    if (err.message.includes("participant validation failed")) {
        Object.values(err.errors).forEach((properties) => {
            error[properties.path] = properties.message;
        });
    }
    return error;
};
module.exports = (_a = class RegistrationController {
    },
    _a.register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body);
        const data = req.body;
        const { firstname, lastname, email, phone, dob, address, city, state, } = data;
        const school = req.body.school || {};
        const guardian = req.body.guardian || {};
        const { name, address: schoolAddress, city: schoolCity, state: schoolState, grade, } = school;
        const { firstname: gurardianFirstname, lastname: guradianLastname, email: guardianEmail, address: guardianAddress, city: guardianCity, state: guardianState, country: guardianCountry, relationship, } = guardian;
        const transactionReference = yield Participant.generateReference();
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
            console.log(Participant.participant);
            const participant = yield Participant.create(details);
            //   ParticipantModel.save();
            res.status(201).json(Object.assign(Object.assign({}, details), { message: "Successful" }));
        }
        catch (error) {
            const errors = handleErrors(error);
            res.status(400).send(errors);
        }
    }),
    _a);
