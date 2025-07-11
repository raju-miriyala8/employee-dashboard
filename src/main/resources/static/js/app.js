// Employee Directory App Logic
let employees = [...mockEmployees];
let currentPage = 1;
let itemsPerPage = 10;
let currentSort = '';
let searchTerm = '';

const employeeListContainer = document.getElementById('employee-list-container');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const showSelect = document.getElementById('show-select');
const addEmployeeBtn = document.getElementById('add-employee-btn');

// Modal/form elements (if present)
const formModal = document.getElementById('employee-form-modal');
const employeeForm = document.getElementById('employee-form');
const formTitle = document.getElementById('form-title');
const formErrors = document.getElementById('form-errors');
const cancelBtn = document.getElementById('cancel-btn');

function renderEmployees() {
  let filtered = employees.filter(emp => {
    const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
    return (
      fullName.includes(searchTerm) ||
      emp.email.toLowerCase().includes(searchTerm)
    );
  });

  if (currentSort === 'name') {
    filtered.sort((a, b) => (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName));
  } else if (currentSort === 'department') {
    filtered.sort((a, b) => a.department.localeCompare(b.department));
  }

  // Pagination
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginated = filtered.slice(start, end);

  employeeListContainer.innerHTML = '';
  paginated.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.setAttribute('data-employee-id', emp.id);
    card.innerHTML = `
      <strong>${emp.firstName} ${emp.lastName}</strong><br>
      <b>Email:</b> ${emp.email}<br>
      <b>Department:</b> ${emp.department}<br>
      <b>Role:</b> ${emp.role}<br>
      <button class="edit-btn" data-id="${emp.id}">Edit</button>
      <button class="delete-btn" data-id="${emp.id}">Delete</button>
    `;
    employeeListContainer.appendChild(card);
  });

  // Attach event listeners for edit/delete
  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.onclick = () => openForm('edit', btn.dataset.id);
  });
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.onclick = () => deleteEmployee(btn.dataset.id);
  });
}

function openForm(mode, id) {
  if (!formModal) return;
  formModal.classList.remove('hidden');
  formErrors.innerText = '';
  employeeForm.reset();
  if (mode === 'edit') {
    formTitle.innerText = 'Edit Employee';
    const emp = employees.find(e => e.id == id);
    document.getElementById('employee-id').value = emp.id;
    document.getElementById('first-name').value = emp.firstName;
    document.getElementById('last-name').value = emp.lastName;
    document.getElementById('email').value = emp.email;
    document.getElementById('department').value = emp.department;
    document.getElementById('role').value = emp.role;
  } else {
    formTitle.innerText = 'Add Employee';
    document.getElementById('employee-id').value = '';
  }
}

function closeForm() {
  if (!formModal) return;
  formModal.classList.add('hidden');
  employeeForm.reset();
  formErrors.innerText = '';
}

function deleteEmployee(id) {
  if (confirm('Are you sure you want to delete this employee?')) {
    employees = employees.filter(e => e.id != id);
    renderEmployees();
  }
}

function validateForm() {
  let valid = true;
  let errors = [];
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const department = document.getElementById('department').value.trim();
  const role = document.getElementById('role').value.trim();
  if (!firstName) { valid = false; errors.push('First name is required.'); }
  if (!lastName) { valid = false; errors.push('Last name is required.'); }
  if (!email) { valid = false; errors.push('Email is required.'); }
  else if (!/^\S+@\S+\.\S+$/.test(email)) { valid = false; errors.push('Invalid email format.'); }
  if (!department) { valid = false; errors.push('Department is required.'); }
  if (!role) { valid = false; errors.push('Role is required.'); }
  if (!valid) {
    formErrors.innerText = errors.join(' ');
  }
  return valid;
}

if (employeeForm) {
  employeeForm.onsubmit = function(e) {
    e.preventDefault();
    if (!validateForm()) return;
    const id = document.getElementById('employee-id').value;
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const department = document.getElementById('department').value.trim();
    const role = document.getElementById('role').value.trim();
    if (id) {
      // Edit
      const emp = employees.find(e => e.id == id);
      emp.firstName = firstName;
      emp.lastName = lastName;
      emp.email = email;
      emp.department = department;
      emp.role = role;
    } else {
      // Add
      const newId = employees.length ? Math.max(...employees.map(e => e.id)) + 1 : 1;
      employees.push({ id: newId, firstName, lastName, email, department, role });
    }
    closeForm();
    renderEmployees();
  };
}
if (cancelBtn) {
  cancelBtn.onclick = closeForm;
}
if (addEmployeeBtn) {
  addEmployeeBtn.onclick = () => openForm('add');
}
if (searchInput) {
  searchInput.oninput = function() {
    searchTerm = this.value.toLowerCase();
    currentPage = 1;
    renderEmployees();
  };
}
if (sortSelect) {
  sortSelect.onchange = function() {
    currentSort = this.value;
    renderEmployees();
  };
}
if (showSelect) {
  showSelect.onchange = function() {
    itemsPerPage = parseInt(this.value, 10);
    currentPage = 1;
    renderEmployees();
  };
}
// Initial render
renderEmployees(); 