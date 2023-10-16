export const thread = {
    id: "",
    likes: 0,
    message: "",
    dislikes: 0,
    children: [],
};

export const createIdForNewThread = function (threads, id) {
    const currentThread = threads[id];
    const childrenLength = currentThread.children.length.toString();

    return id + childrenLength;
};

export const createThreadAllocation = function (state, newThread, id) {
    // "100" => "[1] [0] [0]"
    const threads = [...state.threads];
    const levels = id.split("");
    let currentLevelThread = null;

    for (let i = 0; i < levels.length - 1; i++) {
        const level = levels[i];
        currentLevelThread = threads[level];
    }

    currentLevelThread.children = [...currentLevelThread.children, newThread];

    return threads;
};
