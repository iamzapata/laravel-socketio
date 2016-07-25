<?php

namespace App\Listeners\Message;

use App\Events\Message\NewMessage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendMessage
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NewMessage  $event
     * @return void
     */
    public function handle(NewMessage $event)
    {
        //
    }
}
