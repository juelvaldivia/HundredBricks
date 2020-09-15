<?php

namespace App\Http\Controllers\Web\Car;
use App\Http\Controllers\Controller;
use App\Http\Responses\Response as ResponseJson;
use App\Utils\JwtToken;
// Codes Responses
use Symfony\Component\HttpFoundation\Response;
// Request
use Illuminate\Http\Request;
// Models
use App\Models\Car;



class GetController extends Controller
{

    public function __construct()
    {
        $this->result = new ResponseJson();
    }

    private $message = 'No se encontró el carrito';

    public function __invoke(Request $request)
    {
        // obtiene el usuario del token
        $user = JwtToken::getDataToken($request->header('Authorization'));

        // obtiene carrito del usuario sin pagar
        $car = Car::where('id_user', $user->id_user)->where('paid_out', false)->first();

        // respuesta por default
        $result = $this->result->build($this->STATUS_ERROR, $this->NO_RESULT, $this->NO_TOTAL, $this->message);

        // verifica si existe el carrito para el usuario
        if(!$car){
            return response()->json($result, Response::HTTP_ACCEPTED);
        }
        // verifica si tiene ladrillos sino se elimina el carrito
        if($car->bricks->count() <= 0){
            $car->forceDelete();
            return response()->json($result, Response::HTTP_ACCEPTED);
        }

        // mapea los datos para quitar campos inncesarios
        $car = new \App\Http\Resources\Web\Car\AllResource($car);

        // construye respuesta correcta
        $result = $this->result->build($this->STATUS_OK, $car, $car->bricks->count(), 'Carrito con su contenido');

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
// 