<?php

namespace App\Http\Resources\Web\Brick;

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
            'id_brick' => $this->id_brick,
            'id_property' => $this->id_property,
            'property' => $this->property->name,
            'name' => $this->name,
            'price' => $this->price,
            'available' => $this->available,
        ];
    }
}
