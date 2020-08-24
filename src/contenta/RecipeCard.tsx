import React from 'react';
import { Card, CardContent, CardImage, CardHeader, CardInfo } from '../solution/Card';

type RecipeCardProps = {};

export const RecipeCard: React.FC<RecipeCardProps> = () => (
  <Card className="mdc-card">
    <CardContent type="person-info">
      <CardImage url="https://live-contentacms.pantheonsite.io/sites/default/files/5631421314_9db3bd149d_b.jpg" desc="photo of recipe" />
      <CardHeader title={<a href="/recipe/a542e833-edfe-44a3-a6f1-7358b115af4b">Frankfurter salad with mustard dressing</a>} subTitle="Difficulty: easy" />
      <CardInfo icon="email">
        <a href="mailto:Leanne.Woodard@BIOSPAN.com">woodard.l@acme.com</a>
      </CardInfo>
      <CardInfo icon="phone">
        <a href="tel:0784112248">0784112248</a>
      </CardInfo>
      <CardInfo icon="supervisor_account" desc="manager">
        <a href="/person/5763cd4d3b57c672861bfa1f">Erika</a>
      </CardInfo>
    </CardContent>
  </Card>
);
