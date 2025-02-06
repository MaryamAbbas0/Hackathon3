// /schemas/food.ts
export default {
    name: 'food',
    title: 'Food Item',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Food Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string', 
        options: {
          list: [
            { title: 'Vegetarian', value: 'vegetarian' },
            { title: 'Non-Vegetarian', value: 'non-vegetarian' },
            { title: 'Vegan', value: 'vegan' },
            { title: 'Gluten-Free', value: 'gluten-free' },
          ],
        },
      },
      {
        name: 'ingredients',
        title: 'Ingredients',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'prepTime',
        title: 'Preparation Time',
        type: 'string',
      },
      {
        name: 'calories',
        title: 'Calories',
        type: 'number',
      },
    ],
  };
  