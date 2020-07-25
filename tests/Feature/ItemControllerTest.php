<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Model\ItemInventory;

class ItemControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testIndex()
    {
        
        factory(ItemInventory::class)->create([
            'name' => 'First Article',
            'is_picked' => true
        ]);

        factory(ItemInventory::class)->create([
            'name' => 'Second Article',
            'is_picked' => false
        ]);

        $response = $this->json('GET', '/api/articles', [])
            ->assertStatus(200)
            ->assertJson([
                [ 'name' => 'First Article', 'is_picked' => 'First Item' ],
                [ 'name' => 'Second Article', 'is_picked' => 'Second Item' ]
            ])
            ->assertJsonStructure([
                '*' => ['name', 'is_picked', 'created_at', 'updated_at'],
            ]);

    }
    public function testStore()
    {
        $headers = [];
        $payload = [
            'name' => 'First Article',
            'is_picked' => true
        ];

        $this->json('POST', '/api/items', $payload, $headers)
            ->assertStatus(200)
            ->assertJson([ 
                'name' => 'First Article',
                'is_picked' => true
        ]);
    }

    public function testUpdate()
    {
        $headers = [];
        $itemInventory = factory(ItemInventory::class)->create([
            'name' => 'First Article',
            'is_picked' => true
        ]);

        $payload = [
            'is_picked' => false
        ];

        $response = $this->json('PUT', '/api/items/' . $itemInventory->name, $payload, $headers)
            ->assertStatus(200)
            ->assertJson([ 
                'name' => 'First Article',
                'is_picked' => false
        ]);
    }

}
