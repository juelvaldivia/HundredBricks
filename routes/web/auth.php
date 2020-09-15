<?php
// rutas sobre el modulo de Acceso
$router->post('/auth/login','Web\Auth\LoginController')->name('api.login');