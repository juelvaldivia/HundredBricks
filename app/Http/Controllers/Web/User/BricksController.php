<?php

namespace App\Http\Controllers\Web\User;
// Codes Responses

use App\Http\Controllers\Controller;
use App\Http\Responses\Response as ResponseJson;
use App\Models\User;
use App\Models\VwUsuario;
use App\Utils\JwtToken;
use Symfony\Component\HttpFoundation\Response;
// Request
use Illuminate\Http\Request;
// Models



class BricksController extends Controller
{

    public function __construct()
    {
        $this->result = new ResponseJson();
    }


    public function __invoke(Request $request)
    {
        // Encuentra usuario de la base de datos
        $userToken = JwtToken::getDataToken($request->header('Authorization'));

        $user = User::find($userToken->id_user);


        $user = new \App\Http\Resources\Web\User\BricksResource($user);

        // construye respuesta correcta
        $result = $this->result->build($this->STATUS_OK, $user, $user->bricks->count(), 'Listado de ladrillos del usuario');

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
// 