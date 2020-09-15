<?php

namespace App\Http\Controllers\Web\Brick;
// Codes Responses

use App\Http\Controllers\Controller;
use App\Http\Responses\Response as ResponseJson;
use App\Models\Brick;
use Symfony\Component\HttpFoundation\Response;
// Request
use Illuminate\Http\Request;
// Models



class AllController extends Controller
{

    public function __construct()
    {
        $this->result = new ResponseJson();
    }


    public function __invoke(Request $request)
    {
        // Encuentra usuario de la base de datos
        $data = Brick::orderBy('id_property')->where('available', true)->get();

        // mapea los datos para quitar campos inncesarios
        $bricks = \App\Http\Resources\Web\Brick\AllResource::collection($data);

        // construye respuesta correcta
        $result = $this->result->build($this->STATUS_OK, $bricks, $bricks->count(), 'Listado de todos los ladrillos');

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
// 