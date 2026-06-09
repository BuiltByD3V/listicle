const renderInternship = async () => {
    const params = new URLSearchParams(window.location.search)
    const internshipId = params.get('id')
    const mainContent = document.getElementById('main-content')

    if (!internshipId) {
        mainContent.innerHTML = '<h2>No internship selected</h2>'
        return
    }

    const response = await fetch(`/internships/${internshipId}`)

    if (!response.ok) {
        mainContent.innerHTML = '<h2>Internship not found</h2>'
        return
    }

    const internship = await response.json()

    mainContent.innerHTML = `
        <article>
            <img src="${internship.image}" alt="${internship.company} logo">
            <h2>${internship.company}</h2>
            <p><strong>Role:</strong> ${internship.role}</p>
            <p><strong>Location:</strong> ${internship.location}</p>
            <p><strong>Term:</strong> ${internship.term}</p>
            <p><strong>Pay:</strong> ${internship.pay}</p>
            <p><strong>Description:</strong> ${internship.description}</p>
            <p><strong>Skills:</strong> ${internship.skills}</p>
            <p><strong>Application Status:</strong> ${internship.applicationStatus}</p>
        </article>
    `
}

renderInternship()
