"use client"
import React from 'react'
import { useState, useEffect } from 'react'

const Customcursor = () => {
    const [position, setPosition] = useState({x:0, y:0})
    const [ishovering, setIshovering] = useState(false)

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({x:e.clientX, y:e.clientY})
        }

        window.addEventListener('mousemove', updatePosition) 

        const addhover = () => setIshovering(true)
        const removehover = () => setIshovering(false)

        // Add hover for Links and Buttons
        document.querySelectorAll("a, button").forEach( element=> {
            element.addEventListener("mouseenter", addhover)
            element.addEventListener("mouseleave", removehover)
        })


        return () => {
            window.removeEventListener("mousemove", updatePosition)
            document.querySelectorAll("a, button").forEach( element => {
                element.removeEventListener("mouseenter", addhover)
                element.removeEventListener("mouseleave", removehover)
            });
        }
    }, [])
  return (
    <div className={`custom-cursor z-50 fixed pointer-events-none w-10 h-10 border-2 border-white rounded-full  transition-transform duration-400 ease-in-out ${ishovering?" translate-x-1/2 bg-white/20": ""}`} style={{left:`${position.x}px`, top:`${position.y}px`, transform:`translate(-50%, -50%) scale(${ishovering?1.8 : 1})`}}>
    </div>
  )
}

export default Customcursor
