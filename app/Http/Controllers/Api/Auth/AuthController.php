<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\repositories\AuthRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public $authRepository;

    public function __construct(AuthRepository $authRepository){
        $this->authRepository = $authRepository;
    }

    public function createToken(){
        // return 'ok';
        $user = User::first();
        $accessToken = $user->createToken('AuthToken')->accessToken;
        return $accessToken;
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:255',
            'password' => 'required',
        ],[
            'email.required' => 'Please provide your email address',
            'password.required' => 'Please provide your password'
        ]);
        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()
            ]);
        }

        if($this->authRepository->checkIfAuthenticate($request)){
            $user = $this->authRepository->findByEmailAddress($request->email);
            $accessToken = $user->createToken('authToken')->accessToken;
            return response()->json([
                'success' => true,
                'user' => $user,
                'message' => 'LoggIn Successfully',
                'access_token' => $accessToken  
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Sorry! Invalid Email & Password'
            ]);
        }
    }
    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3|max:30',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:6',
        ],[
            'name.required' => 'Please provide your name',
            'email.required' => 'Please provide your email address',
            'email.unique' => 'Email address is already exists',
            'password.required' => 'Please provide your password'
        ]);
        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()
            ]);
        }
        $user = $this->authRepository->registerUser($request);

        if($user){
            $user = $this->authRepository->findByEmailAddress($request->email);
            $accessToken = $user->createToken('authToken')->accessToken;
            return response()->json([
                'success' => true,
                'user' => $user,
                'message' => 'LoggIn Successfully',
                'access_token' => $accessToken  
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Not Registered'
            ]);
        }
    }
}
