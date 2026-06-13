import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'
import { Task } from '@/types/task'

export default function Index({ tasks }: { tasks: Task[] }) {
  return (
    <>
        <Head title="Home" />
        <MainLayout tasks={tasks} />
    </>
  )
}
