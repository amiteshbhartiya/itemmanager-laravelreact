<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
*/

$factory->define(App\Model\ItemInventory::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->name,
    ];
});
