import User, { User as UserModel } from './UserModel';

class UserService {
  async createUser(user) {
    return await User.create(user);
  }

  async getAllUsers() {
    return await User.find();
  }

  async getUserById(id) {
    return await User.findById(id);
  }

  async updateUser(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUser(id) {
    await User.findByIdAndDelete(id);
  }
}

export default new UserService();