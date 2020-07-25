<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\ItemInventory;
use App\Http\Resources\ItemCollection;
use Illuminate\Database\QueryException;
use App\Repositories\Repository;

class ItemController extends Controller
{
    
  /**
   * variable that we can use the repository from
   */
   protected $model;

  /**
   * Constructor for default object initialisation
   *
   */
   public function __construct(ItemInventory $itemInventory)
   {
       // set the model
       $this->model = new Repository($itemInventory);
   }
    
   /**
     * Return all items
     *
     * @return json
     */
    public function index(){

        return new ItemCollection($this->model->all());
    }

    /**
     * To show specific product
     */
    public function show($id) {
        
    }

    /**
     * To save new item
     * 
     * @return json
     */
    public function store(Request $request)
    {

        try {
            $itemInventory = $this->model->getModel();
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
        //commond exceptions are handled the global Handle.php
       $itemInventory = $this->model->show(urldecode($id));
       $itemInventory->is_picked = (bool)$request->is_picked;
       $itemInventory->save();

       return response()->json($itemInventory, 200);
    }
    /**
     * 
     */
    public function destroy()
    {
        
    }
    
}