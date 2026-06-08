import express from 'express'
import internships from './data/internships.js'

const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
    res.status(200).send(`
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Listicle Server</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
                >
            </head>
            <body>
                <main class="container">
                    <h1>LISTICLE SERVER</h1>
                    <p>Internship opportunities and developer resources in one place.</p>
                </main>
            </body>
        </html>
    `)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
