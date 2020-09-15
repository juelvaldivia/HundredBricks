<?php

namespace App\Http\Requests;

use App\Http\Requests\ApiFormRequest;

class DeleteRequest extends ApiFormRequest
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
            'id' => 'required|numeric',
        ];
    }

    public function messages() {
        return [
            'id.required' => 'El id es requerido',
            'id.numeric' => 'El id debe ser numérico'
        ];
    }
}
