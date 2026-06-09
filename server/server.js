import express from 'express'
import internshipsData from './data/internships.js'
import internshipsRouter from './routes/internships.js'

const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.use(express.static('public'))
app.use('/internships', internshipsRouter)

app.use((req, res) => {
    res.status(404).send(`
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Page Not Found</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
                >
            </head>
            <body>
                <main class="container">
                    <h1>Page Not Found</h1>
                    <p>The page you requested does not exist.</p>
                    <a href="/">Back to home</a>
                </main>
            </body>
        </html>
    `)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
