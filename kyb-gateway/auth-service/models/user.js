const mongoose = require('mongoose'); // Import mongoose

// Define schema for user
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  organization: { type: String, required: true }
});

// Export User model
module.exports = mongoose.model('User', UserSchema);
// This model will be used to interact with the users collection in MongoDB
// and perform CRUD operations on user data.
