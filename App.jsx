"use client"

import React from "react"
import ReactDOM from "react-dom"

const { useEffect, useRef, useState } = React

function ScratchCard() {
  const [isScratched, setIsScratched] = useState(false)
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef(null)
  const imageCanvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [scratchPercentage, setScratchPercentage] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = 280
    const height = 420
    canvas.width = width
    canvas.height = height

    // Draw green background
    ctx.fillStyle = "#22c55e"
    ctx.fillRect(0, 0, width, height)

    // Add text
    ctx.fillStyle = "white"
    ctx.font = 'bold 48px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Scratch", width / 2, height / 2 - 80)
    ctx.fillText("Now", width / 2, height / 2 - 20)

    // Add gift icon
    ctx.font = "100px Arial"
    ctx.fillText("🎁", width / 2, height / 2 + 100)

    const imageCanvas = imageCanvasRef.current
    if (imageCanvas) {
      const imgCtx = imageCanvas.getContext("2d")
      if (imgCtx) {
        imageCanvas.width = width
        imageCanvas.height = height

        // Create the coupon image content
        imgCtx.fillStyle = "white"
        imgCtx.fillRect(0, 0, width, height)

        // Logo
        imgCtx.fillStyle = "#92400e"
        imgCtx.font = "bold 32px Georgia, serif"
        imgCtx.textAlign = "center"
        imgCtx.fillText("CLAY", width / 2, 60)

        imgCtx.font = "bold 12px Georgia, serif"
        imgCtx.fillText("Co.", width / 2 + 45, 55)

        // Offer text
        imgCtx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillStyle = "#000"
        imgCtx.fillText("Flat 20% Off", width / 2, 120)

        imgCtx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillStyle = "#666"
        imgCtx.fillText("& Get Free Neutral with Rs 299", width / 2, 145)

        // Coupon code section
        imgCtx.fillStyle = "#dcfce7"
        imgCtx.fillRect(20, 170, width - 40, 80)

        imgCtx.fillStyle = "#666"
        imgCtx.font = '10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.textAlign = "center"
        imgCtx.fillText("COUPON CODE", width / 2, 190)

        imgCtx.fillStyle = "#000"
        imgCtx.font = "bold 20px monospace"
        imgCtx.fillText("CCBB20", width / 2, 225)

        // Copy icon
        imgCtx.fillStyle = "#666"
        imgCtx.font = "16px Arial"
        imgCtx.fillText("📋", width / 2 + 50, 225)

        // Claim button
        imgCtx.fillStyle = "#22c55e"
        imgCtx.fillRect(20, 280, width - 40, 45)

        imgCtx.fillStyle = "white"
        imgCtx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("Claim now", width / 2, 307)

        // Terms text
        imgCtx.fillStyle = "#999"
        imgCtx.font = '10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("Terms and Conditions", width / 2, 375)
      }
    }
  }, [])

  const handleScratch = (e) => {
    if (isScratched) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const rect = canvas.getBoundingClientRect()

    let x, y

    if (e.touches) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x, y, 40, 0, Math.PI * 2)
    ctx.fill()

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    let transparentPixels = 0

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 128) {
        transparentPixels++
      }
    }

    const percentage = (transparentPixels / (data.length / 4)) * 100
    setScratchPercentage(percentage)

    if (percentage > 50) {
      setIsScratched(true)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText("CCBB20")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Phone Mockup */}
      <div className="w-full max-w-sm">
        <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
          {/* Notch */}
          <div className="bg-black h-6 flex justify-center items-center">
            <div className="bg-black w-32 h-5 rounded-b-2xl"></div>
          </div>

          {/* Screen Content */}
          <div
            className="bg-gradient-to-b from-slate-100 to-slate-50 w-full flex items-center justify-center relative overflow-hidden"
            style={{ height: "540px" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <canvas
                ref={imageCanvasRef}
                className="rounded-2xl"
                style={{
                  width: "280px",
                  height: "420px",
                }}
              />
            </div>

            <div className="w-full h-full flex items-center justify-center p-6">
              {!isScratched && (
                <canvas
                  ref={canvasRef}
                  onMouseDown={() => setIsDrawing(true)}
                  onMouseUp={() => setIsDrawing(false)}
                  onMouseMove={(e) => isDrawing && handleScratch(e)}
                  onTouchStart={() => setIsDrawing(true)}
                  onTouchEnd={() => setIsDrawing(false)}
                  onTouchMove={handleScratch}
                  className="cursor-pointer rounded-2xl shadow-lg relative z-10"
                  style={{
                    touchAction: "none",
                    width: "280px",
                    height: "420px",
                  }}
                />
              )}

              {isScratched && (
                <div className="relative z-20 rounded-2xl overflow-hidden shadow-lg">
                  <canvas
                    ref={imageCanvasRef}
                    style={{
                      width: "280px",
                      height: "420px",
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Bottom bezel */}
          <div className="bg-black h-6"></div>
        </div>
      </div>

      {/* Debug Info */}
      {!isScratched && (
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-4 py-2 rounded text-sm text-gray-700">
          Scratched: {scratchPercentage.toFixed(1)}%
        </div>
      )}
    </div>
  )
}

ReactDOM.render(<ScratchCard />, document.getElementById("root"))
