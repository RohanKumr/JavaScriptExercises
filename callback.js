let companies = [
    {name: "One",age: 23},
    {name: "Two",age: 37},
    {name: "Three",age: 12},
    {name: "Four",age: 63},
];

function getCompanies() {
    let output = ''
    setTimeout(() => {
        companies.forEach((company) => {
            output = output + `<li>${company.name}</li>`
        })
        document.body.innerHTML = output;

    }, 1000)

}
function createCompany(company, callback) {
    setTimeout(() => {
        companies.push(company)
        callback();
    }, 2000)
}
getCompanies();
createCompany({ name: "Five", age: 23 }, getCompanies)
