interface Recipe {
    id: string;
    title: string;
    difficulty: string;
    preparationTime: number;
    totalTime: number;
    ingredients: string[];
    instructions: string;
    photo: string;
    category: string;
}