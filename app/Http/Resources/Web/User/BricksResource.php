<?php

namespace App\Http\Resources\Web\User;

use Illuminate\Http\Resources\Json\JsonResource;

class BricksResource extends JsonResource
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
            'id_user' => $this->id_user,
            'username' => $this->username,
            'bricks' => \App\Http\Resources\Web\Brick\AllResource::collection($this->bricks)
        ];
    }
}
