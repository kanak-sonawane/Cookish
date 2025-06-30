const Pastarecipes=[
    {
        name:"Red Sauce Pasta",
        time:"20 mins",
        ingredients:[
            "Pasta: 2 cups",
            "Olive Oil: 2-4 tablespoons",
            "Onion: 1 large",
            "Garlic: 2-4 cloves",
            "Tomatoes: 5 medium-sized,crushed",
            "Chilli Flakes: 1 teaspoon",
            "Mixed Herbs: 1 teaspoon",
            "Salt",
            "Pepper",
            "Grated Cheese",
            "Fresh Basil"
        ],
        steps:[
            "1.Cook the Pasta:",
            "Boil 4-5 cups of water.",
            "Add 1 teaspoon of salt.",
            "Add pasta cook, drain, and save some pasta water.",
            "2.Prepare the Red Sauce:",
            "Heat olive oil,Sauté chopped garlic (30s)",
            "Add onion and cook (5–7 mins)",
            "Add tomatoes (chopped/canned), cook until soft. ",
            "Stir in the red chilli flakes, mixed herbs, salt, and pepper.",
            "3.Combine Pasta and Sauce:",
            "Add the pasta to the sauce in the pan.",
            "Mix in grated cheese.",
            "And your Pasta is ready."
        ]
        
    },
];
function viewPastaRecipe(index){
    const recipe=Pastarecipes[index];
document.body.innerHTML = `
    <h2>${recipe.name}</h2>
    <p><strong>Estimated Time:</strong> ${recipe.time}</p>
    <h3 class="Ingredients-heading">Ingredients</h3>
    <div class="ingredient-pills">
    ${recipe.ingredients.map(i => `<span class="pill">${i}</span>`).join("")}
    </div>    
    <h3 class="steps-heading">Steps</h3>
    <div class="steps-fancy">
    <div class="step-fancy-card">
    <ul class="ultra-light-steps">
     ${recipe.steps.map((step, i) => `<li><b>${i + 1}.</b> ${step}</li>`).join("")}
    </ul>


  `;
}

