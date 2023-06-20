@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="px-2">

                {{--        Messages        --}}
                @if($message = Session::get('success'))

                    <div class="alert alert-success">
                        {{ $message }}
                    </div>

                @endif

                {{--        Menu settings        --}}
                <div class="card">
                    <div class="card-header">
                        <b>Отключение пунктов меню</b>
                    </div>

                    <div class="card-body overflow-auto">
                        <form
                            class="flex-column d-flex gap-2"
                            method="post"
                            action="{{ route('admin.update-settings') }}"
                        >
                            @csrf
                            <div class="items-center d-flex gap-2">
                                <input @if($settings->get('is_rent_active')) checked @endif type="checkbox" id="is_rent_active" name="is_rent_active"/>
                                <label for="is_rent_active">Аренда офисов</label>
                            </div>

                            <div class="items-center d-flex gap-2">
                                <input @if($settings->get('is_sell_active')) checked @endif type="checkbox" id="is_sell_active" name="is_sell_active"/>
                                <label for="is_sell_active">Продажа офисов</label>
                            </div>

                            <input type="submit" class="btn btn-primary btn-sm my-1 col-2" value="Сохранить"/>

                        </form>
                    </div>
                </div>

                {{--         Rent office       --}}
                <div class="card mt-4">
                    <div class="card-header">
                        <div class="row">
                            <div class="col col-md-6"><b>Аренда офисов</b></div>
                            <div class="col col-md-6">
                                <a href="{{ route('admin.rent-office.create') }}"
                                   class="btn btn-success btn-sm float-end">Создать</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body overflow-auto">
                        <table class="table table-bordered table-striped table-">
                            <tr>
                                <th>Id</th>
                                <th>crmId</th>
                                <th>Активность</th>
                                <th>Мин. площадь</th>
                                <th>Макс. площадь</th>
                                <th>Тип помещения</th>
                                <th>Этаж</th>
                                <th>Цена за м<sup>2</sup>/год</th>
                                <th>Тип сделки</th>
                                <th>Дата обновления</th>
                                <th>Действия</th>
                            </tr>
                            @if(count($rentOffices) > 0)
                                @foreach($rentOffices as $row)
                                    <tr>
                                        <td>{{$row->id}}</td>
                                        <td>{{$row->crmId}}</td>
                                        <td>{{$row->isActive}}</td>
                                        <td>{{$row->areaMin}} м<sup>2</sup></td>
                                        <td>{{$row->areaMax}} м<sup>2</sup></td>
                                        <td>{{$row->type}}</td>
                                        <td>{{$row->floor}}</td>
                                        <td>{{$row->price . ' ' . $row->priceCur}}</td>
                                        <td>{{$row->typeDeal}}</td>
                                        <td>{{$row->updated_at ?? $row->created_at}}</td>
                                        <td>
                                            <form
                                                    method="post"
                                                    action="{{ route('admin.rent-office.destroy', $row->id) }}"
                                                    onsubmit="return confirm('Вы уверены, что хотите удалить офис?');"
                                            >
                                                @csrf
                                                @method('DELETE')
                                                {{--                                                <a href="{{ route('admin.rent-office.show', $row->id) }}" class="btn btn-primary btn-sm"></a>--}}
                                                <a href="{{ route('admin.rent-office.edit', $row->id) }}"
                                                   class="btn btn-warning btn-sm my-1">Изменить</a>
                                                <input type="submit" class="btn btn-danger btn-sm my-1" value="Delete"/>
                                            </form>
                                        </td>
                                    </tr>

                                @endforeach

                            @else
                                <tr>
                                    <td colspan="9" class="text-center">Нет данных</td>
                                </tr>
                            @endif
                        </table>
                    </div>
                </div>

                {{--        Sell offices        --}}
                <div class="card mt-4">
                    <div class="card-header">
                        <div class="row">
                            <div class="col col-md-6"><b>Продажа офисов</b></div>
                            <div class="col col-md-6">
                                <a href="{{ route('admin.sell-office.create') }}"
                                   class="btn btn-success btn-sm float-end">Создать</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body overflow-auto">
                        <table class="table table-bordered table-striped table-">
                            <tr>
                                <th>Id</th>
                                <th>crmId</th>
                                <th>Мин. площадь офиса</th>
                                <th>Тип помещения</th>
                                <th>Этаж</th>
                                <th>Цена за м<sup>2</sup></th>
                                <th>Тип сделки</th>
                                <th>Дата обновления</th>
                                <th>Действия</th>
                            </tr>
                            @if(count($sellOffices) > 0)
                                @foreach($sellOffices as $row)
                                    <tr>
                                        <td>{{$row->id}}</td>
                                        <td>{{$row->crmId}}</td>
                                        <td>от {{$row->areaMin}} м<sup>2</sup> до {{$row->areaMax}} м<sup>2</sup></td>
                                        <td>{{$row->type}}</td>
                                        <td>{{$row->floor}}</td>
                                        <td>{{$row->price . ' ' . $row->priceCur}}</td>
                                        <td>{{$row->typeDeal}}</td>
                                        <td>{{$row->updated_at ?? $row->created_at}}</td>
                                        <td>
                                            <form
                                                    method="post"
                                                    action="{{ route('admin.sell-office.destroy', $row->id) }}"
                                                    onsubmit="return confirm('Вы уверены, что хотите удалить офис?');"
                                            >
                                                @csrf
                                                @method('DELETE')
                                                {{--                                                <a href="{{ route('admin.rent-office.show', $row->id) }}" class="btn btn-primary btn-sm"></a>--}}
                                                <a href="{{ route('admin.sell-office.edit', $row->id) }}"
                                                   class="btn btn-warning btn-sm my-1">Изменить</a>
                                                <input type="submit" class="btn btn-danger btn-sm my-1" value="Delete"/>
                                            </form>
                                        </td>
                                    </tr>

                                @endforeach

                            @else
                                <tr>
                                    <td colspan="9" class="text-center">
                                        Нет данных
                                    </td>
                                </tr>
                            @endif
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
