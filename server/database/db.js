import mongoose from "mongoose"

const DBConnection = () => {
    const DB_URL = `mongodb+srv://pranaav6703:sunny1234@cluster0.aw9m3oy.mongodb.net/?retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URL, { useNewUrlParser: true })
        console.log('MongDB connected')
    } catch (error) {
        console.error('Error while connecting with the database', error.message)
    }
}

export default DBConnection