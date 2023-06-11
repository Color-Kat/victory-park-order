@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="px-2">
                @if($message = Session::get('success'))

                    <div class="alert alert-success">
                        {{ $message }}
                    </div>

                @endif

                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col col-md-6"><b>Аренда офисов</b></div>
                            <div class="col col-md-6">
                                <a href="{{ route('admin.rent-office.create') }}" class="btn btn-success btn-sm float-end">Создать</a>
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
                                <th>Цена</th>
                                <th>Тип сделки</th>
                                <th>Дата обновления</th>
                                <th>Действия</th>
                            </tr>
                            @if(count($rentOffices) > 0)
                                @foreach($rentOffices as $row)
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
                                                action="{{ route('admin.rent-office.destroy', $row->id) }}"
                                                onsubmit="return confirm('Вы уверены, что хотите удалить офис?');"
                                            >
                                                @csrf
                                                @method('DELETE')
{{--                                                <a href="{{ route('admin.rent-office.show', $row->id) }}" class="btn btn-primary btn-sm"></a>--}}
                                                <a href="{{ route('admin.rent-office.edit', $row->id) }}" class="btn btn-warning btn-sm my-1">Изменить</a>
                                                <input type="submit" class="btn btn-danger btn-sm my-1" value="Delete" />
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

                <div class="card mt-4">
                    <div class="card-header">
                        <div class="row">
                            <div class="col col-md-6"><b>Продажа офисов</b></div>
                            <div class="col col-md-6">
                                <a href="{{ route('admin.sell-office.create') }}" class="btn btn-success btn-sm float-end">Создать</a>
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
                                <th>Цена</th>
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
                                                <a href="{{ route('admin.sell-office.edit', $row->id) }}" class="btn btn-warning btn-sm my-1">Изменить</a>
                                                <input type="submit" class="btn btn-danger btn-sm my-1" value="Delete" />
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
