<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
           //Verifica si el metodo http es OPTIONS
           if ($request->isMethod('OPTIONS')){
            // Responde con un ok y status 200
            $response = response('', 200);
        }else {
            // Pasa al siguiente middleware
            $response = $next($request);
        }
        
        $response->header('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');
        $response->header('Access-Control-Allow-Headers', $request->header('Access-Control-Request-Headers'));
        $response->header('Access-Control-Allow-Origin', '*');
        // $response->header('Access-Control-Allow-Origin', 'http://localhost:4200');        
        $response->header('Access-Control-Expose-Headers', 'Location');

        return $response;
    }
}
