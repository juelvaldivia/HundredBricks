<?php

namespace App\Http\Controllers\Web\Car;

use App\Utils\JwtToken;
use App\Http\Controllers\Controller;
use App\Http\Responses\Response as ResponseJson;
// Codes Responses
use Symfony\Component\HttpFoundation\Response;
// Request
use App\Http\Requests\Web\Car\AddRequest;
// Models
use App\Models\Car;
use App\Models\Brick;
use App\Models\CarBrick;

class AddBrickController extends Controller
{

    public function __construct()
    {
        $this->result = new ResponseJson();
    }


    public function __invoke(AddRequest $request)
    {
        // obtiene el usuario del token
        $total = 0;

        $user = JwtToken::getDataToken($request->header('Authorization'));

        // obtiene carrito del usuario sin pagar
        $car = Car::where('id_user', $user->id_user)->where('paid_out', false)->first();

        // verifica si existe el carrito
        if(!$car){
            // en caso de no existir crea una instancia del carro
            $car = new Car();
            $car->id_user = $user->id_user;
            $car->terms_accepted = false;
            $car->total = 0;
            $car->save();
        }
        
        // recorre los ladrillos agregados al carrito
        foreach ($request->bricks as $brick) {
            // crea un registro nuevo con relacion al carrito ladrillo
            $carBrick = CarBrick::where('id_car', $car->id_car)->where('id_brick', $brick)->first();
            $brick = Brick::find($brick);
            
            if(!$carBrick)
                $carBrick = new CarBrick();
            
            $carBrick->id_car = $car->id_car;
            $carBrick->id_brick = $brick->id_brick;
            
            // verifica que el ladrillo sea habilidato
            if($brick->available){
                // guarda el ladrillo en el carrito
                $carBrick->save();
            }
        }

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
        $result = $this->result->build($this->STATUS_OK, $car, $car->bricks->count(), 'Ladrillos agregados al carrito');

        // response el resultado con su codigo Http
        return response()->json($result, Response::HTTP_OK);
    }
}
// 