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



class VerifyAvailableController extends Controller
{

    public function __construct()
    {
        $this->result = new ResponseJson();
    }

    private $message = 'No se encontró el ladrillo a verificar';

    public function __invoke(Request $request, $id)
    {
        // Encuentra usuario de la base de datos
        $data = Brick::find($id);

        // respuesta por default
        $result = $this->result->build($this->STATUS_ERROR, $this->NO_RESULT, $this->NO_TOTAL, $this->message);
        
        if(!$data){
            return response()->json($result, Response::HTTP_NOT_FOUND);
        }

        // ladrillo disponible
        $this->message = $data->available ? 'Ladrillo disponible' : 'Ladrillo no disponible';

        // mapea los datos para quitar campos inncesarios
        $brick = new \App\Http\Resources\Web\Brick\AllResource($data);

        // construye respuesta correcta
        $result = $this->result->build($this->STATUS_OK, $brick, $this->NO_TOTAL, $this->message);

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
// 