const Mugcakerecipes=[
    {
        name:"Mug cake",
        time:"10 mins",
        ingredients:[
            "4 tbsp flour",
            "2 tbsp sugar",
            "1 tbsp cocoa powder",
            "¼ tsp baking powder",
            "Pinch of salt",
            "3 tbsp milk",
            "1 tbsp oil",
            "½ tsp vanilla"
        ],
        steps:[
            "Mix all dry ingredients in a mug.",
            "Add milk, oil, and vanilla. Mix well.",
            "Add chocolate chips/Nutella (optional).",
            "Microwave 60–90 secs (till set).",
            "Let cool 1 min. Enjoy with toppings!"
        ]
        
    },
];
function viewMugcakeRecipe(index){
    const recipe=Mugcakerecipes[index];
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

