import express from 'express'
import internshipsData from '../data/internships.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(internshipsData)
})

router.get('/:internshipid', (req, res) => {
    const internship = internshipsData.find((internship) => {
        return internship.id === req.params.internshipid
    })

    if (internship) {
        res.status(200).send(`
            <!doctype html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${internship.company}</title>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
                    >
                    <style>
                        main {
                            padding-top: 2rem;
                        }

                        article {
                            max-width: 760px;
                            margin: 0 auto;
                        }

                        img {
                            width: 64px;
                            height: 64px;
                            object-fit: contain;
                        }
                    </style>
                </head>
                <body>
                    <main class="container">
                        <article>
                            <img src="${internship.image}" alt="${internship.company} logo">
                            <h1>${internship.company}</h1>
                            <p><strong>Role:</strong> ${internship.role}</p>
                            <p><strong>Location:</strong> ${internship.location}</p>
                            <p><strong>Term:</strong> ${internship.term}</p>
                            <p><strong>Pay:</strong> ${internship.pay}</p>
                            <p><strong>Description:</strong> ${internship.description}</p>
                            <p><strong>Skills:</strong> ${internship.skills}</p>
                            <p><strong>Application Status:</strong> ${internship.applicationStatus}</p>
                            <a href="/">Back to all internships</a>
                        </article>
                    </main>
                </body>
            </html>
        `)
    } else {
        res.status(404).send(`
            <!doctype html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Internship Not Found</title>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
                    >
                    <style>
                        main {
                            padding-top: 3rem;
                        }
                    </style>
                </head>
                <body>
                    <main class="container">
                        <h1>Internship Not Found</h1>
                        <p>We could not find that internship opportunity.</p>
                        <a href="/">Back to all internships</a>
                    </main>
                </body>
            </html>
        `)
    }
})

export default router
