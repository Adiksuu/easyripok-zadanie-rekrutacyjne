<?php

namespace App\Repositories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Collection;

class TaskRepository
{
    public function getAll(): Collection {
        return Task::latest()->get();
    }
    public function findById(int $id): ?Task {
        return Task::find($id);
    }
    public function create(array $data): Task {
        return Task::create($data);
    }
    public function update(Task $task, array $data): bool {
        return $task->update($data);
    }
    public function delete(Task $task): bool {
        return $task->delete();
    }
}
