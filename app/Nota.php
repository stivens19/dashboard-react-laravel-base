<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Nota extends Model
{
    protected $fillable = ['user_id','curso_id','consolidado_id','periodo_id','nota'];
}
