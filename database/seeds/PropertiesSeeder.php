<?php

use App\Models\Property;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PropertiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // registra una propiedad llamada locales
        $local = new Property();
        $local->name = 'Locales';
        $local->description = 'Locales en todo el mundo';
        $local->save();
        
        // registra una propiedad llamada farmacia
        $pharmacy = new Property();
        $pharmacy->name = 'Farmacia';
        $pharmacy->description = 'Farmacia con ladrillos';
        $pharmacy->save();

        $bricks = [
            [
                'id_property' => $local->id_property,
                'name' => "BR-$local->name-1",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $local->id_property,
                'name' => "BR-$local->name-2",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $local->id_property,
                'name' => "BR-$local->name-3",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $local->id_property,
                'name' => "BR-$local->name-4",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $local->id_property,
                'name' => "BR-$local->name-5",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $local->id_property,
                'name' => "BR-$local->name-6",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $pharmacy->id_property,
                'name' => "BR-$pharmacy->name-1",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $pharmacy->id_property,
                'name' => "BR-$pharmacy->name-2",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $pharmacy->id_property,
                'name' => "BR-$pharmacy->name-3",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $pharmacy->id_property,
                'name' => "BR-$pharmacy->name-4",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $pharmacy->id_property,
                'name' => "BR-$pharmacy->name-5",
                'price' => rand(6500, 20000),
                'available' => true
            ],
            [
                'id_property' => $pharmacy->id_property,
                'name' => "BR-$pharmacy->name-6",
                'price' => rand(6500, 20000),
                'available' => true
            ],
        ];


        DB::table('bricks')->insert($bricks);

    }
}
