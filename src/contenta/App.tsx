import React, { useState, useEffect } from 'react';

import { Header } from '../solution/Header';

import { RecipeCard } from './RecipeCard';
import { recipes_data } from './services/data';
import { fetchRecipes } from './services/recipes.service';

/**
 * Exercice :
 * 1) Use recipes.services.ts to fetch recipes
 * 2) Modify recipes.services.ts to fetch the Contenta recipes example
 *    url: https://live-contentacms.pantheonsite.io/api/recipes
 *   
 *   Warning: you will need to fetch several urls for each recipe to get all infos :
 *      - category: recipe.relationships.category.links.related => category.attributes.name
 *      - photo: recipe.relationships.image.links.related
 *                => image.relationships.thumbnail.links.related
 *                => thumbnail.attributes.url
 * 
 *   => When you have all infos from Contenta example, 
 *          the object should match Recipe typescript interface
 * 
 */

export const App: React.FC = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  return (
    <>
      <Header />
      <main>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </main>
    </>
  );
};
