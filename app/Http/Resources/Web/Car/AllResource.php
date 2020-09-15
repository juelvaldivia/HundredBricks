<?php

namespace App\Http\Resources\Web\Car;

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
            'id_car' => $this->id_car,
            'id_user' => $this->id_user,
            'user' => $this->user->username,
            'terms_accepted' => $this->terms_accepted,
            'paid_out' => $this->paid_out,
            'total' => $this->total,
            'total_bricks' => $this->bricks->count(),
            'bricks' => \App\Http\Resources\Web\Brick\AllResource::collection($this->bricks)
        ];
    }
}
