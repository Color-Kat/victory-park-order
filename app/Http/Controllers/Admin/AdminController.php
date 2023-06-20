<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RentOffice;
use App\Models\SellOffice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Spatie\Valuestore\Valuestore;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    private function getGalleryPhotos()
    {
        $directory = public_path("storage/gallery-photos/");
        $photos = [];

        if (is_dir($directory)) {
            $photos = array_values(
                array_map(function ($value) {
                    return "/storage/gallery-photos/" . $value;
                }, array_diff(scandir($directory), array('..', '.')))
            );
        }

        natcasesort($photos);
        return $photos;
    }

    /**
     * Show the application for react rendering.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $rentOffices = RentOffice::all();
        $sellOffices = SellOffice::all();

        $settings = Valuestore::make(storage_path('app/settings.json'));

        $photos = $this->getGalleryPhotos();

        return view('admin/index', compact(
            'rentOffices',
            'sellOffices',
            'photos',
            'settings'
        ));
    }

    public function updateSettings(Request $request)
    {
        $settings = Valuestore::make(storage_path('app/settings.json'));

        $settings->put('is_rent_active', $request->has('is_rent_active'));
        $settings->put('is_sell_active', $request->has('is_sell_active'));

        return redirect()->route('admin.index')->with('success', 'Настройки обновлены.');
    }

    public function loadGalleryPhotos(Request $request) {
        $inputPhotos = $request->hasFile('photos');

        if(empty($inputPhotos))
            return redirect()->route('admin.index')->with('error', 'Выберите фотографии для загрузки');

        $photos = [];
        $photosPath = public_path("storage/gallery-photos/");

        // Delete previous files
        File::deleteDirectory($photosPath);

        // Upload new photos
        foreach($request->file('photos') as $key => $photo){
            $photoName = $photo->getClientOriginalName() . '.' .$photo->extension();

            $photos[] = $photo->move(
                $photosPath,
                $photoName
            );
        }

        return redirect()->route('admin.index')->with('success', 'Фотографии успешно загружены.');
    }
}
