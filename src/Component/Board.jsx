import React from 'react'

export default function Board({board}) {
    return (
        <div className="board">
            {board.flat().map((piece,i)=>(
                <div key={i} className="square">
                    <p>{JSON.stringify(piece)}</p>
                </div>
            ))}
        </div>
    )
}
