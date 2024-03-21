/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const setOfIngredients = new Set();
  for (const ingredient of supplies) setOfIngredients.add(ingredient);
  const result = [];
  let track = true;
  while (track) {
    track = false;
    for (let i = 0; i < recipes.length; i++) {
      let recipe = recipes[i];
      let ingred = ingredients[i];
      if (result.indexOf(recipe) >= 0) continue;
      let hasAllIngredients = true;
      for (const ing of ingred) {
        if (!setOfIngredients.has(ing)) {
          hasAllIngredients = false;
          break;
        }
      }
      if (hasAllIngredients) {
        setOfIngredients.add(recipe);
        result.push(recipe);
        track = true;
      }
    }
  }
  return result;
};
