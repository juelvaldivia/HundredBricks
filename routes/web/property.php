<?php
// rutas sobre el modulo de propiedades
Route::get('/property','Web\Property\AllController')->name('get.all.properties');
Route::get('/property/{id}/bricks','Web\Property\BricksController')->name('get.bricks.property');