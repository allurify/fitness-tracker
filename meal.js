const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  type: { type: String, enum: ['breakfast', 'lunch', 'dinner'] },
  name: String,
  instructions: String,
  calories: Number
});

module.exports = mongoose.model('Meal', mealSchema);

const meals = [
  // --- Breakfast (15) ---
  { type: 'breakfast', name: 'Oats Banana Smoothie', instructions: 'Blend oats, banana, and milk.', calories: 300 },
  { type: 'breakfast', name: 'Boiled Eggs & Toast', instructions: 'Boil eggs and toast bread.', calories: 280 },
  { type: 'breakfast', name: 'Peanut Butter Oats', instructions: 'Cook oats and top with peanut butter.', calories: 350 },
  { type: 'breakfast', name: 'Avocado Toast', instructions: 'Toast bread and top with mashed avocado.', calories: 320 },
  { type: 'breakfast', name: 'Protein Shake', instructions: 'Mix protein powder with water or milk.', calories: 250 },
  { type: 'breakfast', name: 'Idli with Sambar', instructions: 'Steam idlis and serve with sambar.', calories: 270 },
  { type: 'breakfast', name: 'Poha', instructions: 'Cook flattened rice with spices and veggies.', calories: 280 },
  { type: 'breakfast', name: 'Upma', instructions: 'Cook semolina with vegetables.', calories: 290 },
  { type: 'breakfast', name: 'Muesli with Milk', instructions: 'Mix muesli with cold/hot milk.', calories: 330 },
  { type: 'breakfast', name: 'Greek Yogurt Parfait', instructions: 'Layer yogurt, fruits, and granola.', calories: 310 },
  { type: 'breakfast', name: 'Banana Pancakes', instructions: 'Mix banana and eggs, cook on skillet.', calories: 340 },
  { type: 'breakfast', name: 'Stuffed Veg Sandwich', instructions: 'Fill whole grain bread with veggies.', calories: 360 },
  { type: 'breakfast', name: 'Besan Chilla', instructions: 'Cook gram flour pancakes with vegetables.', calories: 310 },
  { type: 'breakfast', name: 'Egg Bhurji', instructions: 'Scramble eggs with onions, tomato, spices.', calories: 300 },
  { type: 'breakfast', name: 'Chia Seed Pudding', instructions: 'Soak chia in milk overnight, add fruits.', calories: 290 },

  // --- Lunch (15) ---
  { type: 'lunch', name: 'Grilled Chicken + Rice', instructions: 'Grill chicken and serve with boiled rice.', calories: 500 },
  { type: 'lunch', name: 'Paneer Curry + Chapati', instructions: 'Cook paneer in curry and serve with chapati.', calories: 450 },
  { type: 'lunch', name: 'Fish + Quinoa', instructions: 'Grill fish and serve with quinoa.', calories: 480 },
  { type: 'lunch', name: 'Dal Rice', instructions: 'Cook lentils and rice together.', calories: 420 },
  { type: 'lunch', name: 'Chicken Salad', instructions: 'Mix grilled chicken with leafy greens.', calories: 400 },
  { type: 'lunch', name: 'Rajma + Rice', instructions: 'Cook kidney beans with rice.', calories: 430 },
  { type: 'lunch', name: 'Veg Wrap', instructions: 'Wrap cooked veggies in tortilla.', calories: 390 },
  { type: 'lunch', name: 'Soya Curry + Roti', instructions: 'Cook soya chunks with curry, serve with roti.', calories: 410 },
  { type: 'lunch', name: 'Egg Curry + Rice', instructions: 'Make boiled egg curry and serve with rice.', calories: 470 },
  { type: 'lunch', name: 'Chole + Pulao', instructions: 'Cook chickpeas and serve with flavored rice.', calories: 450 },
  { type: 'lunch', name: 'Veg Biryani + Raita', instructions: 'Cook biryani rice and serve with curd.', calories: 490 },
  { type: 'lunch', name: 'Tofu Stir Fry + Rice', instructions: 'Stir fry tofu and serve with rice.', calories: 430 },
  { type: 'lunch', name: 'Kadhi + Jeera Rice', instructions: 'Cook kadhi and cumin rice.', calories: 410 },
  { type: 'lunch', name: 'Stuffed Paratha + Curd', instructions: 'Stuff paratha with potato/paneer.', calories: 480 },
  { type: 'lunch', name: 'Quinoa Bowl with Chickpeas', instructions: 'Toss cooked quinoa with chickpeas.', calories: 460 },

  // --- Dinner (15) ---
  { type: 'dinner', name: 'Stir Fry Veggies', instructions: 'Stir fry vegetables with light oil.', calories: 320 },
  { type: 'dinner', name: 'Grilled Fish', instructions: 'Grill seasoned fish fillet.', calories: 400 },
  { type: 'dinner', name: 'Moong Dal Khichdi', instructions: 'Cook rice, lentils and veggies.', calories: 360 },
  { type: 'dinner', name: 'Mixed Salad', instructions: 'Toss raw veggies with olive oil.', calories: 280 },
  { type: 'dinner', name: 'Tofu Stir Fry', instructions: 'Stir fry tofu with soy sauce and veggies.', calories: 330 },
  { type: 'dinner', name: 'Soup & Toast', instructions: 'Serve hot veggie/chicken soup with toast.', calories: 300 },
  { type: 'dinner', name: 'Chicken Broth', instructions: 'Simmer chicken and spices in water.', calories: 350 },
  { type: 'dinner', name: 'Paneer Bhurji + Roti', instructions: 'Scrambled paneer with roti.', calories: 420 },
  { type: 'dinner', name: 'Daliya', instructions: 'Cook cracked wheat with milk or veggies.', calories: 310 },
  { type: 'dinner', name: 'Scrambled Eggs + Veggies', instructions: 'Cook eggs with chopped vegetables.', calories: 370 },
  { type: 'dinner', name: 'Masoor Dal + Rice', instructions: 'Cook red lentils and serve with rice.', calories: 400 },
  { type: 'dinner', name: 'Low-Fat Paneer Salad', instructions: 'Toss paneer cubes with lettuce and lemon.', calories: 320 },
  { type: 'dinner', name: 'Spinach Soup', instructions: 'Boil and blend spinach, season to taste.', calories: 250 },
  { type: 'dinner', name: 'Chicken Tikka + Salad', instructions: 'Grill marinated chicken with raw salad.', calories: 430 },
  { type: 'dinner', name: 'Vegetable Stew + Brown Bread', instructions: 'Serve veg stew with toast.', calories: 380 }
];
