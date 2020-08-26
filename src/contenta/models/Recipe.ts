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

    static fromRawData(recipeRaw: any, category: string, imageUrl: string): Recipe {
        return {
            id: recipeRaw.id,
            title: recipeRaw.attributes.title,
            difficulty: recipeRaw.attributes.difficulty,
            preparationTime: recipeRaw.attributes.preparationTime,
            totalTime: recipeRaw.attributes.totalTime,
            ingredients: recipeRaw.attributes.ingredients === null ? [] : recipeRaw.attributes.ingredients,
            instructions: recipeRaw.attributes.instructions,
            photo: imageUrl,
            category: category
        };
    }
}