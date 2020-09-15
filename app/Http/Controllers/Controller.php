<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Http\Responses\Response;
use App\Utils\JwtToken;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    # PROPIEDADES GENERALES
    public $usuarioLogueado;
    public $NO_RESULT = null;
    public $NO_TOTAL = null;
    public $STATUS_OK = true;
    public $STATUS_ERROR = false;
    public $menssage;
    public $currentUser;
    #TERMINA PROPIEDADES GENERALES

/**
 * @OA\SecurityScheme(
 *     type="apiKey",
 *     in="header",
 *     securityScheme="authorization",
 *     name="authorization"
 * )
 */
/**
 * @OA\OpenApi(
 *     @OA\Info(
 *         version="1.0.0",
 *         title="Swagger Klori",
 *         @OA\License(name="Klori")
 *     ),
 *     @OA\Server(
 *         description="Api Documentations Klori",
 *         url="/api/v1",
 *     ),
 * )
 */
    public function __construct()
    {
        $this->oResponse = new Response();

        $headers = \Request::header();
        if (isset($headers["authorization"]))
            $this->currentUser  = JwtToken::getDataToken($headers["authorization"]);
    }
}
