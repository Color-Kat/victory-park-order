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
        Schema::create('sell_offices', function (Blueprint $table) {
            $table->id();
            $table->float('areaMin')->default(0);
            $table->float('areaMax');
            $table->boolean('isActive');
            $table->foreignId('crmId')->unique();
            $table->string('type');
            $table->mediumInteger('floor');
            $table->integer('price');
            $table->string('priceCur')->default("руб.");
            $table->string('typeDeal');
            $table->string('tax');
            $table->string('isReady');
            $table->string('readyDate')->nullable();
            $table->string('explCur')->default("руб.");;
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
        Schema::dropIfExists('sell_offices');
    }
};
