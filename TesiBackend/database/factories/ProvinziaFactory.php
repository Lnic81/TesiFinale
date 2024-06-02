<?php

namespace Database\Factories;

use App\Models\Provincia;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Provinzia>
 */
class ProviziaFactory extends Factory
{
    protected $model = Provincia::class;

    public function definition()
    {
        return [
            'nome' => $this->faker->word,
        ];
    }
}
