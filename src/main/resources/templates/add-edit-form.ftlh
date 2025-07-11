<div id="employee-form-modal" class="modal hidden">
    <form id="employee-form">
        <h2 id="form-title">Add/Edit Employee</h2>
        <input type="hidden" id="employee-id">
        <label>First Name: <input type="text" id="first-name" required></label>
        <label>Last Name: <input type="text" id="last-name" required></label>
        <label>Email: <input type="email" id="email" required></label>
        <label>Department: <input type="text" id="department" required></label>
        <label>Role: <input type="text" id="role" required></label>
        <div class="form-actions">
            <button type="submit" id="save-btn">Save</button>
            <button type="button" id="cancel-btn">Cancel</button>
        </div>
        <div id="form-errors"></div>
    </form>
</div> 