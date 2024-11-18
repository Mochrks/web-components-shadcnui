'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight, MessageCircle } from 'lucide-react'

// Sample testimonial data
const testimonials = [
    { id: 1, name: "Alice Johnson", role: "CEO, TechCorp", content: "This product has revolutionized our workflow. Highly recommended!", avatar: "https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg", rating: 5 },
    { id: 2, name: "Bob Smith", role: "Designer", content: "Intuitive and powerful. It's a game-changer for our design team.", avatar: "https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg", rating: 4 },
    { id: 3, name: "Carol Williams", role: "Marketing Manager", content: "The analytics features are outstanding. It's helped us make data-driven decisions.", avatar: "https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg", rating: 5 },
    { id: 4, name: "David Brown", role: "Developer", content: "The API is well-documented and easy to integrate. Kudos to the dev team!", avatar: "https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg", rating: 4 },
    { id: 5, name: "Eva Martinez", role: "Startup Founder", content: "This tool has been crucial in scaling our operations. Thank you!", avatar: "https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg", rating: 5 },
]

// 1. Modern Carousel Testimonial
const ModernCarouselTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <Quote className="mx-auto mb-6 text-primary h-12 w-12 opacity-20" />
                        <p className="text-xl mb-6 text-gray-700 leading-relaxed">"{testimonials[currentIndex].content}"</p>
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src={testimonials[currentIndex].avatar}
                                alt={testimonials[currentIndex].name}
                                className="w-16 h-16 rounded-full mr-4 object-cover"
                            />
                            <div className="text-left">
                                <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <button
                    onClick={prevTestimonial}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary transition-colors duration-300"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextTestimonial}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-primary transition-colors duration-300"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

// 2. Grid Testimonial
const GridTestimonial = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
                <motion.div
                    key={testimonial.id}
                    className="bg-white p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center">
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// 3. Minimalist Card Testimonial
const MinimalistCardTestimonial = () => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8">
                <div className="flex items-center mb-4">
                    <img
                        src={testimonials[0].avatar}
                        alt={testimonials[0].name}
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-lg">{testimonials[0].name}</h3>
                        <p className="text-gray-600">{testimonials[0].role}</p>
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonials[0].content}"</p>
            </div>
            <div className="px-6 py-4 bg-gray-100">
                <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < testimonials[0].rating ? 'fill-current' : 'stroke-current'}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

// 4. Animated Quote Testimonial
const AnimatedQuoteTestimonial = () => {
    return (
        <div className="max-w-2xl mx-auto relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-primary text-white p-8 rounded-lg shadow-xl"
            >
                <Quote className="absolute top-4 left-4 h-12 w-12 opacity-20" />
                <p className="text-xl mb-6 relative z-10">"{testimonials[1].content}"</p>
                <div className="flex items-center">
                    <img
                        src={testimonials[1].avatar}
                        alt={testimonials[1].name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                        <h3 className="font-semibold">{testimonials[1].name}</h3>
                        <p className="text-primary-foreground">{testimonials[1].role}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

// 5. Horizontal Scroll Testimonial
const HorizontalScrollTestimonial = () => {
    return (
        <div className="max-w-full overflow-x-auto pb-6">
            <div className="flex space-x-6">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                        <div className="flex items-center">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full mr-4 object-cover"
                            />
                            <div>
                                <h3 className="font-semibold">{testimonial.name}</h3>
                                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// 6. Fading Testimonial
const FadingTestimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="max-w-2xl mx-auto h-64 relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center"
                >
                    <p className="text-xl mb-4 text-gray-700">"{testimonials[currentIndex].content}"</p>
                    <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

// 7. Video Testimonial (Simulated)
const VideoTestimonial = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="flex items-center justify-center">
                    <MessageCircle className="h-16 w-16 text-gray-400" />
                </div>
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{testimonials[2].name}</h3>
                <p className="text-gray-600 mb-4">{testimonials[2].role}</p>
                <p className="text-gray-700">"{testimonials[2].content}"</p>
            </div>
        </div>
    )
}

// 8. Testimonial with Background Pattern
const PatternTestimonial = () => {
    return (
        <div className="max-w-2xl mx-auto relative p-1 bg-gradient-to-r from-primary to-secondary rounded-lg">
            <div className="bg-white text-white p-8 rounded-lg relative z-10">
                <div className="absolute inset-0 bg-opacity-5 bg-primary" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")" }}></div>
                <Quote className="h-12 w-12 text-primary opacity-20 mb-4" />
                <p className="text-xl mb-6 relative z-10">"{testimonials[3].content}"</p>
                <div className="flex items-center text-white">
                    <img
                        src={testimonials[3].avatar}
                        alt={testimonials[3].name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                        <h3 className="font-semibold">{testimonials[3].name}</h3>
                        <p className="text-white">{testimonials[3].role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 9. Testimonial with Hover Effect
const HoverEffectTestimonial = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
                <motion.div
                    key={testimonial.id}
                    className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                >
                    <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center">
                        <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                            <h3 className="font-semibold">{testimonial.name}</h3>
                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// 10. Testimonial with Read More
const ReadMoreTestimonial = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <p className="text-gray-700 mb-4">
                    {expanded ? testimonials[4].content : `${testimonials[4].content.slice(0, 100)}...`}
                </p>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-primary font-semibold flex items-center"
                >
                    {expanded ? 'Read Less' : 'Read More'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <div className="mt-4 flex items-center">
                    <img
                        src={testimonials[4].avatar}
                        alt={testimonials[4].name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                        <h3 className="font-semibold">{testimonials[4].name}</h3>
                        <p className="text-gray-600 text-sm">{testimonials[4].role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Main component to showcase all Testimonial components
export default function ModernTestimonialComponents() {
    return (
        <div className="container mx-auto py-12 space-y-24">
            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Modern Carousel Testimonial</h2>
                <ModernCarouselTestimonial />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Grid Testimonial</h2>
                <GridTestimonial />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Minimalist Card Testimonial</h2>
                <MinimalistCardTestimonial />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Animated Quote Testimonial</h2>
                <AnimatedQuoteTestimonial />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Horizontal Scroll Testimonial</h2>
                <HorizontalScrollTestimonial />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Fading Testimonial</h2>
                <FadingTestimonial />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Video Testimonial (Simulated)</h2>
                <VideoTestimonial />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Testimonial with Background Pattern</h2>
                <PatternTestimonial />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Testimonial with Hover Effect</h2>
                <HoverEffectTestimonial />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Testimonial with Read More</h2>
                <ReadMoreTestimonial />
            </section>
        </div>
    )
}