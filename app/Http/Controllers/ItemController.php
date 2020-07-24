<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\ItemInventory;
use App\Http\Resources\ItemCollection;

class ItemController extends Controller
{
    /**
     * Return all items
     *
     * @return json
     */
    public function getAllItem(){
         return new ItemCollection(ItemInventory::all());

    }
}