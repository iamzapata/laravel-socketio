<?php

namespace App\Http\Controllers\Message;

use App\Events\Message\IncomingMessage;
use Illuminate\Http\Request;

use Event;
use App\Http\Requests;
use App\Events\Message\NewMessage;
use App\Http\Controllers\Controller;

class MessageController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Event::fire( new IncomingMessage($request->input('message')) );
    }

}
