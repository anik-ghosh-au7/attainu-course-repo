const userModel = function (obj) {
    for (let key of Object.keys(obj)) {
        this[key] = obj[key];
    };
};

userModel.prototype.listProperties = function (){
    for (let key of Object.keys(this)) {
        console.log(key);
    };
};

const userObj = new userModel({name: 'robin', start_date: '01-01-2020', end_date: '30-10-2020'});

userObj.listProperties();

