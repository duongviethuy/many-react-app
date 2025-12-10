"use client";

import { useState } from "react";

interface TaskForm {
    onAddTask: (title: string) => void;
}

export default function AddTaskForm({ onAddTask }: TaskForm) {
    const [taskTitle, setTaskTitle] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask(taskTitle);
        setTaskTitle("");
    };
    return (
        <div className="bg-gray-100 rounded p-3 shadow-md">
            <form
                onSubmit={handleSubmit}
                className="flex items-center justify-around space-x-2"
                action=""
            >
                <input
                    className="p-4 border-2 border-blue-300 rounded-2xl focus:ring focus:ring-blue-600 outline-none focus:border-transparent"
                    type="text"
                    placeholder="Add your task here"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-300 text-white font-bold p-4 rounded-2xl hover:bg-blue-600 transition-colors cursor-cell"
                >
                    ADD TASK
                </button>
            </form>
        </div>
    );
}
