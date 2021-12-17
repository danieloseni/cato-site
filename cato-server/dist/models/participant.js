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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const { Schema, model, Mixed } = mongoose;
const paymentTypes = ['full', 'part', 'none'];
const transactionMethods = ['transfer', 'card', 'ussd'];
let transactionMethodEror = "";
const transactionMethodValidator = (value) => {
    //If the request does not have a 'method' value. The method specifies what method was used
    if (!value.method) {
        transactionMethodEror = `transactionMethod must either be ${transactionMethods.join(" or ")}`;
        return false;
    }
    else {
        //If the Method specified is transfer, validate account details
        if (value.method === 'transfer') {
            //If there is no account_details object
            if (!value.account_details) {
                transactionMethodEror = '"account_details" must be provided alongside a "transfer" method. The account_details object must coain the "bank_name", the "acount_number" and the "account_name"';
                return false;
            }
            else {
                //If the account_details object does not contain key "bank_name"
                if (!value.account_details.bank_name) {
                    transactionMethodEror = '"bank_name" was not specified in the account details. The "bank_name" is the name of the bank';
                    return false;
                }
                //If the account_details object does not contain key "account_number"
                if (!value.account_details.account_number) {
                    transactionMethodEror = '"account_number" was not specified in the account details. The "account_number" is the number of the account';
                    return false;
                }
                //If the account_details object does not contain key "account_name"
                if (!value.account_details.account_name) {
                    transactionMethodEror = '"account_name" was not specified in the account details. The "account_name" is the name of the account';
                    return false;
                }
            }
        }
    }
    return true;
};
const SchoolSchema = new Schema({
    name: {
        type: String,
        required: [true, "The school name is required"]
    },
    address: {
        type: String,
        required: [true, "The school's address is required"]
    },
    city: {
        type: String,
        required: [true, "The school's city is required"]
    },
    state: {
        type: String,
        required: [true, "The school's state is required"]
    },
    grade: {
        type: String,
        required: [true, 'Participants\'s class/grade is required']
    }
});
const GuardianSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Guardian\'s firstname is required']
    },
    lastname: {
        type: String,
        required: [true, "Guardian's lastname is required"]
    },
    email: {
        type: String,
        required: [true, "Guardian's email is required"]
    },
    address: {
        type: String,
        required: [true, "The address of the guardian is required"]
    },
    city: {
        type: String,
        required: [true, "The city of the guardian is required"]
    },
    state: {
        type: String,
        required: [true, "The state of the guardian is required"]
    },
    country: {
        type: String,
        required: [true, "The country of the guardian is required"]
    },
    relationship: {
        type: String,
        required: [true, "The relationship of the guardian is required"]
    }
});
const ParticipantSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Participant's firstname is required"]
    },
    lastname: {
        type: String,
        required: [true, "Participant's lastname is required"]
    },
    email: {
        type: String,
        required: [true, "Participant's email is required"]
    },
    phone: {
        type: String,
        required: [true, "Participant's phone number is required"]
    },
    dob: {
        type: Date,
        required: [true, "The date of birth of the participant is required"]
    },
    address: {
        type: String,
        required: [true, "The address of the participant is required"]
    },
    city: {
        type: String,
        required: [true, "The city of the participant is required"]
    },
    state: {
        type: String,
        required: [true, "Participant's state is required"]
    },
    amount: {
        type: Number,
        default: 0
    },
    paymentType: {
        type: String,
        validate: [(value) => {
                return paymentTypes.includes(value);
            }, `paymentType must either be ${paymentTypes.join(' or ')}`]
    },
    transactionMethods: {
        type: Mixed,
        validate: [transactionMethodValidator, transactionMethodEror]
    },
    initialRegistrationDateTime: {
        type: Date
    },
    fullRegistrationDateTime: {
        type: Date
    },
    transactionDateTime: {
        type: Date
    },
    school: {
        type: SchoolSchema
    },
    guardian: {
        type: GuardianSchema
    },
    transactionReference: {
        type: String
    }
});
ParticipantSchema.statics.generateReference = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const referenceCreator = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let referenceGenerated = false;
            let reference = "";
            while (!referenceGenerated) {
                reference = (Date.now() + 1).toString();
                const references = yield this.find({ transactionReference: reference });
                if (references.length === 0) {
                    referenceGenerated = true;
                }
            }
            resolve(reference);
        }));
        return yield referenceCreator;
    });
};
module.exports = mongoose.model('participant', ParticipantSchema);
