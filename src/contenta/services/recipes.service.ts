import { Recipe } from '../models/Recipe';
const API_base = 'https://live-contentacms.pantheonsite.io/api/recipes';

export const fetchRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(`${API_base}?include=category,image,image.thumbnail`);

  const data = await response.json();
  const categoriesMap = createCategoriesMapFromIncluded(data.included);
  const imagesMap = createThumbnailMapFromIncluded(data.included);

  const recipes: Recipe[] = data.data.map((recipeRaw) => {
    return Recipe.fromRaw(
      recipeRaw,
      categoriesMap[recipeRaw.relationships.category.data.id],
      imagesMap[recipeRaw.relationships.image.data.id]
    );
  });

  return recipes;
};

const createCategoriesMapFromIncluded = (included) =>
  included
    .filter((include: any): any => include.type === 'categories')
    .reduce((acc, current: any): any => {
      acc[current.id] = current.attributes.name;
      return acc;
    }, {});

/**
 * {
 *    '12357TRYRTYRTY': 'Salad',
 *    'rgergerogj234234: 'Main Course'
 * }
 */

const createThumbnailMapFromIncluded = (included) => {
  const thumbsMap = included
    .filter((include) => include.type === 'files')
    .reduce((mapAccumulator, current) => {
      mapAccumulator[current.id] = current.attributes.url;
      return mapAccumulator;
    }, {});

  return included
    .filter((include) => include.type === 'images')
    .reduce((acc, current) => {
      acc[current.id] = thumbsMap[current.relationships.thumbnail.data.id];
      return acc;
    }, {});
};

/**
 * map images
 * {
 *     'zrzerezr234234': 'zerzegzegz' 
 * }
 * 
 * map thumbnail
 * {
 *    'zerzegzegz': 'http://image.png'
 * }
 */
