<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Employee Directory</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/css/style.css">
</head>
<body>
    <div class="header">
        <h1>Employee Directory</h1>
        <div class="search-filter">
            <input type="text" id="search-input" placeholder="Search by name or email">
            <button id="filter-btn">Filter</button>
        </div>
    </div>
    <div class="controls">
        <label>Sort:
            <select id="sort-select">
                <option value="">--Select--</option>
                <option value="name">Name</option>
                <option value="department">Department</option>
            </select>
        </label>
        <label>Show:
            <select id="show-select">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
        </label>
        <button id="add-employee-btn" class="add-btn">Add Employee</button>
    </div>
    <div id="employee-list-container">
        <#list employees as employee>
            <div class="employee-card" data-employee-id="${employee.id}">
                <strong>${employee.firstName} ${employee.lastName}</strong><br>
                <b>Email:</b> ${employee.email}<br>
                <b>Department:</b> ${employee.department}<br>
                <b>Role:</b> ${employee.role}<br>
                <button class="edit-btn" data-id="${employee.id}">Edit</button>
                <button class="delete-btn" data-id="${employee.id}">Delete</button>
            </div>
        </#list>
    </div>
    <footer>
        <p>© 2025 Employee Directory App. All rights reserved.</p>
    </footer>
    <script src="/static/js/data.js"></script>
    <script src="/static/js/app.js"></script>
</body>
</html> 