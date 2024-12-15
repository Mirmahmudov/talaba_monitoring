document.addEventListener('DOMContentLoaded', () => {
    const addStudentForm = document.getElementById('addStudentForm');
    const studentName = document.getElementById('studentName');
    const studentAge = document.getElementById('studentAge');
    const studentEmail = document.getElementById('studentEmail');
    const studentAddress = document.getElementById('studentAddress');
  
    // Check if there's an existing students array in localStorage
    const students = JSON.parse(localStorage.getItem('students')) || [];
  
    addStudentForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const newStudent = {
        name: studentName.value,
        age: studentAge.value,
        email: studentEmail.value,
        address: studentAddress.value
      };
  
      // Add the new student to the array
      students.push(newStudent);
  
      // Save updated student array to localStorage
      localStorage.setItem('students', JSON.stringify(students));
  
      // Redirect to student list page
      window.location.href = './talaba.html';
    });
  });
  