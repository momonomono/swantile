<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function top(){

        return view("top");
    }
    
    public function reserve(){

        return view("reserve");
    }
}
