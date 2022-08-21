export default {
    signup : {
        presignup : {
            registeremail : '#email_create',
            createaccount : '#SubmitCreate > span'
        },
        postsignup : {
            gender: {
                male: '#id_gender1',
                female: '#id_gender2'
            },
            firstname: '#customer_firstname',
            lastname: '#customer_lastname',
            password: '#passwd',
            birthdate: {
                day: '#days',
                month: '#months',
                year: '#years'
            },
            newsletter: '#newsletter',
            specialoffers: '#optin',
            address: {
                firstname: '#firstname',
                lastname: '#lastname',
                company: '#company',
                address1: '#address1',
                address2: '#address2',
                city: '#city',
                state: '#id_state',
                zipcode: '#postcode',
                country: '#id_country',
                additionalinformation: '#other',
                homephone: '#phone',
                mobilephone: '#phone_mobile',
                addressalias: '#alias'
            },
            submitAccount: '#submitAccount'
        }
    },
    signin: {
        email: '#email',
        password: '#passwd',
        forgotpassword: '.lost_password > a',
        submitlogin: '#SubmitLogin > span'
    }
}