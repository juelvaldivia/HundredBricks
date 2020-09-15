<?php

namespace Tests\Feature;

use Illuminate\Http\Response;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PropertyTest extends TestCase
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
     * A basic feature test example.
     *
     * @return void
     */
    public function testPropertiesAll()
    {
        // obtiene token de usuario
        $token = $this->authenticate();

        // asigna las cabeceras
        $headers = ['authorization' => $token];

        // realiza una peticion get para obtener las propiedades
        $response = $this->withHeaders($headers)->getJson(route('get.all.properties'));

        // verifica que el status de la peticion sea el correcto con codigo 200
        $response->assertJsonStructure();
        $response->assertStatus(Response::HTTP_OK);            
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testPropertyBricks()
    {
        // obtiene token de usuario
        $token = $this->authenticate();

        // asigna las cabeceras
        $headers = ['authorization' => $token];

        // realiza una peticion get para obtener los ladrillos por propiedad
        $response = $this->withHeaders($headers)->getJson(route('get.bricks.property', ['id'=>1]));

        // verifica que el status de la peticion sea el correcto con codigo 200
        $response->assertJsonStructure();
        $response->assertStatus(Response::HTTP_OK);            
    }
}
