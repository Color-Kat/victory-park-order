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
        $photos = [];

        $directory = public_path("storage/gallery/$id/");

        if (is_dir($directory))
            $photos = array_values(
                array_map(function ($value) use ($directory, $id) {
                    return "/storage/gallery/$id/" . $value;
                }, array_diff(scandir($directory), array('..', '.')))
            );

        return $photos;
    }
}

