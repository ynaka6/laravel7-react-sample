<?php

namespace App\Http\Controllers\Api\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ListContrtoller extends Controller
{
    public function index()
    {
        sleep(1);
        return [
            [ 'id' => 1, 'name' => '商品１' ],
            [ 'id' => 2, 'name' => '商品２' ],
            [ 'id' => 3, 'name' => '商品３' ],
            [ 'id' => 4, 'name' => '商品４' ],
            [ 'id' => 5, 'name' => '商品５' ]
        ];
    }
}
