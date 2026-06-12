<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // generate a random title for the task and remove the dot at the end of the sentence
            'title' => rtrim($this->faker->sentence(4), '.'),
            // draws one of the available statuses
            'status' => $this->faker->randomElement(['pending', 'in_progress', 'completed']),
        ];
    }
}
