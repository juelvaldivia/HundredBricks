<?php
// rutas sobre el modulo de ladrillos
Route::get('/brick', 'Web\Brick\AllController')->name('get.all.bricks');

// verifica si el ladrillo está disponible
Route::get('/brick/available/{id}', 'Web\Brick\VerifyAvailableController')->name('get.brick.verify');
