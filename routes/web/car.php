<?php
// rutas sobre el modulo de carrito
Route::get('/car', 'Web\Car\GetController')->name('get.car');
Route::post('/car/add', 'Web\Car\AddBrickController')->name('add.brick.car');
Route::delete('/car/brick', 'Web\Car\DeleteBrickController')->name('delete.brick.car');
Route::post('/car/terms', 'Web\Car\TermsAcceptedController')->name('accepted.terms.car');
Route::post('/car/pay', 'Web\Car\PayController')->name('pay.car');
