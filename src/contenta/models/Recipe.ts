export class Recipe {
  id: string;
  title: string;
  difficulty: string;
  preparationTime: number;
  totalTime: number;
  ingredients: string[];
  instructions: string;
  photo: string;
  category: string;

  static fromRaw(recipeRaw, categoryName = '', photoUrl = '') {
    return {
      id: recipeRaw.id,
      title: recipeRaw.attributes.title,
      preparationTime: recipeRaw.attributes.preparationTime,
      difficulty: recipeRaw.attributes.difficulty,
      totalTime: recipeRaw.attributes.totalTime,
      ingredients: recipeRaw.attributes.ingredients || [],
      instructions: recipeRaw.attributes.instructions,
      category: categoryName,
      photo: photoUrl,
    };
  }
}
