<?php
namespace App\Http\Requests;

use App\Http\Requests\FormRequest;
use App\Http\Responses\Response;
use Illuminate\Validation\ValidationException;
/**
 * Class Validation Request.
 * 
 * Clase abstracta para regresar los errores en el response de nuestro modelo de negocio
 * 
 *  Author: Joel Valdivia
 *  Date: 17/05/2018
 */
abstract class ValidationRequest extends FormRequest
{
    /** Valida los campos de la petición 
     * 
     * @return App\Http\Responses\Response
     */
    public function validate () {
        
        if (false === $this->authorize()) {
            throw new UnauthorizedException();
        }
        
        $validator = app('validator')->make($this->all(), $this->rules(), $this->messages());

        if ($validator->fails()) {
            $oResponse = new Response();            
           
            throw new ValidationException($validator, response()->json($oResponse->fnResult(false, $validator->errors(), null), 400));
        }
    }
}