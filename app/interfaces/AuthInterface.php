<?php
namespace App\interfaces;
use Illuminate\Http\Request;

interface AuthInterface{

    // check authenticate if user is exist or not
    public function checkIfAuthenticate(Request $request);

    // register new user
    public function registerUser(Request $request);

    // Find user by email address
    public function findByEmailAddress($email);
}