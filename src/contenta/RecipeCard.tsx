import React from 'react';
import { Card, CardContent, CardImage, CardHeader, CardInfo } from '../solution/Card';
import { Recipe } from './models/Recipe';

type RecipeCardProps = {
  recipe: Recipe;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => (
  <Card className="mdc-card">
    <CardContent type="person-info">
      <CardImage url={recipe.photo} desc="photo of recipe" />
      <CardHeader
        title={<a href={`/recipe/${recipe.id}`}>{recipe.title}</a>}
        subTitle={`Difficulty: ${recipe.difficulty}`}
      />
      <CardInfo icon="category">{recipe.category}</CardInfo>
      <CardInfo icon="list">
        <span>Ingredients</span>
        <ul style={{ listStyleType: 'circle', fontSize: '0.8rem', whiteSpace: 'normal' }}>
          {recipe.ingredients.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </CardInfo>
      <CardInfo icon="construction">
        <span>Instructions</span>
        <div style={{ marginTop: '1rem', width: '400px', fontSize: '0.8rem', whiteSpace: 'normal' }}>
          {recipe.instructions}
        </div>
      </CardInfo>
      <CardInfo icon="av_timer">{recipe.preparationTime} minutes de préparation</CardInfo>
      <CardInfo icon="timer">{recipe.totalTime} minutes au total</CardInfo>
    </CardContent>
  </Card>
);
