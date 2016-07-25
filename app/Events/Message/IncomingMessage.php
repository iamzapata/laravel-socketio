<?php

namespace App\Events\Message;

use Carbon\Carbon;
use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class IncomingMessage extends Event implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * @var String
     */
    public  $message;

    public $datetime;

    /**
     * Create a new event instance.
     *
     * @param String $message
     * @return void
     */
    public function __construct(String $message)
    {
        $this->message = $message;
        $this->datetime = Carbon::now();
    }

    /**
     * Get the channels the event should be broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['app-messages-channel'];
    }
}
