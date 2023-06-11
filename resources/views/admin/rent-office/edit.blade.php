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
                                    <input value="{{$rentOffice->areaMin}}" type="number" name="areaMin" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Макс. площадь офиса</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->areaMax}}" type="number" name="areaMax" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Активность</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->isActive}}" type="number" placeholder="0 или 1" name="isActive" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">crmId</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->crmId}}" type="number" name="crmId" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Тип помещения</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->type}}" type="text" name="type" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Этаж</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->floor}}" type="number" name="floor" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Цена</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->price}}" type="number" name="price" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Валюта</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->priceCur}}" type="text" name="priceCur" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Тип сделки</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->typeDeal}}" type="text" readonly name="typeDeal" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Налог</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->tax}}" type="text" name="tax" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Состояние</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->isReady}}" type="text" name="isReady" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Дата готовности</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->readyDate}}" type="date" name="readyDate" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Эксплуатация</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->explPrice}}" type="number" name="explPrice" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Валюты эксплуатации</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->explCur}}" type="text" name="explCur" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Планировка</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->layout}}" type="text" name="layout" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Дата обновления</label>
                                <div class="col-sm-10">
                                    <input value="{{$rentOffice->updated_at->format('Y-m-d')}}" type="date" name="updated_at" class="form-control"/>
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