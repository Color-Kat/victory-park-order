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
                    <div class="card-header">Добавить офис для продажи</div>
                    <div class="card-body">
                        <form
                            method="post" action="{{ route('admin.sell-office.store') }}"
                            enctype="multipart/form-data"
                        >
                            @csrf

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Мин. площадь офиса</label>
                                <div class="col-sm-10">
                                    <input type="number" name="areaMin" class="form-control" value="{{old('areaMin')}}"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Макс. площадь офиса</label>
                                <div class="col-sm-10">
                                    <input value="{{old('areaMax')}}" type="number" name="areaMax" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Активность</label>
                                <div class="col-sm-10">
                                    <input value="{{old('isActive')}}" type="number" placeholder="0 или 1" name="isActive" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">crmId</label>
                                <div class="col-sm-10">
                                    <input value="{{old('crmId')}}" type="number" name="crmId" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Тип помещения</label>
                                <div class="col-sm-10">
                                    <input value="{{old('type')}}" type="text" name="type" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Этаж</label>
                                <div class="col-sm-10">
                                    <input value="{{old('floor')}}" type="number" name="floor" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Цена</label>
                                <div class="col-sm-10">
                                    <input value="{{old('price')}}" type="number" name="price" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Валюта</label>
                                <div class="col-sm-10">
                                    <input value="{{old('priceCur')}}" type="text" name="priceCur" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Тип сделки</label>
                                <div class="col-sm-10">
                                    <input type="text" name="typeDeal" readonly class="form-control" value="sell"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Налог</label>
                                <div class="col-sm-10">
                                    <input value="{{old('tax')}}" type="text" name="tax" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Состояние</label>
                                <div class="col-sm-10">
                                    <input value="{{old('isReady')}}" type="text" name="isReady" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Дата готовности</label>
                                <div class="col-sm-10">
                                    <input value="{{old('readyDate')}}" type="date" name="readyDate" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Эксплуатация</label>
                                <div class="col-sm-10">
                                    <input value="{{old('explPrice')}}" type="number" name="explPrice" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Валюты эксплуатации</label>
                                <div class="col-sm-10">
                                    <input value="{{old('explCur')}}" type="text" name="explCur" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Планировка</label>
                                <div class="col-sm-10">
                                    <input value="{{old('layout')}}" type="text" name="layout" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Дата обновления</label>
                                <div class="col-sm-10">
                                    <input value="{{old('updated_at')}}" type="date" name="updated_at" class="form-control"/>
                                </div>
                            </div>

                            <div class="col mb-3">
                                <label class="col-sm-2 col-label-form">Фотографии</label>
                                <div class="col-sm-10">
                                    <input type="file" name="photos[]" multiple>
                                </div>
                            </div>

                            <div class="text-end">
                                <input type="submit" class="btn btn-primary" value="Добавить"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection('content')