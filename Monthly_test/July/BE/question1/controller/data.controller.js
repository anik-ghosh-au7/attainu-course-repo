import Data from '../model/data.model';
const data_controller = {
    savedata: (result) => {
        
        for (let i =0; i< result.length; i+=6) {
                let data = new Data({
                    'name': result[i]['r'],
                    'email': result[i+1]['r'],
                    'phone_number': result[i+2]['r'],
                    'age': result[i+3]['r'],
                    'gender': result[i+4]['r'],
                    'address': result[i+5]['r']
                })
                data.save();
            }
    }
};

module.exports = data_controller;