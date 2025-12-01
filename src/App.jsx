import { useEffect, useRef, useState } from "react"

export default function ScratchCard() {
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

    const width = 300
    const height = 500
    canvas.width = width
    canvas.height = height

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "#a855f7")
    gradient.addColorStop(0.5, "#9333ea")
    gradient.addColorStop(1, "#7e22ce")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add sparkle effects
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 3 + 1
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add text with shadow
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)"
    ctx.shadowBlur = 10
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 2
    
    ctx.fillStyle = "white"
    ctx.font = 'bold 56px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Scratch", width / 2, height / 2 - 100)
    ctx.fillText("& Win!", width / 2, height / 2 - 30)

    // Add gift icon with glow
    ctx.shadowBlur = 20
    ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
    ctx.font = "120px Arial"
    ctx.fillText("🎁", width / 2, height / 2 + 100)
    
    // Reset shadow
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    const imageCanvas = imageCanvasRef.current
    if (imageCanvas) {
      const imgCtx = imageCanvas.getContext("2d")
      if (imgCtx) {
        imageCanvas.width = width
        imageCanvas.height = height

        // Create gradient background
        const gradient = imgCtx.createLinearGradient(0, 0, 0, height)
        gradient.addColorStop(0, "#faf5ff")
        gradient.addColorStop(1, "#f3e8ff")
        imgCtx.fillStyle = gradient
        imgCtx.fillRect(0, 0, width, height)

        // Decorative circles
        imgCtx.fillStyle = "rgba(168, 85, 247, 0.1)"
        imgCtx.beginPath()
        imgCtx.arc(-30, 50, 100, 0, Math.PI * 2)
        imgCtx.fill()
        imgCtx.beginPath()
        imgCtx.arc(width + 30, height - 50, 120, 0, Math.PI * 2)
        imgCtx.fill()

        // Logo with gradient
        const logoGradient = imgCtx.createLinearGradient(0, 40, 0, 80)
        logoGradient.addColorStop(0, "#9333ea")
        logoGradient.addColorStop(1, "#7e22ce")
        imgCtx.fillStyle = logoGradient
        imgCtx.font = "bold 36px Georgia, serif"
        imgCtx.textAlign = "center"
        imgCtx.fillText("CLAY", width / 2, 70)

        imgCtx.font = "bold 14px Georgia, serif"
        imgCtx.fillStyle = "#a855f7"
        imgCtx.fillText("Co.", width / 2 + 50, 65)

        // Decorative line
        imgCtx.strokeStyle = "#e9d5ff"
        imgCtx.lineWidth = 2
        imgCtx.beginPath()
        imgCtx.moveTo(40, 100)
        imgCtx.lineTo(width - 40, 100)
        imgCtx.stroke()

        // Offer badge
        imgCtx.fillStyle = "#9333ea"
        imgCtx.beginPath()
        imgCtx.roundRect(width / 2 - 60, 120, 120, 40, 20)
        imgCtx.fill()

        imgCtx.fillStyle = "white"
        imgCtx.font = 'bold 20px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("20% OFF", width / 2, 145)

        // Main offer text
        imgCtx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillStyle = "#1f2937"
        imgCtx.fillText("Special Discount", width / 2, 195)

        imgCtx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillStyle = "#6b7280"
        imgCtx.fillText("+ Free Gift with ₹299 Purchase", width / 2, 220)

        // Coupon code section with shadow
        imgCtx.shadowColor = "rgba(0, 0, 0, 0.1)"
        imgCtx.shadowBlur = 15
        imgCtx.shadowOffsetY = 5
        
        imgCtx.fillStyle = "white"
        imgCtx.beginPath()
        imgCtx.roundRect(30, 250, width - 60, 90, 15)
        imgCtx.fill()

        imgCtx.shadowBlur = 0
        imgCtx.shadowOffsetY = 0

        // Dashed border
        imgCtx.strokeStyle = "#e9d5ff"
        imgCtx.lineWidth = 2
        imgCtx.setLineDash([5, 5])
        imgCtx.beginPath()
        imgCtx.roundRect(30, 250, width - 60, 90, 15)
        imgCtx.stroke()
        imgCtx.setLineDash([])

        imgCtx.fillStyle = "#9333ea"
        imgCtx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.textAlign = "center"
        imgCtx.fillText("COUPON CODE", width / 2, 275)

        imgCtx.fillStyle = "#1f2937"
        imgCtx.font = "bold 28px monospace"
        imgCtx.fillText("CCBB20", width / 2, 310)

        // Copy button
        imgCtx.fillStyle = "#f3e8ff"
        imgCtx.beginPath()
        imgCtx.roundRect(width / 2 + 60, 295, 30, 30, 8)
        imgCtx.fill()
        
        imgCtx.fillStyle = "#9333ea"
        imgCtx.font = "18px Arial"
        imgCtx.fillText("📋", width / 2 + 75, 313)

        // Claim button with gradient
        const btnGradient = imgCtx.createLinearGradient(0, 370, 0, 420)
        btnGradient.addColorStop(0, "#a855f7")
        btnGradient.addColorStop(1, "#9333ea")
        imgCtx.fillStyle = btnGradient
        imgCtx.beginPath()
        imgCtx.roundRect(30, 370, width - 60, 50, 25)
        imgCtx.fill()

        imgCtx.fillStyle = "white"
        imgCtx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("Claim Now 🎉", width / 2, 400)

        // Terms text
        imgCtx.fillStyle = "#9ca3af"
        imgCtx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("*Terms and Conditions Apply", width / 2, 455)
        
        // Validity
        imgCtx.fillText("Valid until Dec 31, 2025", width / 2, 475)
      }
    }
  }, [])

  const handleScratch = (e) => {
    if (isScratched) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
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

  const handleClose = () => {
    setIsScratched(false)
    setScratchPercentage(0)
    setCopied(false)
    
    // Redraw the scratch overlay
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = 300
    const height = 500

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "#a855f7")
    gradient.addColorStop(0.5, "#9333ea")
    gradient.addColorStop(1, "#7e22ce")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add sparkle effects
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 3 + 1
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add text with shadow
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)"
    ctx.shadowBlur = 10
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 2
    
    ctx.fillStyle = "white"
    ctx.font = 'bold 56px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("Scratch", width / 2, height / 2 - 100)
    ctx.fillText("& Win!", width / 2, height / 2 - 30)

    // Add gift icon with glow
    ctx.shadowBlur = 20
    ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
    ctx.font = "120px Arial"
    ctx.fillText("🎁", width / 2, height / 2 + 100)
    
    // Reset shadow
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 sm:-bottom-20 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center space-y-1 sm:space-y-2 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
            🎁 Win Amazing Rewards!
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200">
            Scratch the card to reveal your exclusive coupon
          </p>
        </div>

        {/* Phone Mockup */}
        <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-105 transition-transform duration-300">
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden border-[10px] sm:border-[14px] border-gray-900 relative">
            {/* Camera notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
              <div className="bg-black w-28 h-5 sm:w-40 sm:h-7 rounded-b-2xl sm:rounded-b-3xl flex items-center justify-center gap-1 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-800 rounded-full"></div>
                <div className="w-12 h-1 sm:w-16 sm:h-1.5 bg-gray-800 rounded-full"></div>
              </div>
            </div>

            {/* Screen Content */}
            <div className="bg-gradient-to-b from-white to-gray-50 w-full flex items-center justify-center relative overflow-hidden min-h-[480px] sm:min-h-[600px]">
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 flex items-center justify-between px-4 sm:px-8 text-[10px] sm:text-xs text-gray-800 z-40">
                <span className="font-semibold">9:41</span>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <span className="text-xs sm:text-base">📶</span>
                  <span className="text-xs sm:text-base">📡</span>
                  <span className="text-xs sm:text-base">🔋</span>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pt-6 sm:pt-8">
                <canvas
                  ref={imageCanvasRef}
                  className="rounded-xl sm:rounded-2xl max-w-[240px] sm:max-w-[300px]"
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "3/5",
                  }}
                />
              </div>

              <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 pt-10 sm:pt-14">
                {!isScratched && (
                  <canvas
                    ref={canvasRef}
                    onMouseDown={() => setIsDrawing(true)}
                    onMouseUp={() => setIsDrawing(false)}
                    onMouseMove={(e) => isDrawing && handleScratch(e)}
                    onTouchStart={() => setIsDrawing(true)}
                    onTouchEnd={() => setIsDrawing(false)}
                    onTouchMove={handleScratch}
                    className="cursor-pointer rounded-xl sm:rounded-2xl shadow-2xl relative z-10 hover:shadow-purple-500/50 transition-shadow max-w-[240px] sm:max-w-[300px]"
                    style={{
                      touchAction: "none",
                      width: "100%",
                      height: "auto",
                      aspectRatio: "3/5",
                    }}
                  />
                )}

                {isScratched && (
                  <div className="relative z-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500 max-w-[240px] sm:max-w-[300px]">
                    <canvas
                      ref={imageCanvasRef}
                      style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "3/5",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-24 h-0.5 sm:w-32 sm:h-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        {!isScratched && (
          <div className="text-center animate-bounce px-4">
            <p className="text-white text-base sm:text-lg font-semibold">👆 Scratch to reveal</p>
          </div>
        )}

        {/* Success message */}
        {isScratched && (
          <div className="text-center space-y-3 animate-in slide-in-from-bottom duration-700 px-4">
            <div className="bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-white/20 relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-white text-purple-900 rounded-full shadow-lg hover:bg-purple-100 transition-all hover:scale-110 flex items-center justify-center font-bold text-lg sm:text-xl"
                aria-label="Close"
              >
                ×
              </button>
              
              <p className="text-white text-xl sm:text-2xl font-bold mb-2">🎉 Congratulations!</p>
              <p className="text-purple-200 text-sm sm:text-base">Your exclusive coupon is ready to use</p>
              <button
                onClick={copyToClipboard}
                className="mt-3 sm:mt-4 bg-white text-purple-900 px-5 sm:px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors text-sm sm:text-base"
              >
                {copied ? "✓ Copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
