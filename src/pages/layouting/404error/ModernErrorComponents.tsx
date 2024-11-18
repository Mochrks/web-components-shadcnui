import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Title } from '@/components/demo/Title'
import { Home, Loader2, RefreshCw, Search } from 'lucide-react'

// 1. Glitch Text Animation
const GlitchText = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <motion.h1
                className="text-8xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <span className="relative inline-block">
                    <motion.span
                        className="absolute top-0 left-0 h-full w-full bg-red-500"
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.span
                        className="absolute top-0 left-0 h-full w-full bg-blue-500"
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.1 }}
                    />
                    404
                </span>
            </motion.h1>
            <motion.p
                className="text-2xl mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Oops! Page not found
            </motion.p>
            <Button>Go Home</Button>
        </div>
    )
}

// 2. Interactive Illustration with Particles
const Cosmic404 = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden">
            <div className="relative">
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...Array(100)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            animate={{
                                x: Math.random() * 400 - 200,
                                y: Math.random() * 400 - 200,
                                scale: Math.random() * 1.5 + 0.5,
                                opacity: Math.random(),
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        />
                    ))}
                </motion.div>
                <motion.h1
                    className="text-9xl font-bold text-white mb-8 relative z-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    404
                </motion.h1>
            </div>
            <motion.p
                className="text-2xl text-white mb-8 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Lost in the cosmic void
            </motion.p>
            <Button
                variant="outline"
                className="relative z-10"
                onClick={() => { }}
            >
                <Home className="mr-2 h-4 w-4" /> Return to Earth
            </Button>
        </div>
    )
}

// 3. SVG Path Animation
const SVGPathAnimation = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
            <svg width="200" height="200" viewBox="0 0 100 100">
                <motion.path
                    d="M10 90 L50 10 L90 90 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
            </svg>
            <motion.h1
                className="text-6xl font-bold mt-8 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                404
            </motion.h1>
            <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                The page you're looking for doesn't exist
            </motion.p>
            <Button variant="outline">Go Back</Button>
        </div>
    )
}

// 4. Parallax Effect
const ParallaxEffect = () => {
    const y = useMotionValue(0)
    const background = useTransform(y, [0, -300], ["#3498db", "#e74c3c"])
    const text1Y = useTransform(y, [0, -300], [0, -150])
    const text2Y = useTransform(y, [0, -300], [0, -100])
    const text3Y = useTransform(y, [0, -300], [0, -50])

    return (
        <motion.div
            className="h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background }}
            drag="y"
            dragConstraints={{ top: -300, bottom: 0 }}
            onDrag={(_, info) => y.set(info.point.y)}
        >
            <motion.h1
                className="text-9xl font-bold text-white mb-4"
                style={{ y: text1Y }}
            >
                4
            </motion.h1>
            <motion.h1
                className="text-9xl font-bold text-white mb-4"
                style={{ y: text2Y }}
            >
                0
            </motion.h1>
            <motion.h1
                className="text-9xl font-bold text-white mb-8"
                style={{ y: text3Y }}
            >
                4
            </motion.h1>
            <p className="text-2xl text-white mb-8">Drag to explore</p>
            <Button variant="secondary">Return Home</Button>
        </motion.div>
    )
}

// 5. Animated Maze
const AnimatedMaze = () => {
    const pathVariants = {
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: 2, ease: "easeInOut" } }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <svg width="300" height="300" viewBox="0 0 300 300">
                <motion.path
                    d="M50 50 L250 50 L250 250 L50 250 L50 50 M50 150 L150 150 M150 50 L150 150 M250 150 L150 150"
                    stroke="#2563eb"
                    strokeWidth="10"
                    fill="none"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="10"
                    fill="#ef4444"
                    animate={{
                        cx: [50, 250, 250, 150, 150, 250],
                        cy: [50, 50, 250, 250, 150, 150],
                    }}
                    transition={{ duration: 4, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 0.8, 1], repeat: Infinity }}
                />
            </svg>
            <h1 className="text-4xl font-bold mt-8 mb-4">404: Lost in the Maze</h1>
            <p className="text-xl mb-8">Let's find our way back together</p>
            <Button>Exit Maze</Button>
        </div>
    )
}

// 6. Typewriter Effect
const TypewriterEffect = () => {
    const text = ""
    const [displayText, setDisplayText] = useState("404:Pages Not Found")

    useEffect(() => {
        let i = 0
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText((prev) => prev + text.charAt(i))
                i++
            } else {
                clearInterval(typingInterval)
            }
        }, 100)

        return () => clearInterval(typingInterval)
    }, [])

    return (

        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-6xl font-mono mb-8 relative">
                {displayText}
                <span className={`inline-block w-1 h-10 bg-white ml-2 ${displayText.length === text.length ? '' : 'animate-blink'}`}></span>
            </h1>
            <p className="text-xl mb-8">The page you're looking for has gone missing.</p>
            <Button variant="outline" className='text-black'>Return to Safety</Button>
        </div>

    )
}



// 7. HolographicError
const HolographicError = () => {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div className="h-screen flex items-center justify-center bg-gray-900">
            <div
                className="relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <motion.div
                    className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                    style={{
                        WebkitTextStroke: '2px rgba(255,255,255,0.1)',
                    }}
                    animate={{
                        filter: isHovering ? [
                            'hue-rotate(0deg)',
                            'hue-rotate(360deg)',
                        ] : 'hue-rotate(0deg)',
                    }}
                    transition={{
                        duration: isHovering ? 2 : 0,
                        repeat: isHovering ? Infinity : 0,
                        ease: 'linear',
                    }}
                >
                    404
                </motion.div>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl"
                    animate={{
                        opacity: isHovering ? [0.5, 0.8, 0.5] : 0.5,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                />
            </div>
            <div className="absolute bottom-20 text-center">
                <p className="text-white text-2xl mb-4">Reality glitch detected</p>
                <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-gray-900"
                >
                    Recalibrate
                </Button>
            </div>
        </div>
    )
}

// 8. AI-Powered Search (Updated)
const AIPoweredSearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [suggestion, setSuggestion] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSearching(true)
        setTimeout(() => {
            setIsSearching(false)
            setSuggestion("How about trying our homepage?")
        }, 2000)
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
            <Card className="w-96 bg-white/10 backdrop-blur-lg border-0">
                <CardContent className="pt-6">
                    <h1 className="text-4xl font-bold mb-4 text-center text-white">404: Not Found</h1>
                    <p className="text-center mb-6 text-gray-300">Let our AI help you find what you're looking for</p>
                    <form onSubmit={handleSearch} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="search" className="text-white">Search</Label>
                            <div className="relative">
                                <Input
                                    id="search"
                                    type="text"
                                    placeholder="What are you looking for?"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="bg-white/20 border-0 text-white placeholder-gray-400"
                                />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSearching}>
                            {isSearching ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Searching...
                                </>
                            ) : (
                                "Search"
                            )}
                        </Button>
                    </form>
                    <AnimatePresence>
                        {suggestion && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-4 text-center text-white"
                            >
                                <p>{suggestion}</p>
                                <Button variant="link" className="mt-2 text-blue-400 hover:text-blue-300">
                                    Go to Homepage
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </div>
    )
}

// 9. Broken Link (New)
const BrokenLink = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <svg width="200" height="200" viewBox="0 0 200 200">
                <motion.path
                    d="M50,100 C50,72 72,50 100,50 C128,50 150,72 150,100"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="10"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                <motion.path
                    d="M50,100 C50,128 72,150 100,150 C128,150 150,128 150,100"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="10"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
            </svg>
            <h1 className="text-4xl font-bold mt-8 mb-4">Broken Link</h1>
            <p className="text-xl mb-8 text-gray-600">The page you're looking for has a broken connection</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <RefreshCw className="mr-2 h-4 w-4" />
                Reconnect
            </Button>
        </div>
    )
}

// 10. Error Portal (New)
const ErrorPortal = () => {
    const [isEntering, setIsEntering] = useState(false)

    return (
        <div className="h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="relative">
                <motion.div
                    className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600 to-pink-500"
                    animate={{
                        scale: isEntering ? 20 : 1,
                        opacity: isEntering ? 0 : 1,
                    }}
                    transition={{ duration: 1.5 }}
                />
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ opacity: isEntering ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                        <p className="text-xl text-gray-300 mb-8">You've discovered an error portal</p>
                        <Button
                            className="bg-white text-gray-900 hover:bg-gray-200"
                            onClick={() => setIsEntering(true)}
                        >
                            Enter Portal
                        </Button>
                    </div>
                </motion.div>
            </div>
            {isEntering && (
                <motion.div
                    className="absolute inset-0 bg-white flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome Back</h2>
                        <p className="text-xl text-gray-600 mb-8">You've successfully escaped the error</p>
                        <Button className="bg-gray-900 text-white hover:bg-gray-800">
                            <Home className="mr-2 h-4 w-4" />
                            Go to Homepage
                        </Button>
                    </div>
                </motion.div>
            )}
        </div>
    )
}



// Main component to showcase all 404 Error components
export default function ModernErrorComponents() {
    const [currentComponent, setCurrentComponent] = useState(0)
    const components = [
        GlitchText,
        Cosmic404,
        SVGPathAnimation,
        ParallaxEffect,
        AnimatedMaze,
        TypewriterEffect,
        HolographicError,
        AIPoweredSearch,
        BrokenLink,
        ErrorPortal,
    ]

    return (
        <>
            <div className="py-5">
                <Title name="Screen 404 Error Layout " />
            </div>
            <div className="min-h-screen">
                {components.map((Component, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentComponent === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: currentComponent === index ? 'block' : 'none' }}
                    >
                        <Component />
                    </motion.div>
                ))}
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {components.map((_, index) => (
                        <Button
                            key={index}
                            variant={currentComponent === index ? "default" : "outline"}
                            onClick={() => setCurrentComponent(index)}
                        >
                            {index + 1}
                        </Button>
                    ))}
                </div>
            </div>
        </>
    )
}