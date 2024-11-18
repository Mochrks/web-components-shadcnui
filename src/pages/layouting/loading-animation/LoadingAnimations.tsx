import React from 'react'
import { motion } from 'framer-motion'
import { Title } from '@/components/demo/Title'


const range = (n: number) => Array.from(Array(n).keys())

export const LoadingAnimations: React.FC = () => {
    return (
        <>
            <div className="py-5">
                <Title name="Screen Loading Animations " />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-5 p-5 mx-auto text-center ">

                {range(50).map((i) => (
                    <div key={i} className="flex items-center justify-center h-24 w-24 bg-gray-100 rounded-lg">
                        <LoadingAnimation index={i} />
                    </div>
                ))}
            </div>
        </>

    )
}

const LoadingAnimation: React.FC<{ index: number }> = ({ index }) => {
    switch (index) {
        case 0:
            return (
                <motion.div
                    className="w-6 h-6 bg-blue-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 1:
            return (
                <motion.div
                    className="w-12 h-1 bg-green-500"
                    animate={{ scaleX: [1, 1.5, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                />
            )
        case 2:
            return (
                <motion.div
                    className="w-8 h-8 border-4 border-purple-500 rounded-full border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            )
        case 3:
            return (
                <motion.div
                    className="w-8 h-8 bg-red-500"
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            )
        case 4:
            return (
                <div className="flex space-x-1">
                    {range(3).map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-yellow-500 rounded-full"
                            animate={{ y: ["0%", "-50%", "0%"] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 5:
            return (
                <motion.div
                    className="w-12 h-12 border-8 border-blue-300 rounded-full"
                    animate={{ scale: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )
        case 6:
            return (
                <motion.div
                    className="w-12 h-12 border-4 border-pink-500 rounded-full"
                    animate={{ borderWidth: ["4px", "2px", "4px"] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 7:
            return (
                <div className="flex space-x-1">
                    {range(5).map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 h-8 bg-indigo-500"
                            animate={{ scaleY: [1, 1.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 8:
            return (
                <motion.div
                    className="w-12 h-12 border-8 border-teal-500 rounded-full border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            )
        case 9:
            return (
                <motion.div
                    className="w-12 h-12 bg-orange-500 rounded-full"
                    animate={{ scale: [1, 0.5, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )
        case 10:
            return (
                <div className="flex space-x-1">
                    {range(3).map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-gray-500 rounded-full"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                        />
                    ))}
                </div>
            )
        case 11:
            return (
                <motion.div
                    className="w-12 h-12 border-4 border-blue-500 rounded-lg"
                    animate={{ rotate: [0, 90, 180, 270, 360], borderRadius: ["0%", "50%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )
        case 12:
            return (
                <motion.div
                    className="w-12 h-1 bg-green-500"
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )
        case 13:
            return (
                <div className="relative w-12 h-12">
                    <motion.div
                        className="absolute w-full h-full border-4 border-purple-500 rounded-full"
                        animate={{ scale: [0, 1], opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </div>
            )
        case 14:
            return (
                <motion.div
                    className="w-12 h-12 bg-red-500 rounded-full"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                />
            )
        case 15:
            return (
                <div className="flex space-x-1">
                    {range(4).map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-8 bg-yellow-500"
                            animate={{ scaleY: [1, 1.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 16:
            return (
                <motion.div
                    className="w-12 h-12 border-8 border-blue-300 rounded-full border-t-blue-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            )
        case 17:
            return (
                <motion.div
                    className="w-12 h-12 bg-pink-500"
                    animate={{ rotate: [0, 90, 0], scale: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 18:
            return (
                <div className="flex space-x-1">
                    {range(3).map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-indigo-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 19:
            return (
                <motion.div
                    className="w-12 h-12 border-4 border-teal-500 rounded-full"
                    animate={{ borderWidth: ["4px", "2px", "4px"], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 20:
            return (
                <motion.div
                    className="w-12 h-12 bg-orange-500 rounded-lg"
                    animate={{ rotate: [0, 180, 360], borderRadius: ["0%", "50%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )
        case 21:
            return (
                <div className="flex space-x-1">
                    {range(5).map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 h-8 bg-gray-500"
                            animate={{ scaleY: [1, 1.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 22:
            return (
                <motion.div
                    className="w-12 h-12 border-4 border-blue-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 23:
            return (
                <motion.div
                    className="w-12 h-1 bg-green-500"
                    animate={{ scaleX: [0, 1], x: ["-50%", "50%"] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 24:
            return (
                <div className="relative w-12 h-12">
                    <motion.div
                        className="absolute w-full h-full border-4 border-purple-500 rounded-lg"
                        animate={{ rotate: [0, 90, 180, 270, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            )
        case 25:
            return (
                <motion.div
                    className="w-12 h-12 bg-red-500 rounded-full"
                    animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 26:
            return (
                <div className="flex space-x-1">
                    {range(3).map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-yellow-500 rounded-full"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 27:
            return (
                <motion.div
                    className="w-12 h-12 border-8 border-blue-300 rounded-full"
                    animate={{ borderColor: ["#93C5FD", "#3B82F6", "#93C5FD"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )
        case 28:
            return (
                <motion.div
                    className="w-12 h-12 bg-pink-500 rounded-lg"
                    animate={{ rotate: [0, 90, 180, 270, 360], borderRadius: ["0%", "50%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )
        case 29:
            return (
                <div className="flex space-x-1">
                    {range(4).map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-8 bg-indigo-500"
                            animate={{ scaleY: [1, 1.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 30:
            return (
                <motion.div
                    className="w-12 h-12 border-4 border-teal-500 rounded-full"
                    animate={{ borderWidth: ["4px", "2px", "4px"], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 31:
            return (
                <motion.div
                    className="w-12 h-12 bg-orange-500"
                    animate={{ rotate: [0, 90, 180, 270, 360], borderRadius: ["0%", "50%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )
        case 32:
            return (
                <div className="flex space-x-1">
                    {range(5).map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 h-8 bg-gray-500"
                            animate={{ scaleY: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 33:
            return (
                <motion.div
                    className="w-12 h-12 border-4 border-blue-500 rounded-lg"
                    animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )
        case 34:
            return (
                <motion.div
                    className="w-12 h-1 bg-green-500"
                    animate={{ scaleX: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )
        case 35:
            return (
                <div className="relative w-12 h-12">
                    <motion.div
                        className="absolute w-full h-full border-4 border-purple-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            )
        case 36:
            return (
                <motion.div
                    className="w-12 h-12 bg-red-500 rounded-full"
                    animate={{ y: [0, -20, 0], scale: [1, 0.8, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                />
            )
        case 37:
            return (
                <div className="flex space-x-1">
                    {range(3).map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-yellow-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 38:
            return (
                <motion.div
                    className="w-12 h-12 border-8 border-blue-300 rounded-full border-t-blue-500"
                    animate={{ rotate: 360, borderWidth: ["8px", "4px", "8px"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            )
        case 39:
            return (
                <motion.div
                    className="w-12 h-12 bg-pink-500"
                    animate={{ rotate: [0, 90, 0], scale: [1, 0.5, 1], borderRadius: ["0%", "50%", "0%"] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 40:
            return (
                <div className="flex space-x-1">
                    {range(4).map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-8 bg-indigo-500"
                            animate={{ scaleY: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 41:
            return (
                <motion.div
                    className="w-12 h-12 border-4 border-teal-500 rounded-full"
                    animate={{ borderWidth: ["4px", "2px", "4px"], scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 42:
            return (
                <motion.div
                    className="w-12 h-12 bg-orange-500 rounded-lg"
                    animate={{ rotate: [0, 180, 360], borderRadius: ["0%", "50%", "0%"], scale: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )
        case 43:
            return (
                <div className="flex space-x-1">
                    {range(5).map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 h-8 bg-gray-500"
                            animate={{ scaleY: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 44:
            return (
                <motion.div
                    className="w-12 h-12 border-4 border-blue-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )
        case 45:
            return (
                <motion.div
                    className="w-12 h-1 bg-green-500"
                    animate={{ scaleX: [0, 1], x: ["-50%", "50%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )
        case 46:
            return (
                <div className="relative w-12 h-12">
                    <motion.div
                        className="absolute w-full h-full border-4 border-purple-500 rounded-lg"
                        animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            )
        case 47:
            return (
                <motion.div
                    className="w-12 h-12 bg-red-500 rounded-full"
                    animate={{ scale: [1, 0.8, 1], opacity: [1, 0.5, 1], y: [0, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
            )
        case 48:
            return (
                <div className="flex space-x-1">
                    {range(3).map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-yellow-500 rounded-full"
                            animate={{ y: [0, -10, 0], scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        />
                    ))}
                </div>
            )
        case 49:
            return (
                <motion.div
                    className="w-12 h-12 border-8 border-blue-300 rounded-full"
                    animate={{ borderColor: ["#93C5FD", "#3B82F6", "#93C5FD"], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            )
        default:
            return null
    }
}

export default LoadingAnimations