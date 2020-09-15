<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

/**
 * Created by Joel Valdivia
 * Date 10 Jun 2020
 * Creador de Email para envio de enlace y restablecer contraseña
 */
class ForgotPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $url_recover;

    public $subject = 'Petición para restablecer contraseña';
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $url)
    {
        $this->url_recover = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mails.auth.forgot');
    }
}
