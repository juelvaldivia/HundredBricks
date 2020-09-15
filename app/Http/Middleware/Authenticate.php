<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Http\Responses\Response as ResponseJson;
// Facades
use Exception;
// JWT
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;
// responses

use Symfony\Component\HttpFoundation\Response;

class Authenticate
{
    /**
     * Created by Joel Valdivia
     * Created date: 14 Sep 2020
     * @return void
     */
    public function __construct()
    {
        $this->result = new ResponseJson();
    }

    # PROPIEDADES GENERALES
    public $usuarioLogueado;
    public $NO_RESULT = null;
    public $NO_TOTAL = null;
    public $STATUS_OK = true;
    public $STATUS_ERROR = false;
    public $menssage;
    #TERMINA PROPIEDADES GENERALES

    /** Filtro
     * Valida que el token venga en las cabeceras de la petición y lo valida con uno existente.
     * 
     * Created by Joel Valdivia
     * Created date: 14 Sep 2020
     * @param $request, Clousure $next, $guard
     * @return App\Responses\Response
     */
    public function handle($request, Closure $next, $guard = null)
    {
        // obtiene el token de la cabecera authorization
        $token = $request->headers->get('authorization');

        // se define la respuesta de error
        $result = $this->result->build($this->STATUS_ERROR, $this->NO_RESULT, $this->NO_TOTAL, "Token invalido");

        // verifica que exista el token en el request
        if (!$token)
            return response()->json($result,  Response::HTTP_UNAUTHORIZED);

        // decodifica el token
        $dataUser = JWT::decode($token, env('APP_KEY'), ['HS256']);

        // Asinga los datos del usuario al $request->auth para usarlo en todo el sistema
        $request->auth = $dataUser->sub;

        return $next($request);
    }
}
