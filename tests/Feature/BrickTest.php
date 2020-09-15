<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Http\Response;

class BrickTest extends TestCase
{
    /**
     * Realiza una conexion a base de datos
     */
    protected function authenticate()
    {
        $login = new \App\Business\User\Login;
        $user = $login('test', 'test123');

        return $user->token;
    }

    /**
     * Test para probar obtener todos los ladrillos
     *
     * @return void
     */
    public function testBricksAll()
    {
        // obtiene token de usuario
        $token = $this->authenticate();

        // asigna las cabeceras
        $headers = ['authorization' => $token];

        // realiza una peticion get para obtener las propiedades
        $response = $this->withHeaders($headers)->getJson(route('get.all.bricks'));

        // verifica que el status de la peticion sea el correcto con codigo 200
        $response->assertJsonStructure();
        $response->assertStatus(Response::HTTP_OK);   
    }

    /**
     * Test para verificar ladrillo disponible
     *
     * @return void
     */
    public function testVerifyBrick()
    {
        // obtiene token de usuario
        $token = $this->authenticate();

        // asigna las cabeceras
        $headers = ['authorization' => $token];

        // realiza una peticion get para obtener las propiedades
        $response = $this->withHeaders($headers)->getJson(route('get.brick.verify', ['id' => 1]));

        // verifica que el status de la peticion sea el correcto con codigo 200
        $response->assertJsonStructure();
        $response->assertStatus(Response::HTTP_OK);   
    }
}
