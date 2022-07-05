let that = module.exports = {
    register: async (req, res, next) => {
        res.render('register')
    },
    login: async (req, res, next) => {
        res.render('login')
    },
    chat: async (req, res, next) => {
        res.render('chat')
    }
}