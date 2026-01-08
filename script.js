function saveUserDetails() {
  localStorage.setItem("name", name.value);
  localStorage.setItem("age", age.value);
  localStorage.setItem("weight", weight.value);
  localStorage.setItem("blood", blood.value);
  window.location.href = "goal.html";
}

function selectGoal(goal) {
  localStorage.setItem("goal", goal);
  window.location.href = "diet.html";
}

function getAgeGroup(age) {
  if (age <= 19) return "teen";
  if (age <= 50) return "adult";
  return "old";
}

const dietData = {
  loss: {
    teen: ["Salad", "Fruits", "Oats"],
    adult: ["Vegetable Soup", "Brown Rice", "Green Tea"],
    old: ["Steamed Veggies", "Fruit Bowl", "Herbal Tea"]
  },
  gain: {
    teen: ["Milk", "Banana", "Eggs"],
    adult: ["Paneer", "Rice & Dal", "Nuts"],
    old: ["Milk", "Soft Fruits", "Boiled Veggies"]
  },
  healthy: {
    teen: ["Balanced Meals", "Fruits"],
    adult: ["Balanced Diet", "Hydration"],
    old: ["Light Meals", "Easy Digestion Foods"]
  }
};

if (location.pathname.includes("diet.html")) {
  const age = localStorage.getItem("age");
  const goal = localStorage.getItem("goal");
  const ageGroup = getAgeGroup(age);

  const meals = dietData[goal][ageGroup];

  dietPlan.innerHTML = `
    <h3>Morning</h3><p>${meals[0]}</p>
    <h3>Afternoon</h3><p>${meals[1]}</p>
    <h3>Night</h3><p>${meals[2] || meals[0]}</p>
    <p><b>Weekly Schedule:</b> Follow this plan for 6 months</p>
  `;
}

function goProgress() {
  window.location.href = "progress.html";
}

function backToDiet() {
  window.location.href = "diet.html";
}
