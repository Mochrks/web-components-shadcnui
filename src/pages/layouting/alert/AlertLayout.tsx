'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Loader2, AlertCircle, CheckCircle2, XCircle, InfoIcon, BellRing, AlertTriangle, Zap, Coffee, Heart, Star, Sun, Moon, Cloud, Umbrella, ThumbsUp, Gift, Sparkles, Flame, X, CheckCircle } from 'lucide-react'
import { Title } from '@/components/demo/Title'

type AlertType = 'info' | 'success' | 'warning' | 'error' | 'neutral'

interface CustomAlertProps {
    type: AlertType
    title: string
    description: string
    icon: React.ReactNode
    action?: React.ReactNode
}

const CustomAlert: React.FC<CustomAlertProps> = ({ type, title, description, icon, action }) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 15000)
        return () => clearTimeout(timer)
    }, [])

    const bgColor = {
        info: 'bg-blue-50 dark:bg-blue-900',
        success: 'bg-green-50 dark:bg-green-900',
        warning: 'bg-yellow-50 dark:bg-yellow-900',
        error: 'bg-red-50 dark:bg-red-900',
        neutral: 'bg-gray-50 dark:bg-gray-800'
    }[type]

    const iconColor = {
        info: 'text-blue-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
        error: 'text-red-500',
        neutral: 'text-gray-500'
    }[type]

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}
                >
                    <Alert className={`${bgColor} border-l-4 border-${type} shadow-lg`}>
                        <div className="flex items-center">
                            <div className={`mr-3 ${iconColor}`}>{icon}</div>
                            <div>
                                <AlertTitle className="text-lg font-semibold">{title}</AlertTitle>
                                <AlertDescription className="text-sm">{description}</AlertDescription>
                            </div>
                        </div>
                        {action && <div className="mt-2">{action}</div>}
                    </Alert>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

const ProgressAlert: React.FC<{ progress: number }> = ({ progress }) => (
    <Alert className="bg-purple-50 dark:bg-purple-900 border-l-4 border-purple-500">
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
                <Loader2 className="mr-3 animate-spin text-purple-500" />
                <div>
                    <AlertTitle>Processing</AlertTitle>
                    <AlertDescription>Please wait while we process your request...</AlertDescription>
                </div>
            </div>
            <Progress value={progress} className="w-1/3" />
        </div>
    </Alert>
)

const InteractiveAlert: React.FC = () => {
    const [isOn, setIsOn] = useState(false)
    return (
        <Alert className="bg-indigo-50 dark:bg-indigo-900 border-l-4 border-indigo-500">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <BellRing className="mr-3 text-indigo-500" />
                    <div>
                        <AlertTitle>Notifications</AlertTitle>
                        <AlertDescription>Toggle to receive real-time updates</AlertDescription>
                    </div>
                </div>
                <Switch checked={isOn} onCheckedChange={setIsOn} />
            </div>
        </Alert>
    )
}

const FloatingAlert: React.FC = () => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        className="fixed bottom-5 right-5"
    >
        <Alert className="bg-teal-50 dark:bg-teal-900 border-l-4 border-teal-500 shadow-lg">
            <div className="flex items-center">
                <Zap className="mr-3 text-teal-500" />
                <div>
                    <AlertTitle>New Feature!</AlertTitle>
                    <AlertDescription>Check out our latest update</AlertDescription>
                </div>
            </div>
        </Alert>
    </motion.div>
)

const PulsatingAlert: React.FC = () => (
    <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
    >
        <Alert className="bg-pink-50 dark:bg-pink-900 border-l-4 border-pink-500">
            <div className="flex items-center">
                <Heart className="mr-3 text-pink-500" />
                <div>
                    <AlertTitle>Special Offer!</AlertTitle>
                    <AlertDescription>Limited time discount on premium plans</AlertDescription>
                </div>
            </div>
        </Alert>
    </motion.div>
)

const RatingAlert: React.FC = () => {
    const [rating, setRating] = useState(0)
    return (
        <Alert className="bg-amber-50 dark:bg-amber-900 border-l-4 border-amber-500">
            <div className="flex flex-col items-start">
                <div className="flex items-center mb-2">
                    <Star className="mr-3 text-amber-500" />
                    <AlertTitle>Rate Your Experience</AlertTitle>
                </div>
                <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                            key={star}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setRating(star)}
                        >
                            <Star className={`h-6 w-6 ${rating >= star ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
                        </motion.button>
                    ))}
                </div>
            </div>
        </Alert>
    )
}

const WeatherAlert: React.FC<{ temperature: number }> = ({ temperature }) => {
    const isHot = temperature > 30
    return (
        <Alert className={`${isHot ? 'bg-orange-50 dark:bg-orange-900' : 'bg-cyan-50 dark:bg-cyan-900'} border-l-4 ${isHot ? 'border-orange-500' : 'border-cyan-500'}`}>
            <div className="flex items-center">
                {isHot ? <Sun className="mr-3 text-orange-500" /> : <Cloud className="mr-3 text-cyan-500" />}
                <div>
                    <AlertTitle>{isHot ? 'Heat Warning' : 'Weather Update'}</AlertTitle>
                    <AlertDescription>Current temperature: {temperature}°C</AlertDescription>
                </div>
            </div>
        </Alert>
    )
}

const CountdownAlert: React.FC = () => {
    const [countdown, setCountdown] = useState(10)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <Alert className="bg-violet-50 dark:bg-violet-900 border-l-4 border-violet-500">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <AlertTriangle className="mr-3 text-violet-500" />
                    <div>
                        <AlertTitle>Time-Sensitive Alert</AlertTitle>
                        <AlertDescription>This message will self-destruct in {countdown} seconds</AlertDescription>
                    </div>
                </div>
                <Badge variant="outline" className="text-violet-500 border-violet-500">
                    {countdown}
                </Badge>
            </div>
        </Alert>
    )
}

const ExpandableAlert: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <Card className="bg-emerald-50 dark:bg-emerald-900 border-l-4 border-emerald-500">
            <motion.div
                animate={{ height: isExpanded ? 'auto' : '60px' }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Coffee className="mr-3 text-emerald-500" />
                            <AlertTitle>Coffee Break</AlertTitle>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? 'Less' : 'More'}
                        </Button>
                    </div>
                    {isExpanded && (
                        <AlertDescription className="mt-2">
                            Taking regular breaks can improve productivity and reduce stress. Remember to stay hydrated!
                        </AlertDescription>
                    )}
                </div>
            </motion.div>
        </Card>
    )
}

const GradientAlert: React.FC = () => (
    <Alert className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white border-none">
        <div className="flex items-center">
            <Sparkles className="mr-3" />
            <div>
                <AlertTitle>Exciting News!</AlertTitle>
                <AlertDescription>Our new product line is now available</AlertDescription>
            </div>
        </div>
    </Alert>
)

const DarkModeToggleAlert: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    return (
        <Alert className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border-l-4 border-gray-500 transition-colors duration-300`}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    {isDarkMode ? <Moon className="mr-3" /> : <Sun className="mr-3" />}
                    <div>
                        <AlertTitle>Appearance</AlertTitle>
                        <AlertDescription>Toggle between light and dark mode</AlertDescription>
                    </div>
                </div>
                <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            </div>
        </Alert>
    )
}

const EmojiAlert: React.FC = () => (
    <Alert className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500">
        <div className="flex items-center">
            <span className="mr-3 text-2xl" role="img" aria-label="party popper">🎉</span>
            <div>
                <AlertTitle>Celebration Time!</AlertTitle>
                <AlertDescription>You've reached a new milestone</AlertDescription>
            </div>
        </div>
    </Alert>
)

const SlidingAlert: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 15000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="fixed top-5 right-5"
                >
                    <Alert className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 shadow-lg">
                        <div className="flex items-center">
                            <InfoIcon className="mr-3 text-blue-500" />
                            <div>
                                <AlertTitle>Quick Tip</AlertTitle>
                                <AlertDescription>Press 'Ctrl + /' for keyboard shortcuts</AlertDescription>
                            </div>
                        </div>
                    </Alert>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

const ConfettiAlert: React.FC = () => {
    const [showConfetti, setShowConfetti] = useState(false)

    const triggerConfetti = () => {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
    }

    return (
        <Alert className="bg-fuchsia-50 dark:bg-fuchsia-900 border-l-4 border-fuchsia-500">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <Gift className="mr-3 text-fuchsia-500" />
                    <div>
                        <AlertTitle>Congratulations!</AlertTitle>
                        <AlertDescription>You've won a special prize</AlertDescription>
                    </div>
                </div>
                <Button onClick={triggerConfetti} variant="outline" className="border-fuchsia-500 text-fuchsia-500">
                    Claim
                </Button>
            </div>
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-fuchsia-500 rounded-full"
                            initial={{ top: '100%', left: `${Math.random() * 100}%` }}
                            animate={{
                                top: '-10%',
                                left: `${Math.random() * 100}%`,
                                rotate: Math.random() * 360,
                            }}
                            transition={{ duration: Math.random() * 2 + 1, ease: 'easeOut' }}
                        />
                    ))}
                </div>
            )}
        </Alert>
    )
}

const LiveUpdateAlert: React.FC = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Alert className="bg-lime-50 dark:bg-lime-900 border-l-4 border-lime-500">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <Flame className="mr-3 text-lime-500" />
                    <div>
                        <AlertTitle>Live Updates</AlertTitle>
                        <AlertDescription>New activities in the last minute: {count}</AlertDescription>
                    </div>
                </div>
                <Badge variant="outline" className="animate-pulse text-lime-500 border-lime-500">
                    Live
                </Badge>
            </div>
        </Alert>
    )
}

const InteractiveQuizAlert: React.FC = () => {
    const [answer, setAnswer] = useState<string | null>(null)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

    const handleAnswer = (selectedAnswer: string) => {
        setAnswer(selectedAnswer)
        setIsCorrect(selectedAnswer === 'Paris')
    }

    return (
        <Alert className="bg-indigo-50 dark:bg-indigo-900 border-l-4 border-indigo-500">
            <div className="flex flex-col items-start">
                <div className="flex items-center mb-2">
                    <ThumbsUp className="mr-3 text-indigo-500" />
                    <AlertTitle>Quick Quiz</AlertTitle>
                </div>
                <AlertDescription className="mb-2">What is the capital of France?</AlertDescription>
                <div className="flex space-x-2">
                    {['London', 'Berlin', 'Paris', 'Madrid'].map((city) => (
                        <Button
                            key={city}
                            variant={answer === city ? (isCorrect ? 'default' : 'destructive') : 'outline'}
                            size="sm"
                            onClick={() => handleAnswer(city)}
                            className={answer === city && isCorrect ? 'bg-green-500 hover:bg-green-600' : ''}
                        >
                            {city}
                        </Button>
                    ))}
                </div>
                {isCorrect !== null && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`mt-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
                    >
                        {isCorrect ? 'Correct!' : 'Try again!'}
                    </motion.p>
                )}
            </div>
        </Alert>
    )
}

const UmbrellaAlert: React.FC<{ chanceOfRain: number }> = ({ chanceOfRain }) => (
    <Alert className={`bg-sky-50 dark:bg-sky-900 border-l-4 border-sky-500`}>
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
                <Umbrella className="mr-3 text-sky-500" />
                <div>
                    <AlertTitle>Weather Alert</AlertTitle>
                    <AlertDescription>Chance of rain today: {chanceOfRain}%</AlertDescription>
                </div>
            </div>
            {chanceOfRain > 50 && (
                <Badge variant="outline" className="animate-bounce text-sky-500 border-sky-500">
                    Bring an umbrella!
                </Badge>
            )}
        </div>
    </Alert>
)



// toastNotif
const ToastNotif: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [duration, setDuration] = useState(13000)


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, duration)

        return () => clearTimeout(timer)
    }, [duration])

    if (!isVisible) return null

    return (
        <div className="fixed top-4 left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg flex items-center justify-between max-w-sm animate-in slide-in-from-right">
            <p>On this notification buttom</p>
            <button onClick={() => setIsVisible(false)} className="ml-4 text-primary-foreground/70 hover:text-primary-foreground">
                <X className="h-4 w-4" />
            </button>
        </div>
    )
}


// progress alert
const ProgressComp: React.FC = ({ duration = 15000 }) => {
    const [progress, setProgress] = useState(0)
    const [status, setStatus] = useState('progress')

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(interval)
                    setStatus('success')
                    return 100
                }
                return Math.min(oldProgress + 1, 100)
            })
        }, duration / 100)

        return () => clearInterval(interval)
    }, [duration])

    const getStatusIcon = () => {
        switch (status) {
            case 'success':
                return <CheckCircle className="h-5 w-5 text-green-500" />
            case 'error':
                return <XCircle className="h-5 w-5 text-red-500" />
            default:
                return <Loader2 className="h-5 w-5 text-primary animate-spin" />
        }
    }

    return (
        <div className="fixed bottom-4 left-4 w-80 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Uploading file...</span>
                    {getStatusIcon()}
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                    <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{progress}% complete</p>
            </div>
        </div>
    )
}


export default function AlertLayout() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <div className="p-20 bg-slate-200 my-4">
                <Title name="Screen Alert Animations " />
            </div>

            <div className="space-y-4 p-4">
                <CustomAlert
                    type="info"
                    title="Information"
                    description="This is an informational alert."
                    icon={<InfoIcon />}
                />
                <CustomAlert
                    type="success"
                    title="Success"
                    description="Your action was completed successfully."
                    icon={<CheckCircle2 />}
                />
                <CustomAlert
                    type="warning"
                    title="Warning"
                    description="Please be cautious of the following..."
                    icon={<AlertTriangle />}
                />
                <CustomAlert
                    type="error"
                    title="Error"
                    description="An error occurred. Please try again."
                    icon={<XCircle />}
                />
                <CustomAlert
                    type="neutral"
                    title="Neutral"
                    description="This is a neutral alert for general messages."
                    icon={<AlertCircle />}
                />
                <ProgressComp duration={115000} />
                <ToastNotif />
                <ProgressAlert progress={progress} />
                <InteractiveAlert />
                <FloatingAlert />
                <PulsatingAlert />
                <RatingAlert />
                <WeatherAlert temperature={28} />
                <CountdownAlert />
                <ExpandableAlert />
                <GradientAlert />
                <DarkModeToggleAlert />
                <EmojiAlert />
                <SlidingAlert />
                <ConfettiAlert />
                <LiveUpdateAlert />
                <InteractiveQuizAlert />
                <UmbrellaAlert chanceOfRain={60} />
            </div>
        </>
    )
}