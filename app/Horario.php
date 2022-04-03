<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    protected $fillable = ['periodo_id','curso_id','dia','hora_inicio','hora_fin'];
}
