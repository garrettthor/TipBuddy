//Tip calculator.

let employees = []

class Employee{
    constructor(name, job, hours, tips){
        this.name = name
        this.job = job
        this.hours = hours
        this.tips = tips
    }
}

// Create a new object with the employee's shift info

document.querySelector('#create-employee').addEventListener('click', createEmployee)

function createEmployee(){
    let name = document.querySelector('#create-name').value
    let job = document.querySelector('#create-job').value
    let hours = Number(document.querySelector('#create-hours').value)
    let tips = Number(document.querySelector('#create-tips').value)

    let newEmployee = new Employee(name, job, hours, tips)
    employees.push(newEmployee)

    const tenderLi = document.createElement('li')
    const tenderUl = document.querySelector('#bartender-stats-ul')

    const backLi = document.createElement('li')
    const backUl = document.querySelector('#barback-stats-ul')

    if (newEmployee.name === '' || newEmployee.hours === 0) {
        alert('Please fill out form completely.')
        return
    }

    if (newEmployee.job === "Bartender"){
        tenderLi.textContent = '\n' + newEmployee.name + ', ' + newEmployee.job + ', ' + newEmployee.hours + ' hours, ' +  '$' + newEmployee.tips
        tenderUl.appendChild(tenderLi)
    } else {
        backLi.textContent = '\n' + newEmployee.name + ', ' + newEmployee.job + ', ' + newEmployee.hours + ' hours, ' +  '$' + newEmployee.tips
        backUl.appendChild(backLi)
    }
    
    updateDisplays()
    clearFields()
}

// Clear fields

function clearFields(){
    document.querySelector('#create-name').value = ''
    document.querySelector('#create-hours').value = ''
    document.querySelector('#create-tips').value = ''
}



// Add up all the tips

function sumTips(){

    let tipsArr = employees.map(e => e.tips)

    totalTips = tipsArr.reduce((acc,c) => acc + c, 0)

    return totalTips
}

// Add up all the hours

function sumHours(){

    let hoursArr = employees.map(e => e.hours)

    totalHours = hoursArr.reduce((acc,c) => acc + c, 0)

    return totalHours
}



// Update displays showing current total tip pool, total hour pool

function updateDisplays(){
    document.querySelector('#tip-pool-display').innerText = sumTips()
    document.querySelector('#hour-pool-display').innerText = sumHours()
}




// Perform all final calculations

document.querySelector('#finish').addEventListener('click', calcTipOut)

function calcTipOut() {
    
    // Subtract x% from totalTips and set that aside as bbTips

    // Given num of bb >1, assign hour% for each bb (employee.hours / totalHours)

    // find each bb's portion of bbTips by (^^^ * bbTips)

    // print the final tipout by their name

    // Take the remaining value of totalTips after shaving off x% and set aside as tendyTips

    // assign hour% 


}