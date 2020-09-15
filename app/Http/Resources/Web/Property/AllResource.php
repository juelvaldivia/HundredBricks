<?php

namespace App\Http\Resources\Web\Property;

use Illuminate\Http\Resources\Json\JsonResource;

class AllResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id_property' => $this->id_property,
            'name' => $this->name,
            'description' => $this->description
        ];
    }
}
