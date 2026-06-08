import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import internshipsData from '../data/internships.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(internshipsData)
})

router.get('/:internshipid', (req, res) => {
    const internship = internshipsData.find((internship) => {
        return internship.id === req.params.internshipid
    })

    if (internship) {
        res.status(200).json(internship)
    } else {
        res.status(404).json({ message: 'Internship not found' })
    }
})

export default router
