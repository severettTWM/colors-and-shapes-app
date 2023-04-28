import React, { createContext, useState, useEffect, useRef } from 'react';
import { getShapeList, getColorSequenceList } from './api'

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
    const [selectedShape, setSelectedShape] = useState("square")
    const [shapes, setShapes] = useState([])
    const [shapeColor, setShapeColor] = useState("red")
    const [colorSequenceList, setColorSequenceList] = useState([])
    const [selectedColorSequence, setSelectedColorSequence] = useState()
    const shapeRef = useRef(null)

    useEffect(() => {
      getShapeList(setShapes)
      getColorSequenceList(setColorSequenceList)
    }, [setShapes, setColorSequenceList])

    return (
        <Context.Provider
            value={{
                selectedShape,
                setSelectedShape,
                shapeColor,
                setShapeColor,
                colorSequenceList,
                selectedColorSequence,
                setSelectedColorSequence,
                shapeRef,
                shapes
            }}
            >{children}</Context.Provider>
    )
}