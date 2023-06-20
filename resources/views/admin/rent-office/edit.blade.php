@extends('layouts.app')

@section('content')

    @if($errors->any())

        <div class="alert alert-danger">
            <ul>
                @foreach($errors->all() as $error)

                    <li>{{ $error }}</li>

                @endforeach
            </ul>
        </div>

    @endif

    <div class="container">
        <div class="row justify-content-center">

            {{--      Old Photos      --}}
            <div class="mb-2 f-flex">
                @foreach($rentOffice->photos as $photo)

                    <img src="{{$photo}}" alt="" style="height: 100px">

                @endforeach
            </div>

            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Изменить офис для аренды</div>
                    <div class="card-body">
                        <form
                            method="post" action="{{ route('admin.rent-office.update', $rentOffice->id) }}"
                            enctype="multipart/form-data"
                        >
                            @method('PUT')
                            @csrf

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Мин. площадь офиса</label>
                                <div class="col-sm-10">
                                    <input value="{{old('areaMin') ?? $rentOffice->areaMin}}" type="number" name="areaMin" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Макс. площадь офиса</label>
                                <div class="col-sm-10">
                                    <input value="{{old('areaMax') ?? $rentOffice->areaMax}}" type="number" name="areaMax" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Активность</label>
                                <div class="col-sm-10">
                                    <input value="{{old('isActive') ?? $rentOffice->isActive}}" type="number" placeholder="0 или 1" name="isActive" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">crmId</label>
                                <div class="col-sm-10">
                                    <input value="{{old('crmId') ?? $rentOffice->crmId}}" type="number" name="crmId" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Тип помещения</label>
                                <div class="col-sm-10">
                                    <input value="{{old('type') ?? $rentOffice->type}}" type="text" name="type" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Этаж</label>
                                <div class="col-sm-10">
                                    <input value="{{old('floor') ?? $rentOffice->floor}}" type="number" name="floor" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Цена за м<sup>2</sup>/год</label>
                                <div class="col-sm-10">
                                    <input value="{{old('price') ?? $rentOffice->price}}" type="number" name="price" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Валюта</label>
                                <div class="col-sm-10">
                                    <input value="{{old('priceCur') ?? $rentOffice->priceCur}}" type="text" name="priceCur" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Тип сделки</label>
                                <div class="col-sm-10">
                                    <input value="{{old('typeDeal') ?? $rentOffice->typeDeal}}" type="text" readonly name="typeDeal" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Налог</label>
                                <div class="col-sm-10">
                                    <input value="{{old('tax') ?? $rentOffice->tax}}" type="text" name="tax" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Состояние</label>
                                <div class="col-sm-10">
                                    <input value="{{old('isReady') ?? $rentOffice->isReady}}" type="text" name="isReady" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Дата готовности</label>
                                <div class="col-sm-10">
                                    <input value="{{old('readyDate') ?? $rentOffice->readyDate}}" type="date" name="readyDate" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Эксплуатация за м<sup>2</sup>/год</label>
                                <div class="col-sm-10">
                                    <input value="{{old('explPrice') ?? $rentOffice->explPrice}}" type="number" name="explPrice" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Валюты эксплуатации</label>
                                <div class="col-sm-10">
                                    <input value="{{old('explCur') ?? $rentOffice->explCur}}" type="text" name="explCur" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Планировка</label>
                                <div class="col-sm-10">
                                    <input value="{{old('layout') ?? $rentOffice->layout}}" type="text" name="layout" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Дата обновления</label>
                                <div class="col-sm-10">
                                    <input value="{{($rentOffice->updated_at ?? $rentOffice->created_at)->format('Y-m-d')}}" type="date" name="updated_at" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-label-form">Фотографии ({{count($rentOffice->photos)}} фотографии на сервере)</label>
                                <p class="">Загрузите сюда фотографии, чтобы перезаписать старые</p>
                                <div class="col-sm-10">
                                    <input type="file" name="photos[]" value="{{old('photos')}}" multiple>
                                </div>
                            </div>

                            <div class="text-end">
                                <input type="submit" class="btn btn-primary" value="Изменить"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection('content')