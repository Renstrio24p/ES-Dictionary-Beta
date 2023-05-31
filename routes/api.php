<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function() {  
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});

// Route::get('/romeTest', function(){
//     return response()->json([
//         'first_name' => 'Jerome',
//         'last_name' => 'Ballena',
//         'age' => 16,
//         'hobby' => 'Reading Wuxia novels & playing games',
//         'message' => 'Rome\'s first custom api message',
//         'status_code' => 200
//     ]);
// });

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
