<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\ItemInventory;
use App\Http\Resources\ItemCollection;
use Illuminate\Database\QueryException;

class ItemController extends Controller
{
    /**
     * Return all items
     *
     * @return json
     */
    public function index(){

        return new ItemCollection(ItemInventory::all());
    }

    /**
     * 
     */
    public function show($id) {
        
    }

    /**
     * 
     */
    public function store(Request $request) {
        try {
            $itemInventory = new ItemInventory;
            $itemInventory->name = $request->name;
            $itemInventory->is_picked = (bool)$request->is_picked;
            $itemInventory->save();
            return response()->json($itemInventory, 200);

        } catch(QueryException $e) {
            return response()->json([
                'error' => $e->getmessage()
            ], 500);
    }
}

    /**
     *  To Uodate 'is_picked' flag
     */
    public function update(Request $request, $id)
    {  
       $itemInventory = ItemInventory::findOrFail(urldecode($id));
       $itemInventory->is_picked = (bool)$request->is_picked;
       $itemInventory->save();

       return response()->json($itemInventory, 200);
    }
    /**
     * 
     */
    public function destroy() {
        
    }
    
}