<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;

trait HasOfficePhotos
{
    public function getPhotosAttribute()
    {
        $crmId = $this->crmId;
        $type = $this->typeDeal;
        $photos = [];

        $directory = public_path("storage/gallery/$type/$crmId/");

        if (is_dir($directory))
            $photos = array_values(
                array_map(function ($value) use ($directory, $crmId, $type) {
                    return "/storage/gallery/$type/$crmId/" . $value;
                }, array_diff(scandir($directory), array('..', '.')))
            );

        return $photos;
    }

    public static function storePhotos($request) {
        $inputPhotos = $request->hasFile('photos');

        if(empty($inputPhotos)) return [];

        $photos = [];
        $photosPath = public_path("storage/gallery/rent/{$request->crmId}/");

        // Delete previous files
        File::deleteDirectory($photosPath);

        // Upload new photos
        if ($inputPhotos) {
            foreach($request->file('photos') as $key => $photo){
                $photoName = uniqid(). '.' .$photo->extension();

                $photos[] = $photo->move(
                    $photosPath,
                    $photoName
                );
            }
        }

        return $photos;
    }
}

