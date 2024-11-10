let showInput = false;

const handleClickEvent = (): void => {
  const inputDisplay = document.querySelectorAll<HTMLElement>(".input-section");
  showInput = !showInput; 
  inputDisplay.forEach((visible) => (
    visible.style.display = showInput ? "flex" : "none"
  ));
  const toggle = document.querySelector<HTMLButtonElement>('#button');
  toggle.innerText = showInput ? "Hide all sections" : "Show All Sections";
};

const form = document.getElementById('form')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const exp = document.getElementById('exp').value;

  const resumeOutputElement = document.getElementById('resume');
  const resume = `
    <div class='resume-container'>
      <h2>Resume</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${number}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
      <h3>Work Experience</h3>
      <p>${exp}</p>
      <button id="editButton" type="button" onclick="editResume('${name}', '${email}', '${number}', '${education}', '${skills}', '${exp}')">Edit Resume</button>
    </div>`;
  
  if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resume;
  }
});


const editResume = (name, email, number, education, skills, exp) => {
  document.getElementById('firstName').value = name;
  document.getElementById('email').value = email;
  document.getElementById('number').value = number;
  document.getElementById('education').value = education;
  document.getElementById('skills').value = skills;
  document.getElementById('exp').value = exp;
  
  
  showInput = true;
  handleClickEvent();
};