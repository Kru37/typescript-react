import React from 'react'

const EventComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    const onDragstart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }
  return (
    <div>
        <input type="text" onChange={onChange} />
        <div draggable onDragStart={onDragstart}>Drag me</div>
    </div>
  )
}

export default EventComponent