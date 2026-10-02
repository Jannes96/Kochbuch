import { Recipe } from "../types/recipe";

export const FAKE_RECIPES: Recipe[] = [
  {
    id: 1,
    title: "Pfannkuchen",
    description: "Leckere Pfannkuchen, die schnell zubereitet sind.",
    servings: 4,
    preparationTime: 30,
    ingredients: [
      { id: 1, amount: 250, unit: "g", name: "Mehl", note: null },
      { id: 2, amount: 3, unit: null, name: "Eier", note: null },
      { id: 3, amount: 500, unit: "ml", name: "Milch", note: null },
      { id: 4, amount: 1, unit: "TL", name: "Salz", note: null },
    ],
    steps: [
      { id: 1, description: "Mehl, Eier und Milch glatt verrühren." },
      { id: 2, description: "Salz hinzufügen." },
      {
        id: 3,
        description:
          "Für die optimale Konsistenz noch etwas Wasser hinzufügen. Danach den Teig ca. 30. Minuten quellen lassen.",
      },
      {
        id: 4,
        description:
          "Eine Flocke Butter (Alternativ auch Sonnenblumenöl) in die Pfanne geben und die Pfannekuchen in einer heißen Pfanne goldgelb ausbacken. Nach 2 - 3 Pfannekuchen wieder etwas Butter in die Pfanne geben.",
      },
    ],
  },
  {
    id: 2,
    title: "Reibeplätzchen",
    description: "Leckere Reibeplätzchen, die schnell zubereitet sind.",
    servings: 4,
    preparationTime: 30,
    ingredients: [
      { id: 1, amount: 1, unit: "kg", name: "Kartoffeln", note: null },
      { id: 2, amount: 1, unit: null, name: "Zwiebeln", note: null },
      { id: 3, amount: 2, unit: null, name: "Eier", note: null },
      { id: 4, amount: 120, unit: "g", name: "Mehl", note: null },
      { id: 5, amount: 1, unit: "TL", name: "Salz", note: null },
    ],
    steps: [
      {
        id: 1,
        description:
          "Schäle zuerst die Kartoffeln und reibe sie. Gib sie dann in ein Sieb und drücke sie aus, so dass der Kartoffelsaft ablaufen kann.",
      },
      {
        id: 2,
        description: "Schäle die Zwiebel und schneide sie in feine Würfel.",
      },
      {
        id: 3,
        description:
          "Mische die Kartoffelraspel mit den Zwiebelwürfeln, den Eiern, Salz und Mehl. Gern kannst du auch etwas Pfeffer oder geriebene Muskatnuss dazugeben.",
      },
      {
        id: 4,
        description:
          "Erhitze das Sonnenblumenöl in einer großen Pfanne und brate die Kartoffelpuffer darin nacheinander aus. Ich gebe pro Puffer immer einen Esslöffel Teig hinein. So kann ich 3 Kartoffelpuffer auf einmal braten. Halte sie zwischen zwei Tellern warm, bis alle fertig sind.",
      },
    ],
  },
  {
    id: 3,
    title: "Wiener Schnitzel",
    description:
      "Leckere Wiener Schnitzel, wie aus Wien. Das originale Rezept nutzt Kalb. Jedoch ist Schwein wie auch Hähnchen ebenfalls geeignet. Dann redet man allerdings von einem Schnitzel nach Wiener Art.",
    servings: 4,
    preparationTime: 30,
    ingredients: [
      {
        id: 1,
        amount: 1,
        unit: "kg",
        name: "Schnitzel",
        note: "Kalb, Hähnchen oder Schwein.",
      },
      { id: 2, amount: null, unit: null, name: "Etwas Mehl", note: null },
      { id: 3, amount: 2, unit: null, name: "Eier", note: null },
      {
        id: 4,
        amount: null,
        unit: null,
        name: "Paniermehl und/oder Panko",
        note: null,
      },
      { id: 5, amount: 1, unit: "TL", name: "Salz", note: null },
      { id: 6, amount: 1, unit: "TL", name: "Pfeffer", note: null },
    ],
    steps: [
      {
        id: 1,
        description:
          "Schneide das Schnitzel per Schmetterlingsschnitt auf, sodass es dünner wird. Klopfe es dann mit einem Fleischklopfer platt.",
      },
      {
        id: 2,
        description:
          "Bereite die sogenannte Mehlstraße vor - Ein Teller mit Mehl, ein Teller mit verquirlten Eiern und Salz und Pfeffer und ein Teller mit Paniermehl. Wälze es zuerst in Mehl, dann in verquirlten Eiern und zuletzt in Paniermehl. Für eine besonders knusprige Panade kannst du auch Panko oder auch ein paar Cornflakes verwenden.",
      },
      {
        id: 3,
        description:
          "Nachdem du das erste Schnitzel vorbereitet hast, kannst du das Braten der Schnitzel vorbereiten. Gebe dafür etwas Öl in eine Pfanne. Achte darauf das genug Öl in der Pfanne ist, damit das Schnitzel von beiden Seiten knusprig gebraten werden kann. Erhitze nun das Öl auf eine mittlere bis hohe Temperatur.",
      },
      {
        id: 4,
        description:
          "Sobald das Öl heiß genug ist kannst du vorsichtig das Schnitzel in die Pfanne geben. Kleiner Tipp: Du merkst das Öl ist heiß genug, wenn du ein paar Tropfen Wasser in die Pfanne gibst und diese sofort anfangen zu zischen oder wenn du ein kleines Stück Holz in die Pfanne gibst und sich dort Blasen bilden. Brate das Schnitzel von beiden Seiten goldbraun an.",
      },
      {
        id: 5,
        description:
          "Wiederhole den Vorgang mit den restlichen Schnitzeln. Achte darauf, dass du die Schnitzel nicht zu lange brätst, da sie sonst trocken werden.",
      },
    ],
  },
];
