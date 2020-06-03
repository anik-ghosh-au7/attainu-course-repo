let data = [];

class User {

    getData(req, res) {
        res.send({data});
    };

    postData(req, res) {
        data.push(req.params.item);
        res.status(200).send({msg: "data added successfully"});
    };

};

module.exports = User;