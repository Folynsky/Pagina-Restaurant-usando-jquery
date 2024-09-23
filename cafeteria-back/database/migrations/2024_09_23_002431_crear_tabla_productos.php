<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaProductos extends Migration
{
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id(); // Clave primaria autoincremental
            $table->string('nombre', 100); // Nombre del producto
            $table->text('descripcion')->nullable(); // Descripción del producto
            $table->decimal('precio', 8, 2); // Precio con dos decimales
            $table->unsignedBigInteger('categoria_id'); // Clave foránea hacia la tabla de categorías
            $table->timestamps(); // Campos created_at y updated_at

            // Definimos la relación con la tabla de categorías
            $table->foreign('categoria_id')->references('id')->on('categorias')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('productos'); // Eliminar la tabla si se deshace la migración
    }
};
