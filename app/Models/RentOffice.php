<?php

namespace App\Models;

use App\Traits\HasOfficePhotos;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RentOffice extends Model
{
    use HasFactory;

    use HasOfficePhotos;

    protected $guarded = ['id'];

    protected $appends = ['photos'];

//    public function getPhotosAttribute() {
//        $id = $this->id;
//        $photos = [];
//
//        $directory = public_path('storage/gallery/' . $id);
//
//        if (is_dir($directory)) $photos = array_diff(scandir($directory), array('..', '.'));
//
//        return $photos;
//    }
}
