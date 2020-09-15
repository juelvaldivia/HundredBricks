<?php

namespace App\Http\Controllers\Web\Auth;

// extends
use App\Http\Controllers\Controller;
// responses
use App\Http\Responses\Response as ResponseJson;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Web\Auth\LoginRequest;
// resource
use App\Http\Resources\Web\Auth\LoginResource;


/**
 * Created  by Joel Valdivia
 * Date: 14 Jun 2020
 * Description: Controlador para inicio de sesion
 */
class LoginController extends Controller
{

    public function __construct()
    {
        $this->result = new ResponseJson();
    }
    private $message = 'Tu usuario y/o contraseña son incorrectos, por favor verifica tus datos';

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(LoginRequest $request)
    {
        
        // Valida usuario en la capa de negocios
        $login = new \App\Business\User\Login;
        $user = $login($request->input('username'),$request->input('password'));

        // verifica si el usuario existe si no responde con error
        if (!$user){
             // se define la respuesta de error
            $result = $this->result->build($this->STATUS_ERROR, $this->NO_RESULT, $this->NO_TOTAL, $this->message);
              // response el resultado con su codigo Http
            return response()->json($result,  Response::HTTP_UNAUTHORIZED);   
        }
                  
        // Resultado mappeado
        $result = new LoginResource($user);
    
        // construye respuesta correcta
        $result = $this->result->build($this->STATUS_OK, $result, $this->NO_TOTAL, 'Usuario ha iniciado sesión correctamente');

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
