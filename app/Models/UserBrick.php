<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class UserBrick
 * 
 * @property int $id_user_brick
 * @property int $id_user
 * @property int $id_brick
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Brick $brick
 * @property User $user
 *
 * @package App\Models
 */
class UserBrick extends Model
{
	protected $table = 'user_bricks';
	protected $primaryKey = 'id_user_brick';

	protected $casts = [
		'id_user' => 'int',
		'id_brick' => 'int'
	];

	protected $fillable = [
		'id_user',
		'id_brick'
	];

	public function brick()
	{
		return $this->belongsTo(Brick::class, 'id_brick');
	}

	public function user()
	{
		return $this->belongsTo(User::class, 'id_user');
	}
}
