<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\repositories\ProjectRepository;
use Illuminate\Support\Facades\Validator;

class ProjectsController extends Controller
{
    public $projectRepository;

    public function __construct(ProjectRepository $projectRepository){
        $this->projectRepository = $projectRepository;
    }

    /*
    ****** Get All Projects
    */
    public function index(){
        $projects = $this->projectRepository->getAll();

        return response()->json([
            'success' => true,
            'message' => 'Project List',
            'data' => $projects
        ]);
    }

    /*
    ****** Get Projects details by id
    */
    public function show($id){
        $project = $this->projectRepository->findById($id);
        if($project){
            return response()->json([
                'success' => true,
                'message' => 'Project Details',
                'data' => $project
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'Project Details',
                'data' => null
            ]);
        }
    }

    /*
    ******  Projects Store
    */
    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
        ],[
            'name.required' => 'Please provide your project name',
            'description.required' => 'Please provide your project description'
        ]);
        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()
            ]);
        }

        $project = $this->projectRepository->create($request);

        return response()->json([
            'success' => true,
            'message' => 'Project Store',
            'data' => $project
        ]);
    }


    /*
    ******  Projects update by ID
    */
    public function update(Request $request, $id){

        $project = $this->projectRepository->findById($id);
        if(!$project){
            return response()->json([
                'success' => false,
                'message' => 'Project Not Found',
                'data' => null
            ]);
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
        ],[
            'name.required' => 'Please provide your project name',
            'description.required' => 'Please provide your project description'
        ]);
        if ($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()
            ]);
        }

        $project = $this->projectRepository->edit($request, $id);

        return response()->json([
            'success' => true,
            'message' => 'Project Update',
            'data' => $project
        ]);
    }

    /*
    ****** Projects destroy by ID
    */
    public function destroy($id){
        $project = $this->projectRepository->findById($id);
        if(!$project){
            return response()->json([
                'success' => false,
                'message' => 'Project Not Found',
                'data' => null
            ]);
        }
        $project = $this->projectRepository->delete($id);

        return response()->json([
            'success' => true,
            'message' => 'Project delete',
            'data' => $project
        ]);
    }

}
