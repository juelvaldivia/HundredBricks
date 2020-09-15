<?php

namespace App\Http\Requests\Web\Car;

use App\Http\Requests\ApiFormRequest;

class TermsRequest extends ApiFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'accepted' => 'required|boolean'
        ];
    }

    public function messages()
    {
        return [
            'accepted.required' => 'Es necesario seleccionar terminos',
            'accepted.boolean' => 'El formato de los terminos no corresponde con el sitio',
        ];
    }
}
