<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class categorias extends Migration
{
    public function up()
    {
        Schema::create('categorias', function (Blueprint $table) {
            $table->id(); // Clave primaria autoincremental
            $table->string('nombre', 100); // Nombre de la categoría
            $table->string('descripcion', 255)->nullable(); // Descripción opcional de la categoría
            $table->timestamps(); // Campos created_at y updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('categorias'); // Eliminar la tabla si se deshace la migración
    }
};
