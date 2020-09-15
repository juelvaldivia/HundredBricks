<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Brick
 * 
 * @property int $id_brick
 * @property int $id_property
 * @property string $name
 * @property float $price
 * @property bool $available
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * 
 * @property Property $property
 * @property Collection|Car[] $cars
 * @property Collection|User[] $users
 *
 * @package App\Models
 */
class Brick extends Model
{
	use SoftDeletes;
	protected $table = 'bricks';
	protected $primaryKey = 'id_brick';

	protected $casts = [
		'id_property' => 'int',
		'price' => 'float',
		'available' => 'bool'
	];

	protected $fillable = [
		'id_property',
		'name',
		'price',
		'available'
	];

	public function property()
	{
		return $this->belongsTo(Property::class, 'id_property');
	}

	public function cars()
	{
		return $this->belongsToMany(Car::class, 'car_bricks', 'id_brick', 'id_car')
					->withPivot('id_car_brick', 'deleted_at')
					->withTimestamps();
	}

	public function users()
	{
		return $this->belongsToMany(User::class, 'user_bricks', 'id_brick', 'id_user')
					->withPivot('id_user_brick')
					->withTimestamps();
	}
}
