<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarBricks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('car_bricks', function (Blueprint $table) {
            $table->id('id_car_brick');

            $table->unsignedBigInteger('id_car');
            $table->foreign('id_car')->references('id_car')->on('car');

            $table->unsignedBigInteger('id_brick');
            $table->foreign('id_brick')->references('id_brick')->on('bricks');

            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('car_bricks');
    }
}
