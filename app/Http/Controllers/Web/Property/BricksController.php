<?php

namespace App\Http\Controllers\Web\Property;
// Codes Responses

use App\Http\Controllers\Controller;
use App\Http\Responses\Response as ResponseJson;
use App\Models\Brick;
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


    public function __invoke(Request $request, $id)
    {
        // Encuentra usuario de la base de datos
        $data = Brick::where('id_property', $id)->where('available', true)->get();

        // mapea los datos para quitar campos inncesarios
        $properties = \App\Http\Resources\Web\Brick\AllResource::collection($data);

        // construye respuesta correcta
        $result = $this->result->build($this->STATUS_OK, $properties, $properties->count(), 'Listado de todas las propiedades');

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
// 