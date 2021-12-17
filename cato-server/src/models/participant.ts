export {}
const mongoose = require('mongoose');
const {Schema, model, Mixed} = mongoose;
const paymentTypes: string[] = ['full', 'part', 'none']
const transactionMethods: string[] = ['transfer', 'card', 'ussd']
let transactionMethodEror:string|null = ""
type transactionMethodsType = {
    method: 'transfer' | 'card' | 'ussd',
    account_details?: {
        bank_name: string,
        account_number: string,
        account_name: string
    }
}
const transactionMethodValidator: (value: transactionMethodsType) => boolean = (value) => {

    //If the request does not have a 'method' value. The method specifies what method was used
    if(!value.method){
        transactionMethodEror = `transactionMethod must either be ${transactionMethods.join(" or ")}`
        return false;
    }else{
        //If the Method specified is transfer, validate account details
        if(value.method === 'transfer'){
            //If there is no account_details object
            if(!value.account_details){
                transactionMethodEror = '"account_details" must be provided alongside a "transfer" method. The account_details object must coain the "bank_name", the "acount_number" and the "account_name"';
                return false
            }else{
                //If the account_details object does not contain key "bank_name"
                if(!value.account_details.bank_name){
                    transactionMethodEror = '"bank_name" was not specified in the account details. The "bank_name" is the name of the bank';
                    return false
                }

                //If the account_details object does not contain key "account_number"
                if(!value.account_details.account_number){
                    transactionMethodEror = '"account_number" was not specified in the account details. The "account_number" is the number of the account';
                    return false
                }

                //If the account_details object does not contain key "account_name"
                if(!value.account_details.account_name){
                    transactionMethodEror = '"account_name" was not specified in the account details. The "account_name" is the name of the account';
                    return false
                }
            }

            
        }
       
       
    }
    return true
}

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
})

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
    address : {
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
})
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
        validate: [(value: string) => {
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

})

ParticipantSchema.statics.generateReference = async function(){
    const referenceCreator = new Promise<string>(async(resolve, reject) => {
        let referenceGenerated = false;
        let reference:string = ""
        while(!referenceGenerated){
            reference = (Date.now() + 1).toString()
            const references = await this.find({transactionReference: reference});
            if(references.length === 0){
                referenceGenerated = true
            }
        }

        resolve(reference)
    })
    
    return await referenceCreator
    
}

module.exports = mongoose.model('participant', ParticipantSchema);