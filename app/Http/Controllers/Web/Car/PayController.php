<?php

namespace App\Http\Controllers\Web\Car;
// Codes Responses

use App\Utils\JwtToken;
use App\Http\Controllers\Controller;
use App\Http\Responses\Response as ResponseJson;
use App\Models\Car;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;

// Models
use App\Models\Brick;
use App\Models\UserBrick;

class PayController extends Controller
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

        if (!$car) {
            return response()->json($result, Response::HTTP_ACCEPTED);
        }

        if (!$car->terms_accepted) {
            $this->message = 'Es necesario aceptar los términos y condiciones';
            $result = $this->result->build($this->STATUS_ERROR, $this->NO_RESULT, $this->NO_TOTAL, $this->message);
            return response()->json($result, Response::HTTP_BAD_REQUEST);
        }

        // recorre los ladrillos del carrito para agregarlos al usuario
        foreach ($car->bricks as $brick) {
            // obtiene un registro nuevo con relacion al carrito ladrillo
            $userBrick = UserBrick::where('id_user', $user->id_user)->where('id_brick', $brick->id_brick)->first();
            
            // verifica que exista ese ladrillo para el usuario
            if (!$userBrick)
                // en caso de no existir se crea un registro nuevo
                $userBrick = new UserBrick();

            $userBrick->id_user = $user->id_user;
            $userBrick->id_brick = $brick->id_brick;
            $userBrick->save();

            // consulta el ladrillo para ponerlo no disponible
            $brick = Brick::find($brick->id_brick);
            $brick->available = false;
            $brick->save();
        }

        // guarda pago aceptado
        $car->paid_out = true;
        $car->save();

        // mapea los datos para quitar campos inncesarios
        $car = new \App\Http\Resources\Web\Car\AllResource($car);

        // construye respuesta correcta
        $result = $this->result->build($this->STATUS_OK, $car, $car->bricks->count(), 'Ladrillos agregados al carrito');

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
// 