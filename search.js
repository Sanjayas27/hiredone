const employees = [
    { name: 'Sidharth s kumar', job: 'painting', state: 'Kerala', district: 'pathanamthitta'},
    { name: 'Sonu', job: 'painting', state: 'Maharashtra', district: 'Mumbai'},
    { name: 'Kumar', job: 'Manager', state: 'Delhi', district: 'New Delhi' },
    // Add more employee data as needed
];

function searchEmployees() {
    const job = document.getElementById('myInput').value.toLowerCase();
    const state = document.getElementById('stateSelect').value.toLowerCase();
    const district = document.getElementById('districtSelect').value.toLowerCase();

    const searchResults = employees.filter(employee => {
        return employee.job.toLowerCase().includes(job) &&
            employee.state.toLowerCase().includes(state) &&
            employee.district.toLowerCase().includes(district);
    });

    // Store search results in session storage
    sessionStorage.setItem('searchResults', JSON.stringify(searchResults));

    // Redirect to searchResults.html
    window.location.href = 'searchResults.html';
}

function displaySearchResults() {
    const searchResultsContainer = document.getElementById('searchResults');
    const storedResults = sessionStorage.getItem('searchResults');

    if (!storedResults) {
        searchResultsContainer.innerHTML = '<p>No matching employees found.</p>';
        return;
    }

    const searchResults = JSON.parse(storedResults);

    if (searchResults.length === 0) {
        searchResultsContainer.innerHTML = '<p>No matching employees found.</p>';
    } else {
        searchResults.forEach(employee => {
            const employeeElement = document.createElement('div');
            employeeElement.classList.add('employee');
            employeeElement.innerHTML = `
                <h3>${employee.name}</h3>
                <img src='https://firebasestorage.googleapis.com/v0/b/workease-39efc.appspot.com/o/bg2.png?alt=media&token=499fb008-e3c8-4c4e-9325-d209f7b4fac5'></img>
                <p><strong>Job:</strong> ${employee.job}</p>
            `;
            searchResultsContainer.appendChild(employeeElement);
        });
    }
}
