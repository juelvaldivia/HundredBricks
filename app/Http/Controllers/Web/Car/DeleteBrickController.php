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
use App\Models\CarBrick;

class DeleteBrickController extends Controller
{

    public function __construct()
    {
        $this->result = new ResponseJson();
    }

    private $message = 'No se encontró el ladrillo a quitar';

    public function __invoke(Request $request)
    {
        $total = 0;
        // obtiene el usuario del token
        $user = JwtToken::getDataToken($request->header('Authorization'));

        // obtiene carrito del usuario sin pagar
        $car = Car::where('id_user', $user->id_user)->where('paid_out', false)->first();

        // respuesta por default
        $result = $this->result->build($this->STATUS_ERROR, $this->NO_RESULT, $this->NO_TOTAL, $this->message);

        // verifica si existe el carrito para el usuario
        if (!$car) {
            return response()->json($result, Response::HTTP_BAD_REQUEST);
        }

        $carBricks = CarBrick::where('id_car', $car->id_car)->where('id_brick', $request->brick)->first();

        // verifica si existe el carrito para el usuario
        if (!$carBricks) {
            return response()->json($result, Response::HTTP_BAD_REQUEST);
        }
        // elimina el ladrillo del carrito
        $carBricks->forceDelete();

        // suma el valor de los ladrillos al total del carrito
        foreach ($car->bricks as $brick) {
            $total = $total + $brick->price;
        }
        // guarda el total de ladrillos
        $car->total = $total;
        $car->save();

        // mapea los datos para quitar campos inncesarios
        $car = new \App\Http\Resources\Web\Car\AllResource($car);

        // construye respuesta correcta
        $result = $this->result->build($this->STATUS_OK, $car, $car->bricks->count(), 'Ladrillo eliminado correctamente');

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
// 