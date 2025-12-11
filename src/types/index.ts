export interface Task {
    title: string;
    deadline: string;
    group: string; // "電裝控制" | "結構設計" | "公關相關" | "教學相關"
    progress: number; // 0-100
    outcome?: 'Success' | 'Failed';
}

export interface Member {
    id: string;
    name: string;
    currentTask: Task;
    stats: {
        success: number;
        failed: number;
    };
    history: Task[];
}

export interface AppData {
    members: Member[];
}
