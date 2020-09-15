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
 * Class User
 * 
 * @property int $id_user
 * @property string $username
 * @property string $password
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * 
 * @property Collection|Car[] $cars
 * @property Collection|Brick[] $bricks
 *
 * @package App\Models
 */
class User extends Model
{
	use SoftDeletes;
	protected $table = 'users';
	protected $primaryKey = 'id_user';

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'username',
		'password'
	];

	public function cars()
	{
		return $this->hasMany(Car::class, 'id_user');
	}

	public function bricks()
	{
		return $this->belongsToMany(Brick::class, 'user_bricks', 'id_user', 'id_brick')
					->withPivot('id_user_brick')
					->withTimestamps();
	}
}
