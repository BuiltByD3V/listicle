const renderInternships = async () => {
    const response = await fetch('/internships')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data && data.length > 0) {
        const internshipCards = data.map((internship) => {
            return `
                <article>
                    <img src="${internship.image}" alt="${internship.company} logo">
                    <h2>${internship.company}</h2>
                    <p><strong>Role:</strong> ${internship.role}</p>
                    <p><strong>Location:</strong> ${internship.location}</p>
                    <p><strong>Pay:</strong> ${internship.pay}</p>
                    <a href="/internship.html?id=${internship.id}" role="button">View details</a>
                </article>
            `
        }).join('')

        mainContent.innerHTML = internshipCards
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No internships available'
        mainContent.appendChild(message)
    }
}

renderInternships()
