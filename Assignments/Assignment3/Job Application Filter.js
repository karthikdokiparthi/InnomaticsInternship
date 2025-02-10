function isEligibleForJob(age, experience, qualification) {
    let newQualification = qualification.toLowerCase();
    if (age >= 21 && age <= 55 && experience >= 2 && newQualification === "bachelors degree") {
        return 'Your Eligible for this Job';
    } else {
        return 'Your not Eligible for this Job';
    }
}

let age = 22;
let experience = 2;
let qualification = 'Bachelors degree';
let result = isEligibleForJob(age, experience, qualification);
console.log(result);