module.exports = {
    saveInputs: (req, res) => {
        const db = req.app.get('db')
        const { inputs } = req.body

        db.save_inputs(inputs)
            .then(responseData => res.status(200).send(data))
            .catch(err => {
                res.status(500).send({errorMessage: 'Something went wrong!'})
            })
    },
    
    getOutput: (req, res) => {
        const db = req.app.get('db')

        db.get_output()
            .then(responseData => {
                let data = [
                    responseData[0].input_one,
                    responseData[0].input_two,
                    responseData[0].input_three,
                    responseData[0].input_four,
                    responseData[0].input_five,
                    responseData[0].input_six,
                    responseData[0].input_seven,
                    responseData[0].input_eight,
                    responseData[0].input_nine,
                    responseData[0].input_ten,
                    responseData[0].input_eleven,
                    responseData[0].input_twelve,
                    responseData[0].input_thirteen,
                    responseData[0].input_fourteen,
                    responseData[0].input_fifteen,
                    responseData[0].input_sixteen,
                    responseData[0].input_seventeen,
                    responseData[0].input_eighteen,
                    responseData[0].input_nineteen,
                    responseData[0].input_twenty
                ]
                res.status(200).send(data)
            })
            .catch(err => {
                res.status(500).send({errorMessage: 'Something went wrong!'})
            })
    }
}