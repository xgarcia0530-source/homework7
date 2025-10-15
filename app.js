
const ownerName = "Xavier Garcia";
let hasDownloadedResume = false;


document.addEventListener("DOMContentLoaded", function() {

  const greetingElement = document.getElementById("greeting"); 
  if (greetingElement) {
    greetingElement.textContent = "Hello, my name is " + ownerName + "! Welcome to my portfolio!";
  } else {
    console.error("Could not find greeting element in DOM.");
  }

const downloadButton = document.getElementById("resume-btn");

downloadButton.addEventListener("click", function() {
  if (!hasDownloadedResume) {
    alert(`The resume has been downloaded successfully!`);
    hasDownloadedResume = true;
  } else {
    console.log("Resume has already been downloaded — no alert shown.");
  }
});

  function daysUntilDeadline(deadline) {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    const diffInMs = deadlineDate - currentDate;
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  }

  const deadlineElement = document.getElementById("deadline-date");
  const daysRemainingElement = document.getElementById("days-remaining");
  if (deadlineElement && daysRemainingElement) {
    const remainingDays = daysUntilDeadline(deadlineElement.textContent);
    daysRemainingElement.textContent = remainingDays;
    console.log(`Days remaining until project deadline: ${remainingDays}`);
  } else {
    console.error("Could not find deadline or days-remaining elements in the DOM.");
  }

});

























