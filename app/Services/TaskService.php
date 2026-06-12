<?php

namespace App\Services;

use App\Repositories\TaskRepository;
use App\Models\Task;
use InvalidArgumentException;

class TaskService
{
    protected TaskRepository $taskRepository;

    public function __construct(TaskRepository $taskRepository) {
        $this->taskRepository = $taskRepository;
    }
    public function getAllTasks() {
        return $this->taskRepository->getAll();
    }
    public function createTask(array $data): Task {
        $data['status'] = $data['status'] ?? 'todo';
        return $this->taskRepository->create($data);
    }
    public function changeTaskStatus(int $id, string $newStatus): Task {
        $task = $this->taskRepository->findById($id);

        if (!$task) throw new InvalidArgumentException("Task with id {$id} not found");

        $allowedStatuses = ['todo', 'in_progress', 'done'];
        if (!in_array($newStatus, $allowedStatuses)) throw new InvalidArgumentException("Invalid task status");

        if ($task->status === 'done' && $newStatus === 'todo') throw new InvalidArgumentException("Task already done, you can't do that");

        $this->taskRepository->update($task, ['status' => $newStatus]);

        return $task;
    }
    public function deleteTask(int $id): bool {
        $task = $this->taskRepository->findById($id);

        if (!$task) throw new InvalidArgumentException("Task with id {$id} not found");

        return $this->taskRepository->delete($task);
    }
}
