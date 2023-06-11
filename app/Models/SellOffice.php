<?php

namespace App\Models;

use App\Traits\HasOfficePhotos;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SellOffice extends Model
{
    use HasFactory;
    use HasOfficePhotos;

    protected $guarded = ['id'];
}
