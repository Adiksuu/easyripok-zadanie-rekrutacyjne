<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskStatusRequest;
use App\Services\TaskService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use InvalidArgumentException;

class TaskController extends Controller
{
    protected TaskService $taskService;

    public function __construct(TaskService $taskService) {
        $this->taskService = $taskService;
    }
    public function index(): Response {
        $tasks = $this->taskService->getAllTasks();

        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks
        ]);
    }
    public function store(StoreTaskRequest $request): RedirectResponse {
        $this->taskService->createTask($request->validated());

        return redirect()->back();
    }
    public function updateStatus(UpdateTaskStatusRequest $request, int $id): RedirectResponse {
        try {
            $this->taskService->changeTaskStatus($id, $request->validated()['status']);
            return redirect()->back();
        } catch (InvalidArgumentException $error) {
            return redirect()->back()->with('error', $error->getMessage());
        }
    }
    public function destroy(int $id): RedirectResponse {
        try {
            $this->taskService->deleteTask($id);
            return redirect()->back();
        } catch (InvalidArgumentException $error) {
            return redirect()->back()->with('error', $error->getMessage());
        }
    }
}
