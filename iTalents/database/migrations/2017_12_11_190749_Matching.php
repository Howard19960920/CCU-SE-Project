<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Matching extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matchings', function(Blueprint $table)
        {
            $table ->increments('id');
            $table ->integer('cid');
            $table ->integer('rid');
            $table ->integer('uid');
            $table ->integer('employeeCheck') ->default(-1);
            $table ->integer('employerCheck') ->default(-1);
            $table ->timestamps();
        }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('matchings');
    }
}
