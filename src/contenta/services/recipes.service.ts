import { recipes_data } from "./data";

export const fetchRecipes = async () => {
    // Replace this with fetch calls
    // url: https://live-contentacms.pantheonsite.io/api/recipes

    const response = await fetch('https://live-contentacms.pantheonsite.io/api/recipes');
    const json = await response.json();

    

    const results = await Promise.all(
        json.data.map(async (recipeRaw: any) => {      

            // fetch for category
            const responseCategory = await fetch(recipeRaw.relationships.category.links.related);
            const categoryJson = await responseCategory.json();
            const categoryName = categoryJson.data.attributes.name;

            // fetch image
            const responseImage = await fetch(recipeRaw.relationships.image.links.related);
            const imageJson = await responseImage.json();
            const responseThumbnail = await fetch(imageJson.data.relationships.thumbnail.links.related);
            const thumbnailJson = await responseThumbnail.json();
            const imageUrl = thumbnailJson.data.attributes.url;

            return {
                id: recipeRaw.id,
                title: recipeRaw.attributes.title,
                difficulty: recipeRaw.attributes.difficulty,
                preparationTime: recipeRaw.attributes.preparationTime,
                totalTime: recipeRaw.attributes.totalTime,
                ingredients: recipeRaw.attributes.ingredients === null ? [] : recipeRaw.attributes.ingredients,
                instructions: recipeRaw.attributes.instructions,
                photo: imageUrl,
                category: categoryName
            };
        })
    );

    return results;

    // return fetch('https://live-contentacms.pantheonsite.io/api/recipes')
    //     .then(response => response.json())
    //     .then(json => json.data)
    //     .then(recipes => {
            

    //         recipes.forEach((recipeRaw: any) => {      
                
    //             fetch(recipeRaw.relationships.category.related).then(r => r.json()).then(category => {
                    
    //                 const transformedRecipes: Recipe[] = [];

    //                 transformedRecipes.push({
    //                     id: recipeRaw.id,
    //                     title: recipeRaw.attributes.title,
    //                     difficulty: recipeRaw.attributes.difficulty,
    //                     preparationTime: recipeRaw.attributes.preparationTime,
    //                     totalTime: recipeRaw.attributes.totalTime,
    //                     ingredients: recipeRaw.attributes.ingredients === null ? [] : recipeRaw.attributes.ingredients,
    //                     instructions: recipeRaw.attributes.instructions,
    //                     photo: 'https://live-contentacms.pantheonsite.io/sites/default/files/5631421314_9db3bd149d_b.jpg',
    //                     category: category
    //                 });

    //                 return transformedRecipes;
    //             });

                
    //         });

    //         return transformedRecipes;
    //     });
}
