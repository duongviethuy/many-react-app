"use client";

import TaskCard from "@/components/TaskCard";
import AddTaskForm from "@/components/AddTaskForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Task from "./types/TaskModel";

export default function Home() {
    const [taskList, setTaskList] = useState<Task[]>([]);

    const handleAddTask = (title: string) => {
        if (!title) return;
        const newTask = {
            id: uuidv4(),
            title: title,
            isCompleted: false,
            addDate: new Date().toISOString(),
        };
        setTaskList([...taskList, newTask]);
    };

    const handleCompleteTask = (id: string) => {
        const updateTaskList = taskList.map((task) => {
            if (task.id === id)
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            return task;
        });
        setTaskList(updateTaskList);
    };

    const handleDeleteTask = (id: string) => {
        const updateTaskList = taskList.filter((task) => !(task.id === id));
        setTaskList(updateTaskList);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-5">
            <h1 className="text-blue-700 font-extrabold text-5xl">
                THE BEST TO DO APP
            </h1>
            <div className="flex items-center justify-center space-x-8">
                <div className="w-1/2">
                    <AddTaskForm onAddTask={handleAddTask} />
                </div>
                <div className="w-1/2">
                    {taskList.map((task) => (
                        <div key={task.id}>
                            <TaskCard
                                {...task}
                                onCompleteTask={handleCompleteTask}
                                onDeleteTask={handleDeleteTask}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
