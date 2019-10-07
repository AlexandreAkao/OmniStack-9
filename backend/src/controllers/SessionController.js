const User = require("../models/User");

module.exports = {
    index() {

    },

    show() {

    },

    async store(req, res) {
        const { email } = req.body;
        
        const user = await User.create({ email });

        return res.json(user);
    },

    update() {

    },
    
    destroy() {

    }
};