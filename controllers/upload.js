//const multer = require("multer");
const pool = require("../db/database");


class Upload {
    static async upload(req, res) {

        try {

            const image = req.file
            const prodid = req.body.prodid
            const prodname = req.body.prodname


            console.log(prodid, prodname)
            console.log(req.file)
            const query1 = `INSERT INTO products(prodid,prodname,image) VALUES ('${prodid}','${prodname}','${image}')`
            const result = await pool.query(query1, (err, rows) => {
                if (err) {
                    console.log(err)
                    res.send({
                        "message": " An Error Occurred",
                        err
                    })
                } else {
                    console.log(rows)
                    res.send({
                        "message": " ok",

                    })

                }
            })

        } catch (error) {
            console.log(error)
            res.status(400).send({ error: error.message })

        }
    }
}

module.exports = Upload;
