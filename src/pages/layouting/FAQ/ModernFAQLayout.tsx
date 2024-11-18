import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Minus, Plus, Search, X } from 'lucide-react'
import { Title } from '@/components/demo/Title'

// FAQ data
const faqData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is TypeScript?", answer: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript." },
    { question: "What is Vite?", answer: "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects." },
    { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces." },
    { question: "What is Framer Motion?", answer: "Framer Motion is a production-ready motion library for React that makes it easy to create fluid animations." },
]

// 1. Accordion FAQ with slide animation
const AccordionFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="space-y-2">
            {faqData.map((item, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                    <button
                        className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        <span>{item.question}</span>
                        {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-4 bg-white">{item.answer}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

// 2. Grid FAQ with flip cards
const FlipCardFAQ = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {faqData.map((item, index) => (
                <div key={index} className="relative h-48 [perspective:1000px] group">
                    <motion.div
                        className="absolute inset-0 [transform-style:preserve-3d] transition-all duration-500"
                        whileHover={{ rotateY: 180 }}
                    >
                        <div className="absolute inset-0 bg-primary text-primary-foreground flex items-center justify-center p-4 [backface-visibility:hidden]">
                            <h3 className="text-lg font-semibold text-center">{item.question}</h3>
                        </div>
                        <div className="absolute inset-0 bg-secondary text-secondary-foreground flex items-center justify-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <p>{item.answer}</p>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

// 3. Vertical tabs FAQ with fade animation
const TabsFAQ = () => {
    return (
        <Tabs defaultValue="0" className="flex flex-col space-x-4 bg-gray-200 w-full" orientation="vertical">
            <TabsList className="w-full">
                {faqData.map((item, index) => (
                    <TabsTrigger key={index} value={index.toString()} className="w-full text-left">
                        {item.question}
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className='w-full '>
                {faqData.map((item, index) => (
                    <TabsContent key={index} value={index.toString()} className="p-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card>
                                    <CardContent className="pt-4">
                                        <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                                        <p>{item.answer}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    )
}

// 4. Timeline FAQ with scroll animation
const TimelineFAQ = () => {
    return (
        <ScrollArea className="h-[600px] w-full pr-4">
            <div className="relative border-l-2 border-primary pl-4 space-y-10 ">
                {faqData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gray-200 p-4 rounded-sm"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[22px] top-1" />
                        <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                        <p>{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </ScrollArea>
    )
}

// 5. Modal popup FAQ with scale animation
const ModalFAQ = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {faqData.map((item, index) => (
                <Dialog key={index}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full h-24 text-left flex flex-col items-start justify-center p-4">
                            <span className="font-semibold mb-2">Question {index + 1}</span>
                            <span className="text-sm text-muted-foreground truncate">{item.question}</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                                <p>{item.answer}</p>
                            </motion.div>
                        </AnimatePresence>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    )
}



// 1. Animated Sidebar FAQ
const AnimatedSidebarFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="flex bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-1/3 bg-primary p-6">
                <h2 className="text-2xl font-bold text-primary-foreground mb-4">FAQ</h2>
                <nav>
                    {faqData.map((item, index) => (
                        <button
                            key={index}
                            className={`w-full text-left py-2 px-4 rounded-lg mb-2 transition-colors ${activeIndex === index ? 'bg-primary-foreground text-primary' : 'text-primary-foreground hover:bg-primary-foreground/10'
                                }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {item.question}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="w-2/3 p-6">
                <AnimatePresence mode="wait">
                    {activeIndex !== null && (
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold mb-2">{faqData[activeIndex].question}</h3>
                            <p>{faqData[activeIndex].answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

// 2. Expandable Card FAQ
const ExpandableCardFAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    return (
        <div className="space-y-4">
            {faqData.map((item, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    initial={false}
                    animate={{ height: expandedIndex === index ? 'auto' : '60px' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <button
                        className="w-full p-4 text-left flex justify-between items-center"
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                        <span className="font-semibold">{item.question}</span>
                        {expandedIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </button>
                    <div className="px-4 pb-4">
                        <AnimatePresence>
                            {expandedIndex === index && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {item.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// 3. Searchable Grid FAQ
const SearchableGridFAQ = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

    const filteredFAQ = faqData.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <div className="mb-4 relative">
                <input
                    type="text"
                    placeholder="Search FAQ..."
                    className="w-full p-2 pl-10 border rounded-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredFAQ.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedQuestion(index)}
                    >
                        <h3 className="font-semibold mb-2">{item.question}</h3>
                        {selectedQuestion === index && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {item.answer}
                            </motion.p>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// 4. Carousel FAQ
const CarouselFAQ = () => {
    const [[page, direction], setPage] = useState([0, 0])

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    const variants = {
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
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    return (
        <div className="relative h-64 w-full overflow-hidden bg-gray-100 rounded-lg">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1)
                        }
                    }}
                    className="absolute w-full h-full flex items-center justify-center p-8"
                >
                    <div className="text-center">
                        <h3 className="text-xl font-semibold mb-4">{faqData[Math.abs(page) % faqData.length].question}</h3>
                        <p>{faqData[Math.abs(page) % faqData.length].answer}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {faqData.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === Math.abs(page) % faqData.length ? 'bg-primary' : 'bg-gray-300'}`}
                        whileHover={{ scale: 1.2 }}
                    />
                ))}
            </div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button onClick={() => paginate(-1)} className="p-2 rounded-full bg-white shadow-md">
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button onClick={() => paginate(1)} className="p-2 rounded-full bg-white shadow-md">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    )
}

// 5. Interactive Timeline FAQ
const InteractiveTimelineFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />
            {faqData.map((item, index) => (
                <motion.div
                    key={index}
                    className="relative mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="flex items-center mb-2">
                        <div className="w-1/2 text-right pr-4">
                            <button
                                className="font-semibold text-primary hover:underline"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                {item.question}
                            </button>
                        </div>
                        <div className="w-3 h-3 bg-primary rounded-full z-10" />
                        <div className="w-1/2 pl-4">
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}


// Main component to showcase all FAQ components
export default function ModernFAQComponents() {
    return (
        <>
            <div className="py-5">
                <Title name="Screen FAQ Layout " />
            </div>
            <div className="container mx-auto py-8 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-4"> Accordion FAQ</h2>
                    <AccordionFAQ />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Flip Card FAQ</h2>
                    <FlipCardFAQ />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Vertical Tabs FAQ</h2>
                    <TabsFAQ />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Timeline FAQ</h2>
                    <TimelineFAQ />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Modal Popup FAQ</h2>
                    <ModalFAQ />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Animated Sidebar FAQ</h2>
                    <AnimatedSidebarFAQ />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Expandable Card FAQ</h2>
                    <ExpandableCardFAQ />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6"> Searchable Grid FAQ</h2>
                    <SearchableGridFAQ />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Carousel FAQ</h2>
                    <CarouselFAQ />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Interactive Timeline FAQ</h2>
                    <InteractiveTimelineFAQ />
                </section>
            </div>
        </>
    )
}