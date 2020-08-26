import { Recipe } from "../models/Recipe";

export const fetchRecipes = async () => {

    const response = await fetch('https://live-contentacms.pantheonsite.io/api/recipes');
    const json = await response.json();    

    const results = await Promise.all(
        json.data.map(async (recipeRaw: any) => {      
            // fetch for category
            const category = await fetchRecipeCategory(recipeRaw.relationships.category);
            // fetch image
            const imageUrl = await fetchRecipeImageUrl(recipeRaw.relationships.image);

            return Recipe.fromRawData(recipeRaw, category, imageUrl);
        })
    );

    return results;
}


const fetchRecipeCategory = async (categoryRelationShip): Promise<string> => {
    const response = await fetch(categoryRelationShip.links.related);
    const categoryJson = await response.json();
    const categoryName = categoryJson.data.attributes.name
    return categoryName;
}

const fetchRecipeImageUrl = async (imageRelationShip): Promise<string> => {
    const responseImage = await fetch(imageRelationShip.links.related);
    const imageJson = await responseImage.json();

    const responseThumbnail = await fetch(imageJson.data.relationships.thumbnail.links.related);
    const thumbnailJson = await responseThumbnail.json();
    return thumbnailJson.data.attributes.url;
}