<?php

namespace App\Http\Controllers\Web\Car;
// Codes Responses

use App\Utils\JwtToken;
use App\Http\Controllers\Controller;
use App\Http\Responses\Response as ResponseJson;
use App\Models\Car;
use Symfony\Component\HttpFoundation\Response;
// Request
use Illuminate\Http\Request;

use App\Http\Requests\Web\Car\TermsRequest;
// Models

class TermsAcceptedController extends Controller
{

    public function __construct()
    {
        $this->result = new ResponseJson();
    }

    private $message = 'No se encontró el carrito';

    public function __invoke(TermsRequest $request)
    {
        // obtiene el usuario del token
        $user = JwtToken::getDataToken($request->header('Authorization'));

        // obtiene carrito del usuario sin pagar
        $car = Car::where('id_user', $user->id_user)->where('paid_out', false)->first();

        // respuesta por default
        $result = $this->result->build($this->STATUS_ERROR, $this->NO_RESULT, $this->NO_TOTAL, $this->message);

        // verifica el carrito existente
        if (!$car) {
            // en caso de no existir regresa error
            return response()->json($result, Response::HTTP_ACCEPTED);
        }

        // guarda terminos aceptados
        $car->terms_accepted = $request->accepted;
        $car->save();

        // mapea los datos para quitar campos inncesarios
        $car = new \App\Http\Resources\Web\Car\AllResource($car);

        // construye respuesta correcta
        $result = $this->result->build($this->STATUS_OK, $car, $car->bricks->count(), 'Ha aceptados los terminos correctamente');

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
// 