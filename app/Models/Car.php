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
 * Class Car
 * 
 * @property int $id_car
 * @property int $id_user
 * @property bool $terms_accepted
 * @property float $total
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * 
 * @property User $user
 * @property Collection|Brick[] $bricks
 *
 * @package App\Models
 */
class Car extends Model
{
	use SoftDeletes;
	protected $table = 'car';
	protected $primaryKey = 'id_car';

	protected $casts = [
		'id_user' => 'int',
		'terms_accepted' => 'bool',
		'total' => 'float'
	];

	protected $fillable = [
		'id_user',
		'terms_accepted',
		'total'
	];

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}

	public function bricks()
	{
		return $this->belongsToMany(Brick::class, 'car_bricks', 'id_car', 'id_brick')
					->withPivot('id_car_brick', 'deleted_at')
					->withTimestamps();
	}
}
