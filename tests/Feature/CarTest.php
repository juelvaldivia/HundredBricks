<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Http\Response;

class CarTest extends TestCase
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
     * Test para agregar ladrillos al carrito
     *
     * @return void
     */
    public function testAddCar()
    {
        // obtiene token de usuario
        $token = $this->authenticate();

        // asigna las cabeceras
        $headers = ['authorization' => $token];

        $bodyData = [ 
            "bricks" => [1, 2, 3, 12]
        ];
        // realiza una peticion get para obtener las propiedades
        $response = $this->withHeaders($headers)->postJson(route('add.brick.car'), $bodyData);

        // verifica que el status de la peticion sea el correcto con codigo 200
        $response->assertJsonStructure();
        $response->assertStatus(Response::HTTP_OK);   
    }

    /**
     * Test para obtener el carrito
     *
     * @return void
     */
    public function testGetCar()
    {
        // obtiene token de usuario
        $token = $this->authenticate();

        // asigna las cabeceras
        $headers = ['authorization' => $token];

        // realiza una peticion get para obtener las propiedades
        $response = $this->withHeaders($headers)->getJson(route('get.car'));

        // verifica que el status de la peticion sea el correcto con codigo 200
        $response->assertJsonStructure();
        $response->assertStatus(Response::HTTP_OK);   
    }

    /**
     * Test para aceptar terminos
     *
     * @return void
     */
    public function testTermsAccepted()
    {
        // obtiene token de usuario
        $token = $this->authenticate();

        // asigna las cabeceras
        $headers = ['authorization' => $token];

        // realiza una peticion get para obtener las propiedades
        $response = $this->withHeaders($headers)->postJson(route('accepted.terms.car'));

        // verifica que el status de la peticion sea el correcto con codigo 200
        $response->assertJsonStructure();
        $response->assertStatus(Response::HTTP_OK);   
    }

    /**
     * Test para pagar el carrito
     *
     * @return void
     */
    public function testPayCar()
    {
        // obtiene token de usuario
        $token = $this->authenticate();

        // asigna las cabeceras
        $headers = ['authorization' => $token];

        // realiza una peticion get para obtener las propiedades
        $response = $this->withHeaders($headers)->postJson(route('pay.car'));

        // verifica que el status de la peticion sea el correcto con codigo 200
        $response->assertJsonStructure();
        $response->assertStatus(Response::HTTP_OK);
    }
}
