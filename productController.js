'use strict';
exports.findAll = async function(req, res) {
    let setData = [
        {
        "name":"Mobile phone",
        "qty.": 12
        },
        {
        "name":"Led TV",
        "qty.": 10
        }
    ]
    res.send(setData);
}

exports.create = async function(req, res) {
     return res.send({ status : "success", message:"created successfull"});
};

