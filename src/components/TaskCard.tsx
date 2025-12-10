"use client";

interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
    addDate: string;
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

const formatTaskDate = (stringDate: string) => {
    const dateObject = new Date(stringDate);

    // 2. Định dạng theo Locale 'vi-VN' (Việt Nam)
    return dateObject.toLocaleString("vi-VN", {
        day: "2-digit", // DD (ví dụ: 09)
        month: "2-digit", // MM (ví dụ: 12)
        year: "numeric", // YYYY (ví dụ: 2025)
        hour: "2-digit", // HH (ví dụ: 14)
        minute: "2-digit", // MM (ví dụ: 30)
        hour12: false, // Đảm bảo dùng định dạng 24 giờ
        // timezone: 'Asia/Ho_Chi_Minh' // Tùy chọn: nếu muốn hiển thị chính xác theo múi giờ
    });
};

export default function TaskCard({
    id,
    title,
    isCompleted,
    addDate,
    onCompleteTask,
    onDeleteTask,
}: Task) {
    const completeTitle = isCompleted ? "line-through" : "";
    return (
        <div className="bg-gray-100 rounded w-100 m-2 p-2">
            <div className="flex items-center justify-between">
                <input
                    className="w-5 h-5 rounded-md appearance-none border-2 border-gray-400 checked:bg-blue-600 checked:border-transparent cursor-pointer transition-colors 
               focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 
               focus:outline-none 
               focus:shadow-outline"
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => onCompleteTask(id)}
                />
                <div>
                    <span className="uppercase text-xs">{id}</span>
                    <h1
                        className={`font-bold uppercase text-2xl text-blue-600 ${completeTitle}`}
                    >
                        {title}
                    </h1>
                    <h2>{formatTaskDate(addDate)}</h2>
                </div>
                <button
                    value={id}
                    onClick={() => onDeleteTask(id)}
                    className="bg-red-400 hover:bg-red-600 text-white p-4 px-5 rounded-2xl"
                >
                    X
                </button>
            </div>
        </div>
    );
}
