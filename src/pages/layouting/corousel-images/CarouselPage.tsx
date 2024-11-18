import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Title } from '@/components/demo/Title'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const images = [
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1019/600/400',
    'https://picsum.photos/id/1016/600/400',
    'https://picsum.photos/id/1020/600/400',
]

// Basic Carousel
const BasicCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
            <AnimatePresence initial={false} custom={currentIndex}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

// Zoom
const ZoomCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="absolute w-full h-full object-cover"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                />
            </AnimatePresence>
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

// Cube Carousel (New)
const CubeCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-64 md:h-96 perspective-1000 overflow-hidden rounded-lg">
            <div className="w-full h-full transform-style-3d transition-transform duration-500" style={{ transform: `rotateY(${currentIndex * -90}deg)` }}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="absolute w-full h-full backface-hidden"
                        style={{ transform: `rotateY(${index * 90}deg) translateZ(${Math.min(300, window.innerWidth / 2)}px)` }}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}


// Infinite Carousel
const InfiniteCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="absolute w-full h-full object-cover"
                    custom={direction}
                    variants={{
                        enter: (direction: number) => ({
                            x: direction > 0 ? 1000 : -1000,
                            opacity: 0,
                        }),
                        center: {
                            zIndex: 1,
                            x: 0,
                            opacity: 1,
                        },
                        exit: (direction: number) => ({
                            zIndex: 0,
                            x: direction < 0 ? 1000 : -1000,
                            opacity: 0,
                        }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                />
            </AnimatePresence>

        </div>
    )
}

// Fade Carousel
const FadeCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

// Parallax Carousel
const ParallaxCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="absolute w-full h-full"
                    initial={{ scale: 1.2, opacity: index === 0 ? 1 : 0 }}
                    animate={{
                        scale: index === currentIndex ? 1 : 1.2,
                        opacity: index === currentIndex ? 1 : 0,
                    }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                </motion.div>
            ))}
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}



const ElasticCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="absolute w-full h-full object-cover"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                />
            </AnimatePresence>
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    )
}

// 2. Perspective Carousel
const PerspectiveCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg perspective-1000">
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="absolute w-full h-full object-cover"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                />
            </AnimatePresence>
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    )
}

// 3. Circular Carousel
const CircularCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
            <div className="absolute w-full h-full flex items-center justify-center">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="absolute w-40 h-40 rounded-full overflow-hidden"
                        animate={{
                            x: Math.cos(((index - currentIndex) / images.length) * Math.PI * 2) * 120,
                            y: Math.sin(((index - currentIndex) / images.length) * Math.PI * 2) * 120,
                            scale: index === currentIndex ? 1.2 : 1,
                            zIndex: index === currentIndex ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    )
}

// 4. Stacked Carousel
const StackedCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="absolute w-full h-full"
                    initial={{ scale: 0.8, y: 100, opacity: 0 }}
                    animate={{
                        scale: index === currentIndex ? 1 : 0.8,
                        y: (index - currentIndex) * 30,
                        opacity: index === currentIndex ? 1 : 0.5,
                        zIndex: images.length - Math.abs(index - currentIndex),
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
                </motion.div>
            ))}
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    )
}


// Main App Component
function CarouselPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="py-5">
                <Title name="Screen Carousel Images " />
            </div>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Basic Carousel</h2>
                <BasicCarousel />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Zoom Carousel</h2>
                <ZoomCarousel />
            </section>


            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Cube Carousel</h2>
                <CubeCarousel />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Infinite Carousel</h2>
                <InfiniteCarousel />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Fade Carousel</h2>
                <FadeCarousel />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Parallax Carousel</h2>
                <ParallaxCarousel />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Elastic Carousel</h2>
                <ElasticCarousel />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Perspective Carousel</h2>
                <PerspectiveCarousel />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Circular Carousel</h2>
                <CircularCarousel />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Stacked Carousel</h2>
                <StackedCarousel />
            </section>
        </div>
    )
}

export default CarouselPage