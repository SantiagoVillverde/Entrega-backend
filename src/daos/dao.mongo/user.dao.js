import userModel from "../../models/user.model.js"

class UserDao {
    constructor() {
        this.user = userModel
    }


    async getAll() {
        console.log("agregamos al usuario")
        return await this.user.find()
    }


    async getByEmail(email) {
        console.log(email)
        return await this.user.findOne({ email: email });
    }

    async createUser(userData) {
        return await this.user.create(userData);
    }

    async getUserById(id) {
        return await this.user.findById(id);
    }


}


const userDao = new UserDao;

export default userDao;