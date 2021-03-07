<?php

use App\Models\User;
use App\Events\PublicMessage;
use App\Events\PrivateMessage;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('chat', function () {
    event(new PublicMessage());
    dd('Public message channel fired...');
});


Route::get('private', function () {
    $user = User::findOrFail(1);
    event(new PrivateMessage($user));
    dd('Private message channel fired...');
});
