import { useEffect, useRef, useState } from "react"

export default function ScratchCard() {
  const [isScratched, setIsScratched] = useState(false)
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef(null)
  const imageCanvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [scratchProgress, setScratchProgress] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = 300
    const height = 500
    canvas.width = width
    canvas.height = height

    // Create gradient background - BigBasket Green Theme
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "#84C225")
    gradient.addColorStop(0.5, "#6FA81E")
    gradient.addColorStop(1, "#5A8E19")
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

    // Add basket icon with glow
    ctx.shadowBlur = 20
    ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
    ctx.font = "120px Arial"
    ctx.fillText("🛒", width / 2, height / 2 + 100)
    
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

        // Create gradient background - BigBasket Theme
        const gradient = imgCtx.createLinearGradient(0, 0, 0, height)
        gradient.addColorStop(0, "#f0fde4")
        gradient.addColorStop(1, "#e8f5d6")
        imgCtx.fillStyle = gradient
        imgCtx.fillRect(0, 0, width, height)

        // Decorative circles
        imgCtx.fillStyle = "rgba(132, 194, 37, 0.1)"
        imgCtx.beginPath()
        imgCtx.arc(-30, 50, 100, 0, Math.PI * 2)
        imgCtx.fill()
        imgCtx.beginPath()
        imgCtx.arc(width + 30, height - 50, 120, 0, Math.PI * 2)
        imgCtx.fill()

        // BigBasket Logo
        imgCtx.fillStyle = "#84C225"
        imgCtx.font = "bold 32px Arial, sans-serif"
        imgCtx.textAlign = "center"
        imgCtx.fillText("bigbasket", width / 2, 60)

        imgCtx.font = "bold 10px Arial, sans-serif"
        imgCtx.fillStyle = "#5A8E19"
        imgCtx.fillText("INDIA'S LARGEST ONLINE SUPERMARKET", width / 2, 78)

        // Decorative line
        imgCtx.strokeStyle = "#c7e89e"
        imgCtx.lineWidth = 2
        imgCtx.beginPath()
        imgCtx.moveTo(40, 95)
        imgCtx.lineTo(width - 40, 95)
        imgCtx.stroke()

        // Offer badge
        imgCtx.fillStyle = "#DC3226"
        imgCtx.beginPath()
        imgCtx.roundRect(width / 2 - 70, 110, 140, 45, 8)
        imgCtx.fill()

        imgCtx.fillStyle = "white"
        imgCtx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("FLAT ₹200 OFF", width / 2, 138)

        // Main offer text
        imgCtx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillStyle = "#2D2D2D"
        imgCtx.fillText("On Your First Order", width / 2, 180)

        imgCtx.font = '13px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillStyle = "#666666"
        imgCtx.fillText("Min Order Value: ₹1000", width / 2, 205)

        // Fresh vegetables icons
        imgCtx.font = "28px Arial"
        imgCtx.fillText("🥬 🥕 🍅", width / 2, 240)

        // Coupon code section with shadow
        imgCtx.shadowColor = "rgba(0, 0, 0, 0.1)"
        imgCtx.shadowBlur = 15
        imgCtx.shadowOffsetY = 5
        
        imgCtx.fillStyle = "white"
        imgCtx.beginPath()
        imgCtx.roundRect(30, 260, width - 60, 90, 12)
        imgCtx.fill()

        imgCtx.shadowBlur = 0
        imgCtx.shadowOffsetY = 0

        // Dashed border
        imgCtx.strokeStyle = "#84C225"
        imgCtx.lineWidth = 2
        imgCtx.setLineDash([5, 5])
        imgCtx.beginPath()
        imgCtx.roundRect(30, 260, width - 60, 90, 12)
        imgCtx.stroke()
        imgCtx.setLineDash([])

        imgCtx.fillStyle = "#84C225"
        imgCtx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.textAlign = "center"
        imgCtx.fillText("USE COUPON CODE", width / 2, 285)

        imgCtx.fillStyle = "#2D2D2D"
        imgCtx.font = "bold 32px monospace"
        imgCtx.fillText("BB200", width / 2, 320)

        // Copy button
        imgCtx.fillStyle = "#f0fde4"
        imgCtx.beginPath()
        imgCtx.roundRect(width / 2 + 55, 305, 32, 32, 8)
        imgCtx.fill()
        
        imgCtx.fillStyle = "#84C225"
        imgCtx.font = "18px Arial"
        imgCtx.fillText("📋", width / 2 + 71, 325)

        // Claim button with BigBasket green
        imgCtx.fillStyle = "#84C225"
        imgCtx.beginPath()
        imgCtx.roundRect(30, 375, width - 60, 50, 8)
        imgCtx.fill()

        imgCtx.fillStyle = "white"
        imgCtx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("Shop Now 🛒", width / 2, 405)

        // Terms text
        imgCtx.fillStyle = "#999999"
        imgCtx.font = '10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        imgCtx.fillText("*T&C Apply | Valid for New Users Only", width / 2, 450)
        
        // Validity
        imgCtx.fillText("Valid till: 31st Dec 2025", width / 2, 470)
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
    setScratchProgress(Math.min(percentage, 100))

    if (percentage > 50 && !isScratched) {
      setIsScratched(true)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText("BB200")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleClose = () => {
    setIsScratched(false)
    setCopied(false)
    setScratchProgress(0)
    setShowConfetti(false)
    
    // Redraw the scratch overlay
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = 300
    const height = 500

    // Create gradient background - BigBasket Green Theme
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "#84C225")
    gradient.addColorStop(0.5, "#6FA81E")
    gradient.addColorStop(1, "#5A8E19")
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

    // Add basket icon with glow
    ctx.shadowBlur = 20
    ctx.shadowColor = "rgba(255, 255, 255, 0.5)"
    ctx.font = "120px Arial"
    ctx.fillText("🛒", width / 2, height / 2 + 100)
    
    // Reset shadow
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-green-800 flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 sm:-bottom-20 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                backgroundColor: ['#84C225', '#6FA81E', '#DC3226', '#FFD700', '#FF6B35'][Math.floor(Math.random() * 5)],
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center space-y-1 sm:space-y-2 px-4 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl animate-pulse-slow">
            🛒 Win Big on bigbasket!
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-100 animate-in fade-in delay-300">
            Scratch the card to reveal your exclusive grocery coupon
          </p>
          {!isScratched && scratchProgress > 0 && (
            <div className="mt-4 animate-in fade-in slide-in-from-bottom">
              <div className="bg-white/20 backdrop-blur-sm rounded-full h-3 w-48 mx-auto overflow-hidden border border-white/30">
                <div 
                  className="h-full bg-gradient-to-r from-lime-400 to-green-500 transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${scratchProgress}%` }}
                />
              </div>
              <p className="text-green-200 text-sm mt-2 font-semibold">{Math.round(scratchProgress)}% Revealed</p>
            </div>
          )}
        </div>

        {/* Phone Mockup */}
        <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg transform hover:scale-105 transition-all duration-500 animate-in zoom-in delay-200">
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden border-[10px] sm:border-[14px] border-gray-900 relative hover:shadow-green-500/50 transition-shadow duration-500">
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
                  <span className="text-xs sm:text-base">�</span>
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
                    className="cursor-pointer rounded-xl sm:rounded-2xl shadow-2xl relative z-10 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 max-w-[240px] sm:max-w-[300px]"
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
          <div className="text-center px-4 animate-in fade-in delay-500">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 animate-bounce">
              <span className="text-2xl animate-wiggle">👆</span>
              <p className="text-white text-base sm:text-lg font-semibold">Scratch to reveal your offer</p>
            </div>
          </div>
        )}

        {/* Success message */}
        {isScratched && (
          <div className="text-center space-y-3 animate-in slide-in-from-bottom duration-700 px-4">
            <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md px-6 sm:px-8 py-4 sm:py-6 rounded-2xl sm:rounded-3xl border-2 border-white/30 relative shadow-2xl hover:shadow-green-500/50 transition-all duration-500 hover:scale-105">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white to-green-100 text-green-900 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 hover:rotate-90 flex items-center justify-center font-bold text-xl sm:text-2xl border-2 border-white"
                aria-label="Close"
              >
                ×
              </button>
              
              <div className="animate-in zoom-in duration-500">
                <div className="text-5xl sm:text-6xl mb-3 animate-bounce">🎉</div>
                <p className="text-white text-2xl sm:text-3xl font-bold mb-2 animate-pulse-slow">Congratulations!</p>
                <p className="text-green-100 text-sm sm:text-base mb-4">Your bigbasket coupon is ready</p>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-4 border border-white/30">
                  <p className="text-green-200 text-xs mb-1">COUPON CODE</p>
                  <p className="text-white text-2xl sm:text-3xl font-bold tracking-wider">BB200</p>
                  <p className="text-green-200 text-xs mt-1">Save ₹200 on orders above ₹1000</p>
                </div>
                
                <button
                  onClick={copyToClipboard}
                  className="bg-gradient-to-r from-lime-500 to-green-600 text-white px-6 sm:px-8 py-3 rounded-lg font-bold hover:from-lime-600 hover:to-green-700 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95"
                >
                  {copied ? (
                    <span className="flex items-center gap-2">
                      <span className="text-xl">✓</span> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="text-xl">📋</span> Copy Code & Shop
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
