<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;

class BookController extends Controller
{
    public function all()
    {
        return Book::all();
    }

    public function find(int $id)
    {
        return Book::find($id);
    }

    public function create(Request $request)
    {
        return Book::create($request->all());
    }

    public function update(int $id, Request $request)
    {
        $book = Book::find($id);
        $book->update($request->all());
        return $book;
    }

    public function delete(int $id)
    {
        Book::destroy($id);
        return 204;
    }
}
