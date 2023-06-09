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
                @foreach($sellOffice->photos as $photo)

                    <img src="{{$photo}}" alt="" style="height: 100px">

                @endforeach
            </div>

            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Изменить офис для продажи</div>
                    <div class="card-body">
                        <form
                            method="post" action="{{ route('admin.sell-office.update', $sellOffice->id) }}"
                            enctype="multipart/form-data"
                        >
                            @method('PUT')
                            @csrf

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Мин. площадь офиса</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->areaMin}}" type="number" name="areaMin" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Макс. площадь офиса</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->areaMax}}" type="number" name="areaMax" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Активность</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->isActive}}" type="number" placeholder="0 или 1" name="isActive" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">crmId</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->crmId}}" type="number" name="crmId" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Тип помещения</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->type}}" type="text" name="type" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Этаж</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->floor}}" type="number" name="floor" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Цена за м<sup>2</sup></label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->price}}" type="number" name="price" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Валюта</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->priceCur}}" type="text" name="priceCur" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Тип сделки</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->typeDeal}}" type="text" readonly name="typeDeal" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Налог</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->tax}}" type="text" name="tax" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Состояние</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->isReady}}" type="text" name="isReady" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Дата готовности</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->readyDate}}" type="date" name="readyDate" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="">Эксплуатация (не заполняется)</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->explPrice}}" type="number" name="explPrice" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Валюты эксплуатации</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->explCur ?? 0}}" type="text" name="explCur" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Планировка</label>
                                <div class="col-sm-10">
                                    <input value="{{$sellOffice->layout}}" type="text" name="layout" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Дата обновления</label>
                                <div class="col-sm-10">
                                    <input value="{{($sellOffice->updated_at ?? $sellOffice->created_at)->format('Y-m-d')}}" type="date" name="updated_at" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-label-form">Фотографии ({{count($sellOffice->photos)}} фотографии на сервере)</label>
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