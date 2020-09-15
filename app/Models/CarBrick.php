<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class CarBrick
 * 
 * @property int $id_car_brick
 * @property int $id_car
 * @property int $id_brick
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * 
 * @property Brick $brick
 * @property Car $car
 *
 * @package App\Models
 */
class CarBrick extends Model
{
	use SoftDeletes;
	protected $table = 'car_bricks';
	protected $primaryKey = 'id_car_brick';

	protected $casts = [
		'id_car' => 'int',
		'id_brick' => 'int'
	];

	protected $fillable = [
		'id_car',
		'id_brick'
	];

	public function brick()
	{
		return $this->belongsTo(Brick::class, 'id_brick');
	}

	public function car()
	{
		return $this->belongsTo(Car::class, 'id_car');
	}
}
