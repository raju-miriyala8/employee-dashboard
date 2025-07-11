# Employee Directory

A responsive Employee Directory web application built with HTML, CSS, and JavaScript. This Assignment displays core front-end development skills, including dynamic data handling, modular code, and clean UI/UX. A Freemarker template version is also provided for server-side rendering scenarios.

---

## 1. Setup and Run Instructions

### **Option 1: Static HTML/JS/CSS Demo (Recommended)**
- Simply open `employee-directory-demo.html` in your web browser (Chrome, Firefox, Edge, etc.).
- No installation or server required.

### **Option 2: Freemarker Template Version**
- Prerequisites: Java (8+), a web server with Freemarker support (e.g., Spring Boot, Spark Java).
- Place the contents of `src/main/resources/templates/` and `src/main/resources/static/` in the appropriate directories for your server.
- Pass a list of employees to the `dashboard.ftlh` template as the `employees` variable.
- Start your server and visit the appropriate URL (e.g., `http://localhost:8080`).

---

## 2. Overview of Project Structure

```
project-root/
├── employee-directory-demo.html      # Standalone demo (open in browser)
├── src/
│   └── main/
│       └── resources/
│           ├── templates/
│           │   ├── dashboard.ftlh   # Freemarker dashboard template
│           │   └── add-edit-form.ftlh # Freemarker add/edit form template
│           └── static/
│               ├── css/
│               │   └── style.css   # Main stylesheet
│               └── js/
│                   ├── data.js     # Mock employee data
│                   └── app.js      # Main app logic
└── README.md
```

- **employee-directory-demo.html**: All-in-one demo file (HTML, CSS, JS inlined).
- **dashboard.ftlh**: Main dashboard template for Freemarker.
- **add-edit-form.ftlh**: Add/Edit employee form (modal or page).
- **style.css**: Styles for layout, cards, modal, and responsiveness.
- **app.js**: Handles rendering, add/edit/delete, search, sort, and pagination.
- **data.js**: Contains mock employee data.

---

## 3. Screenshots

### Dashboard (Desktop)
![Dashboard Desktop](screenshots/dashboard-desktop.png)

### Add Employee Form (Modal)
![Add Employee Form Modal](screenshots/add-form-modal.png)

---

## 4. Reflection

### **Challenges Faced**
- Ensuring the UI remained responsive and visually appealing across all devices.
- Managing dynamic updates (add/edit/delete) in pure JavaScript without a framework.
- Simulating Freemarker data injection for a static demo.
- Handling form validation and user feedback in a user-friendly way.

### **Improvements for the Future**
- Add more robust error handling and user notifications (e.g., toasts).
- Implement advanced filtering (by department, role, etc.) and a real filter sidebar.
- Add animations and transitions for a smoother user experience.
- Enhance accessibility (ARIA labels, keyboard navigation).
- Integrate with a backend API for persistent data storage.
- Write unit tests for JavaScript logic.

---

**Thank you for reviewing my Employee Directory project!** 

**Instructions:**
1. Open your terminal and navigate to your project root directory.
2. Copy and paste each command above, one by one.
3. If prompted, log in to GitHub or provide a personal access token (for HTTPS push).

---

**After running these commands, your code will be live at:**
[https://github.com/raju-miriyala8/employee-dashboard](https://github.com/raju-miriyala8/employee-dashboard)

Let me know if you hit any issues or need help with screenshots or GitHub setup! 