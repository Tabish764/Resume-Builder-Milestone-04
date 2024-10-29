var _a;
var showInput = false;
var handleClickEvent = function () {
    var inputDisplay = document.querySelectorAll(".input-section");
    showInput = !showInput;
    inputDisplay.forEach(function (visible) { return (visible.style.display = showInput ? "flex" : "none"); });
    var toggle = document.querySelector('#button');
    toggle.innerText = showInput ? "Hide all sections" : "Show All Sections";
};
var form = (_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('firstName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var exp = document.getElementById('exp').value;
    var resumeOutputElement = document.getElementById('resume');
    var resume = "\n    <div class='resume-container'>\n      <h2>Resume</h2>\n      <p>Name: ".concat(name, "</p>\n      <p>Email: ").concat(email, "</p>\n      <p>Phone: ").concat(number, "</p>\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n      <h3>Work Experience</h3>\n      <p>").concat(exp, "</p>\n      <button id=\"editButton\" type=\"button\" onclick=\"editResume('").concat(name, "', '").concat(email, "', '").concat(number, "', '").concat(education, "', '").concat(skills, "', '").concat(exp, "')\">Edit Resume</button>\n    </div>");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resume;
    }
});
var editResume = function (name, email, number, education, skills, exp) {
    document.getElementById('firstName').value = name;
    document.getElementById('email').value = email;
    document.getElementById('number').value = number;
    document.getElementById('education').value = education;
    document.getElementById('skills').value = skills;
    document.getElementById('exp').value = exp;
    showInput = true;
    handleClickEvent();
};
