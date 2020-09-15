<?php

/**
 * Created by Jesus sanchez
 * Date: 08 May 2018
 */

namespace App\Http\Responses;

class Response
{
	private $result;

	public function __construct()
	{
		// crea un objeto php para la respuesta
		$this->result = new \stdClass;
	}

	// construye una respuesta dependiendo de los datos
	public function build($status = null, $data = null, $total= null, $message = null)
	{
		// asigna estatus y mensaje
		$this->result->status = $status;
		$this->result->message = $message;

		// verifica si hay un total
		// agrega propiedad a la respuesta
		if($total != null)
			$this->result->total = $total;

		// verifica si hay datos
		// agrega propiedad a la respuesta
		if($data != null)
			$this->result->data = $data;
		
		// regresa el objeto canstruido de respuesta
		return $this->result;
	}
}
