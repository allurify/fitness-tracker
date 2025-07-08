const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: String,
  bodyPart: {
    type: String,
    enum: ['abs', 'legs', 'shoulders', 'chest', 'triceps', 'biceps', 'back', 'full-body']
  },
  timeMinutes: Number,
  caloriesBurned: Number,
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'] }
});

const exercises = [
  // --- Abs ---
  { name: 'Crunches', bodyPart: 'abs', timeMinutes: 10, caloriesBurned: 50, difficulty: 'beginner' },
  { name: 'Leg Raises', bodyPart: 'abs', timeMinutes: 10, caloriesBurned: 45, difficulty: 'beginner' },
  { name: 'Plank', bodyPart: 'abs', timeMinutes: 5, caloriesBurned: 40, difficulty: 'intermediate' },
  { name: 'Bicycle Crunches', bodyPart: 'abs', timeMinutes: 10, caloriesBurned: 55, difficulty: 'intermediate' },
  { name: 'Sit-ups', bodyPart: 'abs', timeMinutes: 15, caloriesBurned: 60, difficulty: 'beginner' },
  { name: 'Mountain Climbers', bodyPart: 'abs', timeMinutes: 10, caloriesBurned: 70, difficulty: 'advanced' },

  // --- Legs ---
  { name: 'Squats', bodyPart: 'legs', timeMinutes: 15, caloriesBurned: 80, difficulty: 'intermediate' },
  { name: 'Lunges', bodyPart: 'legs', timeMinutes: 15, caloriesBurned: 85, difficulty: 'intermediate' },
  { name: 'Step-Ups', bodyPart: 'legs', timeMinutes: 12, caloriesBurned: 75, difficulty: 'intermediate' },
  { name: 'Wall Sits', bodyPart: 'legs', timeMinutes: 10, caloriesBurned: 60, difficulty: 'beginner' },
  { name: 'Jump Squats', bodyPart: 'legs', timeMinutes: 10, caloriesBurned: 90, difficulty: 'advanced' },
  { name: 'Bulgarian Split Squats', bodyPart: 'legs', timeMinutes: 15, caloriesBurned: 100, difficulty: 'advanced' },

  // --- Shoulders ---
  { name: 'Overhead Press', bodyPart: 'shoulders', timeMinutes: 10, caloriesBurned: 65, difficulty: 'intermediate' },
  { name: 'Lateral Raise', bodyPart: 'shoulders', timeMinutes: 10, caloriesBurned: 60, difficulty: 'beginner' },
  { name: 'Front Raise', bodyPart: 'shoulders', timeMinutes: 10, caloriesBurned: 60, difficulty: 'beginner' },
  { name: 'Arnold Press', bodyPart: 'shoulders', timeMinutes: 15, caloriesBurned: 85, difficulty: 'advanced' },
  { name: 'Push Press', bodyPart: 'shoulders', timeMinutes: 10, caloriesBurned: 80, difficulty: 'intermediate' },
  { name: 'Plate Circles', bodyPart: 'shoulders', timeMinutes: 5, caloriesBurned: 50, difficulty: 'beginner' },

  // --- Chest ---
  { name: 'Push-Ups', bodyPart: 'chest', timeMinutes: 10, caloriesBurned: 60, difficulty: 'beginner' },
  { name: 'Incline Press', bodyPart: 'chest', timeMinutes: 15, caloriesBurned: 90, difficulty: 'intermediate' },
  { name: 'Chest Press', bodyPart: 'chest', timeMinutes: 15, caloriesBurned: 85, difficulty: 'intermediate' },
  { name: 'Chest Fly', bodyPart: 'chest', timeMinutes: 10, caloriesBurned: 70, difficulty: 'intermediate' },
  { name: 'Cable Crossover', bodyPart: 'chest', timeMinutes: 10, caloriesBurned: 75, difficulty: 'advanced' },
  { name: 'Dumbbell Bench Press', bodyPart: 'chest', timeMinutes: 15, caloriesBurned: 100, difficulty: 'advanced' },

  // --- Triceps ---
  { name: 'Tricep Dips', bodyPart: 'triceps', timeMinutes: 10, caloriesBurned: 60, difficulty: 'beginner' },
  { name: 'Skull Crushers', bodyPart: 'triceps', timeMinutes: 15, caloriesBurned: 85, difficulty: 'intermediate' },
  { name: 'Triceps Pushdown', bodyPart: 'triceps', timeMinutes: 10, caloriesBurned: 70, difficulty: 'intermediate' },
  { name: 'Overhead Triceps Extension', bodyPart: 'triceps', timeMinutes: 10, caloriesBurned: 65, difficulty: 'intermediate' },
  { name: 'Close-Grip Push-Ups', bodyPart: 'triceps', timeMinutes: 10, caloriesBurned: 70, difficulty: 'advanced' },
  { name: 'Bench Dips', bodyPart: 'triceps', timeMinutes: 10, caloriesBurned: 60, difficulty: 'beginner' },

  // --- Biceps ---
  { name: 'Dumbbell Curl', bodyPart: 'biceps', timeMinutes: 10, caloriesBurned: 50, difficulty: 'beginner' },
  { name: 'Hammer Curl', bodyPart: 'biceps', timeMinutes: 10, caloriesBurned: 55, difficulty: 'beginner' },
  { name: 'Concentration Curl', bodyPart: 'biceps', timeMinutes: 10, caloriesBurned: 60, difficulty: 'intermediate' },
  { name: 'EZ Bar Curl', bodyPart: 'biceps', timeMinutes: 15, caloriesBurned: 70, difficulty: 'intermediate' },
  { name: 'Chin-Ups', bodyPart: 'biceps', timeMinutes: 10, caloriesBurned: 90, difficulty: 'advanced' },
  { name: 'Preacher Curl', bodyPart: 'biceps', timeMinutes: 10, caloriesBurned: 60, difficulty: 'intermediate' },

  // --- Back ---
  { name: 'Deadlifts', bodyPart: 'back', timeMinutes: 20, caloriesBurned: 120, difficulty: 'advanced' },
  { name: 'Pull-Ups', bodyPart: 'back', timeMinutes: 15, caloriesBurned: 100, difficulty: 'advanced' },
  { name: 'Barbell Row', bodyPart: 'back', timeMinutes: 15, caloriesBurned: 90, difficulty: 'intermediate' },
  { name: 'Lat Pulldown', bodyPart: 'back', timeMinutes: 10, caloriesBurned: 80, difficulty: 'intermediate' },
  { name: 'T-Bar Row', bodyPart: 'back', timeMinutes: 10, caloriesBurned: 85, difficulty: 'intermediate' },
  { name: 'Superman Exercise', bodyPart: 'back', timeMinutes: 5, caloriesBurned: 40, difficulty: 'beginner' },

  // --- Full-body ---
  { name: 'Burpees', bodyPart: 'full-body', timeMinutes: 15, caloriesBurned: 100, difficulty: 'intermediate' },
  { name: 'Jump Rope', bodyPart: 'full-body', timeMinutes: 15, caloriesBurned: 120, difficulty: 'intermediate' },
  { name: 'High Knees', bodyPart: 'full-body', timeMinutes: 10, caloriesBurned: 90, difficulty: 'beginner' },
  { name: 'Jumping Jacks', bodyPart: 'full-body', timeMinutes: 10, caloriesBurned: 80, difficulty: 'beginner' },
  { name: 'Battle Ropes', bodyPart: 'full-body', timeMinutes: 10, caloriesBurned: 110, difficulty: 'advanced' },
  { name: 'Bear Crawls', bodyPart: 'full-body', timeMinutes: 10, caloriesBurned: 100, difficulty: 'advanced' }
];
