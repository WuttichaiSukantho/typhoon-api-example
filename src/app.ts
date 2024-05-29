import express from 'express'

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api/lead/v1", routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
