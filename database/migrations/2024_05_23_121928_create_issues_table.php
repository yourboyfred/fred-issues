<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('issues', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->foreignId('system_id')->constrained('systems');
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('priority_id')->nullable()->constrained('priorities');
            $table->foreignId('issue_type_id')->constrained('issue_types');
            $table->foreignId('status_id')->default(1)->constrained('statuses'); // Set default value
            $table->string('supporting_documents')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('issues');
    }
};
