// Step 1: JSON Conversion
const student = {
  name: "Injil",
  grade: 5,
  city: "Cumilla"
};

const jsonData = JSON.stringify(student); // Convert JS object to JSON
console.log("JSON Data:", jsonData);

const parsedData = JSON.parse(jsonData); // Convert JSON back to JS object
console.log("Parsed Data:", parsedData);

// Step 2: Callback Function
function greetStudent(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

greetStudent(student.name, function () {
  console.log("Welcome to the JavaScript class.");
});

// Step 3: Promise
function fetchAssignmentStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const completed = true;
      if (completed) {
        resolve("Assignment submitted successfully.");
      } else {
        reject("Assignment not submitted.");
      }
    }, 2000); // Simulate delay
  });
}

// Step 4: Async/Await
async function checkSubmission() {
  try {
    const message = await fetchAssignmentStatus();
    console.log("Status:", message);
  } catch (error) {
    console.log("Error:", error);
  }
}

checkSubmission();
