const bcrypt = require('bcryptjs');

var Vendor = require('../models/vendor');

/** Create a new vendor 
 *  (POST) http://localhost:5000/vendor/register
 */
exports.vendorRegisterUpdate = function(req, res) {
    const { userName, password } = req.body;
    Vendor.findOne({ userName: userName }).then((vendor) => {
        if (vendor) {
            res.status(409).json({ error: 'Sorry, the name is already registered!' })
        } else {
            const vendorNew = new Vendor({
                userName,
                password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(vendorNew.password, salt, (err, hash) => {
                    if (err) {
                        throw (err);
                    }
                    vendorNew.password = hash;
                    vendorNew.save().then((vendor) => {
                        res.json({
                            vendor: {
                                userName: vendor.userName,
                                password: vendor.password
                            }
                        })
                    })
                })
            })
        }
    })
};

/** Update the info of vendor
 * (POST) http://localhost:5000/vendor/park/:vendorID
 */
exports.vendorParkUpdate = function(req, res) {
    Vendor.findByIdAndUpdate(
        req.params.vendorId, 
        {location: { type: "Point", coordinates: req.body.location },
        textAddress: req.body.textAddress,
        parkStatment: req.body.parkStatment
        }, { new: true },
        function(err, updatedVendor) {
            if (err) {
                res.status(404).json({
                    success: false, 
                    err: err });
            } else {
                res.status(200).json({ 
                    success: true, 
                    pdatedVendor: updatedVendor
                });
            }
        }
    );
};