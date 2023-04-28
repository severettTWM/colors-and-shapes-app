import { useContext, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Context } from './context';
import "./shapes.css"
import "./customSelect.css";

const DraggableArea = () => {
    const { selectedShape, setShapeColor, colorSequenceList, selectedColorSequence, shapes, shapeRef } = useContext(Context)
    console.log(selectedColorSequence)

    const handleStop = (e) => {
      var distanceFromLeft = e.clientX
      var distanceFromTop = e.clientY
      var distanceFromRight = window.innerWidth - e.clientX
      var distanceFromBottom = window.innerHeight - e.clientY
      
      var furthestDimension = Math.min(distanceFromLeft, distanceFromTop, distanceFromRight, distanceFromBottom)
      
      var shapeComplexity = shapes.filter(x => x.name == selectedShape)[0].complexity

      var colorSequence = []
      if (selectedColorSequence == undefined)
        colorSequence = colorSequenceList[0].sequence
      else
        colorSequence = colorSequenceList.filter(x => x.id == selectedColorSequence)[0].sequence
        
      if (furthestDimension < 201) {
        
        setShapeColor(colorSequence[2])

        if (shapeComplexity == 2)
          shapeRef.current.style.borderBottom = "100px solid " + colorSequence[2]
        else if (shapeComplexity == 1)
          shapeRef.current.style.backgroundColor = colorSequence[2]

      } else if (furthestDimension < 301 && furthestDimension > 200) {

        setShapeColor(colorSequence[1])

        if (shapeComplexity == 2)
          shapeRef.current.style.borderBottom = "100px solid " + colorSequence[1]
        else if (shapeComplexity == 1)
          shapeRef.current.style.backgroundColor = colorSequence[1]

      } else if (furthestDimension < 401 && furthestDimension > 300) {
          
        setShapeColor(colorSequence[0])
        if (shapeComplexity == 2)
          shapeRef.current.style.borderBottom = "100px solid " + colorSequence[0]
        else if (shapeComplexity == 1)
          shapeRef.current.style.backgroundColor = colorSequence[0]
      }
    }

    return (
        <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Draggable onDrag={(e) => handleStop(e)}>
              <div ref={shapeRef} className={`${selectedShape}`} />
          </Draggable>
        </div>
        )
}

export default DraggableArea;
