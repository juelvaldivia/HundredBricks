<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testLogin()
    {
        //attempt login
        $response = $this->postJson(route('api.login'), [
            'username' => 'test',
            'password' => 'test123',
        ]);
        //Assert it was successful and a token was received
        $response->assertJsonStructure();
        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    'token' => true
                ]
            ]);
    }
}
