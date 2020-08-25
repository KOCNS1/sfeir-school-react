import { recipes_data } from "./data";


export const fetchRecipes = () => {
    // Replace this with fetch calls
    // url: https://live-contentacms.pantheonsite.io/api/recipes
    return Promise.resolve(recipes_data);
}