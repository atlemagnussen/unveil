let testBoard = {
    id: "test",
    widgets: [
        {
            id: "1",
            width: 200,
            height: 100
        },
        {
            id: "2",
            width: 300,
            height: 100
        }
    ]
}
export const getBoard = async (id: string): Promise<Board> => {
    return testBoard
}

export const saveBoard = async(id: string, board: Board) => {
    testBoard = board
}