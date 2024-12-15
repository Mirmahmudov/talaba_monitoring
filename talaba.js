document.addEventListener('DOMContentLoaded', () => {
  const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
  const editModal = document.getElementById('editModal');
  const closeModal = document.getElementById('closeModal');
  const editForm = document.getElementById('editForm');
  const editName = document.getElementById('editName');
  const editAge = document.getElementById('editAge');
  const editEmail = document.getElementById('editEmail');
  const editAddress = document.getElementById('editAddress');
  
  // Fetch students from localStorage
  const students = JSON.parse(localStorage.getItem('students')) || [];
  renderTable(students);

  // Function to render students in the table
  function renderTable(students) {
    studentTable.innerHTML = '';
    students.forEach((student, index) => {
      const row = studentTable.insertRow();
      row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.email}</td>
        <td>${student.address}</td>
        <td>
          <button class="btn editBtn" data-index="${index}">Edit</button>
          <button class="btn deleteBtn" data-index="${index}">Delete</button>
        </td>
      `;
    });
  }

  // Edit student button click event
  studentTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('editBtn')) {
      const index = e.target.getAttribute('data-index');
      const student = students[index];

      // Pre-fill the edit form with student data
      editName.value = student.name;
      editAge.value = student.age;
      editEmail.value = student.email;
      editAddress.value = student.address;

      // Open the modal
      editModal.style.display = 'block';

      // Update the student in localStorage
      editForm.onsubmit = (e) => {
        e.preventDefault();

        // Update the student data
        students[index].name = editName.value;
        students[index].age = editAge.value;
        students[index].email = editEmail.value;
        students[index].address = editAddress.value;

        // Save updated students to localStorage
        localStorage.setItem('students', JSON.stringify(students));

        // Close the modal and re-render the table
        editModal.style.display = 'none';
        renderTable(students);
      };
    } else if (e.target.classList.contains('deleteBtn')) {
      const index = e.target.getAttribute('data-index');
      
      // Remove the student from the array
      students.splice(index, 1);

      // Save updated students to localStorage
      localStorage.setItem('students', JSON.stringify(students));

      // Re-render the table
      renderTable(students);
    }
  });

  // Close the modal
  closeModal.onclick = () => {
    editModal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === editModal) {
      editModal.style.display = 'none';
    }
  };
});
