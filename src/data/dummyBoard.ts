let testBoard: Board = {
    id: "test",
    widgets: [
        {
            id: "1",
            width: 200,
            height: 100,
            html: "<p>widget1</span>"
        },
        {
            id: "2",
            width: 300,
            height: 100,
            html: "<span>halloooo</span>"
        }
    ]
}
export const getBoard = (id: string): Promise<Board> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(testBoard)
        }, 1000)
    })
}

export const saveBoard = async(id: string, board: Board) => {
    testBoard = board
}