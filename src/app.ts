import express from "express" // imported as the main framework for building the web application.
import * as dotevnv from "dotenv" // imported to handle environment variables.
import cors from "cors" //  imported to enable Cross-Origin Resource Sharing.
import helmet from "helmet" //imported to add security headers to HTTP responses.
import { userRouter } from "./users/users.routes"
import { productRouter } from "./products/products.routes"

dotevnv.config()

if (!process.env.PORT) {
    console.log(`No port value specified...`)
}

const PORT = parseInt(process.env.PORT as string, 10) //is parsed from a string to an integer using parseInt().

const app = express() //An instance of the Express application is created using express() and assigned to the app variable.

app.use(express.json()) // used to parse JSON bodies of incoming requests
app.use(express.urlencoded({ extended: true })) //is used to parse URL-encoded bodies of incoming requests.
app.use(cors()) // is used to enable Cross-Origin Resource Sharing.
app.use(helmet()) //is used to enhance the security of the application by setting various HTTP headers

//to make API calls to these routes
app.use('/', userRouter); //user API
app.use('/', productRouter)

//The Express application starts listening on the specified PORT by calling app.listen().
// Once the server is running, a message indicating the port number is logged to the console.
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})