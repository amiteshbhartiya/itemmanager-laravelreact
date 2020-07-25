<?php

use Illuminate\Database\Seeder;

class ItemInventorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Model\ItemInventory::class, 5)->create();
    }
}
