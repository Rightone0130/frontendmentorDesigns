let dayError = document.getElementById("day-error");
let monthError = document.getElementById("month-error");
let yearError = document.getElementById("year-error");
let submitError = document.getElementById("This field is required");
try {
  function dayValidation() {
    let day = document.getElementById("dob-day").value;
    try {
      if (day.length == 0) {
        dayError.innerHTML = "This field is required";

        return false;
      }
      if (day <= 0 || day > 31) {
        dayError.innerHTML = "Must be a valid day";
        return false;
      }
    } catch (error) {
      dayError.innerHTML = "";
    }

    return true;
  }
  function monthValidation() {
    let month = document.getElementById("dob-month").value;
    try {
      if (month.length == 0) {
        monthError.innerHTML = "This field is required";
        throw new Error(false);
      }
      if (month <= 0 || month > 12) {
        monthError.innerHTML = "Must be a valid month";

        return false;
      }
    } catch (error) {}
    return true;
  }
  function yearValidation() {
    let year = document.getElementById("dob-year").value;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    try {
      if (year.length == 0) {
        yearError.innerHTML = "This field is required";
        return false;
      } else if (year <= 0 || year.length > 4) {
        yearError.innerHTML = "Must be a valid year";
        return false;
      } else if (year >= currentYear) {
        yearError.innerHTML = "Must be in the past";
        return false;
      }
    } catch (error) {
      yearError.innerHTML = "";
    }
    return true;
  }
} catch (error) {}

function calculateAge() {
  let dobDay = parseInt(document.getElementById("dob-day").value);
  let dobMonth = parseInt(document.getElementById("dob-month").value);
  let dobYear = parseInt(document.getElementById("dob-year").value);
  let today = new Date();
  let birthDate = new Date(dobYear, dobMonth - 1, dobDay);
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (!dayValidation() || !monthValidation() || !yearValidation()) {
    return false;
  } else if (dobDay === 0 || dobMonth === 0 || dobYear === 0) {
    document.getElementById("age").innerHTML =
      "Please enter a valid date of birth";
  } else if (birthDate > today) {
    document.getElementById("age").innerHTML =
      "Date of birth cannot be in the future";
  } else {
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
    if (ageDays < 0) {
      let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      ageDays += lastMonth.getDate();
      ageMonths--;
    }
    document.getElementById("days").innerHTML = ageDays;
    document.getElementById("months").innerHTML = ageMonths;
    document.getElementById("years").innerHTML = ageYears;
    document.getElementById("day-error").innerHTML = "";
    document.getElementById("month-error").innerHTML = "";
    document.getElementById("year-error").innerHTML = "";
  }
}
