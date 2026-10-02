export type Ingredient = {
  id: number;
  amount: number | null;
  unit: string | null;
  name: string;
  note: string | null;
};

export type Step = {
  id: number;
  description: string;
};

export type Recipe = {
  id: number;
  title: string;
  description: string | null;
  servings: number;
  preparationTime: number;
  ingredients: Ingredient[];
  steps: Step[];
};
