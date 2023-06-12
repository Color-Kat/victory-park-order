<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasOfficePhotos
{
    public function getPhotosAttribute()
    {
        $id = $this->id;
        $type = $this->typeDeal;
        $photos = [];

        $directory = public_path("storage/gallery/$type/$id/");

        if (is_dir($directory))
            $photos = array_values(
                array_map(function ($value) use ($directory, $id, $type) {
                    return "/storage/gallery/$type/$id/" . $value;
                }, array_diff(scandir($directory), array('..', '.')))
            );

        return $photos;
    }
}

