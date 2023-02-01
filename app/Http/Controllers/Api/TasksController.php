<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\repositories\TaskRepository;
use Illuminate\Support\Facades\Validator;

class TasksController extends Controller
{
    public $taskRepository;

    public function __construct(TaskRepository $taskRepository){
        $this->taskRepository = $taskRepository;
    }

    /*
    ****** Get All tasks
    */
    public function index(){
        $tasks = $this->taskRepository->getAll();

        return response()->json([
            'success' => true,
            'message' => 'Task List',
            'data' => $tasks
        ]);
    }

    /*
    ****** Get tasks details by id
    */
    public function show($id){
        $task = $this->taskRepository->findById($id);
        if($task){
            return response()->json([
                'success' => true,
                'message' => 'Task Details',
                'data' => $task
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Task Details',
                'data' => null
            ]);
        }
    }

    /*
    ******  tasks Store
    */
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
        ],[
            'name.required' => 'Please provide your task name',
            'description.required' => 'Please provide your task description'
        ]);
        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()
            ]);
        }

        $task = $this->taskRepository->create($request);

        return response()->json([
            'success' => true,
            'message' => 'Task Store',
            'data' => $task
        ]);
    }


    /*
    ******  tasks update by ID
    */
    public function update(Request $request, $id){

        $task = $this->taskRepository->findById($id);
        if(!$task){
            return response()->json([
                'success' => false,
                'message' => 'Task Not Found',
                'data' => null
            ]);
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
        ],[
            'name.required' => 'Please provide your task name',
            'description.required' => 'Please provide your task description'
        ]);
        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()
            ]);
        }

        $task = $this->taskRepository->edit($request, $id);

        return response()->json([
            'success' => true,
            'message' => 'Task Update',
            'data' => $task
        ]);
    }

    /*
    ****** tasks destroy by ID
    */
    public function destroy($id){
        $task = $this->taskRepository->findById($id);
        if(!$task){
            return response()->json([
                'success' => false,
                'message' => 'Task Not Found',
                'data' => null
            ]);
        }
        $task = $this->taskRepository->delete($id);

        return response()->json([
            'success' => true,
            'message' => 'Task delete',
            'data' => $task
        ]);
    }

}
