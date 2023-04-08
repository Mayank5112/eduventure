import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();

mongoose.set('strictQuery', false);
const uri = 'mongodb://localhost:27017/dashboard';
mongoose.connect(process.env.URI, { useNewUrlParser: true })
    .then(() => console.log("connected to database dashboard"))
    .catch((err) => console.log("there was some issue \n" + err))


const uSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true]
    },
    password: {
        type: String,
        required: [true]
    }
});

uSchema.statics.findAndValidate = async function (email, password) {
    const foundUser = await this.findOne({ email });
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid ? foundUser : false
}

uSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const User = mongoose.model('user', uSchema);

export { User }