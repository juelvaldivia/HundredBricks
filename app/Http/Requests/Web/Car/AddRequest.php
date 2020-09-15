<?php

namespace App\Http\Requests\Web\Car;

use App\Http\Requests\ApiFormRequest;

class AddRequest extends ApiFormRequest
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
            'bricks' => 'required|array',
            'bricks.*' => 'integer',
        ];
    }

    public function messages()
    {
        return [
            'bricks.required' => 'Es necesario seleccionar al menos un ladrillo',
            'bricks.array' => 'El formato de los ladrillos no corresponde con el sitio',
            'bricks.*' => 'El formato de los ladrillos no corresponde con el sitio',
        ];
    }
}
