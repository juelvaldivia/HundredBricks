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
 * Class Property
 * 
 * @property int $id_property
 * @property string $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $deleted_at
 * 
 * @property Collection|Brick[] $bricks
 *
 * @package App\Models
 */
class Property extends Model
{
	use SoftDeletes;
	protected $table = 'properties';
	protected $primaryKey = 'id_property';

	protected $fillable = [
		'name'
	];

	public function bricks()
	{
		return $this->hasMany(Brick::class, 'id_property');
	}
}
