<?php


namespace App\Business\User;
// Facades
use App\Models\User;
// Utils
use App\Utils\JwtToken;
use Illuminate\Support\Facades\Hash;

//Models

/**
 * Clase de negocios del usuario
 *
 * Created by Edewaldo Nuñez.
 * Date: 15 Jun 2020
 */
class Login
{


     /**
     *  valida que el usuario exista en el sistema
     *
     * @return \App\Model\Usuario
     */
    public function __invoke($username,$password)
    {
        
        // Encuentra usuario de la base de datos
        $user = User::where('username', $username)->first();       
       
        // verifica si el usuario existe sino responde con error
        if (!$user) 
            return false;

        // Verifica la contraseña y genera un token sino responde con error
        if (!Hash::check($password, $user->password)) 
            return false;
        
        // El usuario es válido. se asigna a el resultado el token.
        $user['token'] = JwtToken::create($user);

        return $user;
    }
}
