import axios from "axios"

type getDBJsonProps = {
    from: string
    to: string
}

class PowerAPI {

    getDB(jsonProps: getDBJsonProps) {
        
        return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: 'https://api.powercrm.com.br/api/report/db',
                headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: process.env.POWERAPITOKEN
                },
                data: {from: jsonProps.from, stringFilterTypeDate: 1, to: jsonProps.to}
            };
            
            axios.request(options).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                reject(error);
            });
        })
    }   
}

export default new PowerAPI()