<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rent_offices', function (Blueprint $table) {
            $table->id();
            $table->float('areaMin');
            $table->float('areaMax');
            $table->boolean('isActive');
            $table->foreignId('crmId');
            $table->string('type');
            $table->mediumInteger('floor');
            $table->integer('price');
            $table->string('priceCur')->default('RUB');
            $table->string('typeDeal');
            $table->string('tax');
            $table->string('isReady');
            $table->string('readyDate');
            $table->string('explCur');
            $table->integer('explPrice');
            $table->string('layout');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rent_offices');
    }
};
