window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const userDataList = document.getElementById("userDataList");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const phone = document.getElementById("phone").value;
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const dob = document.getElementById("dob").value;
      const course = document.getElementById("course").value;
      const termsAccepted = document.getElementById("terms").checked;
  
      if (!termsAccepted) {
        alert("You must accept the terms and conditions.");
        return;
      }
  
      alert("Registration Successfully");
  
      userDataList.innerHTML = `
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Password:</strong> ${password}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Gender:</strong> ${gender}</li>
        <li><strong>Date of Birth:</strong> ${dob}</li>
        <li><strong>Course:</strong> ${course}</li>
      `;
  
      form.reset();
    });
   
  });
  