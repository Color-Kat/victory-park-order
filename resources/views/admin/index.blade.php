@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="px-2">
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
                                        <td>{{$row->areaMin}}</td>
                                        <td>{{$row->type}}</td>
                                        <td>{{$row->floor}}</td>
                                        <td>{{$row->price . ' ' . $row->priceCur}}</td>
                                        <td>{{$row->typeDeal}}</td>
                                        <td>{{$row->updated_at}}</td>
                                        <td>
                                            <form method="post" action="{{ route('admin.rent-office.destroy', 1) }}">
                                                @csrf
                                                @method('DELETE')
{{--                                                <a href="{{ route('admin.rent-office.show', $row->id) }}" class="btn btn-primary btn-sm"></a>--}}
                                                <a href="{{ route('admin.rent-office.edit', 1) }}" class="btn btn-warning btn-sm my-1">Изменить</a>
                                                <input type="submit" class="btn btn-danger btn-sm my-1" value="Delete" />
                                            </form>
                                        </td>
                                    </tr>

                                @endforeach

                            @else
                                <tr>
                                    <td colspan="5" class="text-center">Нет данных</td>
                                </tr>
                            @endif
                        </table>

                    </div>
                </div>

                <div class="card mt-4">
                    <div class="card-header">Продажа офисов</div>

                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
