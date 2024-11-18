'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

// Dummy data for roadmap items
const roadmapItems = [
    { id: 1, title: 'Project Initiation', date: 'Q1 2024', status: 'completed', description: 'Kick-off the project and define initial scope.' },
    { id: 2, title: 'Design Phase', date: 'Q2 2024', status: 'in-progress', description: 'Create wireframes and design mockups.' },
    { id: 3, title: 'Development Sprint 1', date: 'Q3 2024', status: 'upcoming', description: 'Begin core feature development.' },
    { id: 4, title: 'User Testing', date: 'Q4 2024', status: 'upcoming', description: 'Conduct user testing and gather feedback.' },
    { id: 5, title: 'Development Sprint 2', date: 'Q1 2025', status: 'upcoming', description: 'Implement feedback and additional features.' },
    { id: 6, title: 'Beta Launch', date: 'Q2 2025', status: 'upcoming', description: 'Release beta version to select users.' },
    { id: 7, title: 'Final Testing', date: 'Q3 2025', status: 'upcoming', description: 'Perform final round of testing and bug fixes.' },
    { id: 8, title: 'Official Launch', date: 'Q4 2025', status: 'upcoming', description: 'Launch the product to the public.' },
]

// Component 1: Vertical Timeline with Animated Progress
const VerticalTimeline = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 0))
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Product Roadmap</h2>
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
                <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 origin-top"
                    style={{ height: `${progress}%` }}
                />
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-600">{item.date}</p>
                            <p className="mt-2">{item.description}</p>
                        </div>
                        <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 2: Horizontal Scrolling Roadmap with Milestones
const HorizontalScrollingRoadmap = () => {
    const scrollRef = useRef(null)

    const handleScroll = (direction) => {
        const { current } = scrollRef
        if (current) {
            const scrollAmount = direction === 'left' ? -300 : 300
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Feature Roadmap</h2>
            <div className="relative">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
                    onClick={() => handleScroll('left')}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
                    onClick={() => handleScroll('right')}
                >
                    <ChevronRight size={24} />
                </button>
                <div ref={scrollRef} className="overflow-x-scroll hide-scrollbar">
                    <div className="flex space-x-8 p-4">
                        {roadmapItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-md"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.date}</p>
                                <p className="mt-2 text-sm">{item.description}</p>
                                <div className="mt-4 h-2 bg-gray-200 rounded-full">
                                    <motion.div
                                        className="h-full bg-green-500 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: item.status === 'completed' ? '100%' : item.status === 'in-progress' ? '50%' : '0%' }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    )
}

// Component 3: Circular Roadmap with Rotating Sections
const CircularRoadmap = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % roadmapItems.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Circular Product Roadmap</h2>
            <div className="relative w-96 h-96 mx-auto">
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="absolute w-full h-full flex items-center justify-center"
                        initial={{ rotate: index * 45 }}
                        animate={{ rotate: index * 45 - activeIndex * 45 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className={`w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer ${index === activeIndex ? 'ring-4 ring-blue-500' : ''
                                }`}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setActiveIndex(index)}
                        >
                            <p className="text-center font-semibold">{item.title}</p>
                        </motion.div>
                    </motion.div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{roadmapItems[activeIndex].title}</h3>
                        <p className="text-gray-600">{roadmapItems[activeIndex].date}</p>
                        <p className="mt-2">{roadmapItems[activeIndex].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Component 4: Grid-based Roadmap with Flip Cards
const GridRoadmap = () => {
    const [flipped, setFlipped] = useState({})

    const handleFlip = (id) => {
        setFlipped((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Feature Grid Roadmap</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {roadmapItems.map((item) => (
                    <motion.div
                        key={item.id}
                        className="relative h-64 cursor-pointer"
                        onClick={() => handleFlip(item.id)}
                        whileHover={{ scale: 1.05 }}
                    >
                        <AnimatePresence>
                            {!flipped[item.id] ? (
                                <motion.div
                                    className="absolute inset-0 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
                                    initial={{ rotateY: 180 }}
                                    animate={{ rotateY: 0 }}
                                    exit={{ rotateY: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">{item.date}</p>
                                    <div className={`w-full h-2 rounded-full ${item.status === 'completed' ? 'bg-green-500' : item.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-300'
                                        }`}></div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="absolute inset-0 bg-blue-500 text-white rounded-lg shadow-md p-4 flex flex-col justify-center"
                                    initial={{ rotateY: 180 }}
                                    animate={{ rotateY: 0 }}
                                    exit={{ rotateY: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p>{item.description}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// Component 5: 3D Perspective Roadmap
const PerspectiveRoadmap = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">3D Roadmap Perspective</h2>
            <div className="relative h-[800px] perspective-800">
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="absolute w-full bg-white rounded-lg shadow-md p-6 cursor-pointer"
                        style={{
                            top: `${index * 80}px`,
                            zIndex: hoveredIndex === index ? 10 : roadmapItems.length - index,
                        }}
                        initial={{ rotateX: 45, scale: 1 - index * 0.09 }}
                        animate={{
                            rotateX: hoveredIndex === index ? 0 : 45,
                            scale: hoveredIndex === index ? 1 : 1 - index * 0.05,
                            y: hoveredIndex === index ? -20 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                    >
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.date}</p>
                        <p className="mt-2">{item.description}</p>
                        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-500"
                                initial={{ width: 0 }}
                                animate={{ width: item.status === 'completed' ? '100%' : item.status === 'in-progress' ? '50%' : '0%' }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// 1. Animated Tree Roadmap
const AnimatedTreeRoadmap = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Product Growth Roadmap</h2>
            <div className="relative">
                <motion.div
                    className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Card className={`w-[calc(40%-20px)] ${index % 2 === 0 ? 'mr-10' : 'mr-10'}`}>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>{item.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{item.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant={item.status === 'completed' ? 'default' : 'outline'}>
                                    {item.status === 'completed' ? <Check className="mr-2 h-4 w-4" /> : <Clock className="mr-2 h-4 w-4" />}
                                    {item.status === 'completed' ? 'Completed' : 'In Progress'}
                                </Button>
                            </CardFooter>
                        </Card>
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center z-10">
                            <ChevronRight className="text-primary-foreground" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// 2. Radial Progress Roadmap
const RadialProgressRoadmap = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Radial Progress Roadmap</h2>
            <div className="relative w-[600px] h-[600px] mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="10"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: (activeIndex + 1) / roadmapItems.length }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ rotate: -90, transformOrigin: "center" }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">{roadmapItems[activeIndex].title}</h3>
                        <p className="text-gray-600 mb-4">{roadmapItems[activeIndex].date}</p>
                        <p className="mb-4">{roadmapItems[activeIndex].description}</p>
                        <Button onClick={() => setActiveIndex((prev) => (prev + 1) % roadmapItems.length)}>
                            Next Phase
                        </Button>
                    </div>
                </div>
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="absolute w-4 h-4 bg-blue-500 rounded-full cursor-pointer"
                        style={{
                            top: `${50 + 45 * Math.sin((index / roadmapItems.length) * Math.PI * 2)}%`,
                            left: `${50 + 45 * Math.cos((index / roadmapItems.length) * Math.PI * 2)}%`,
                        }}
                        animate={{ scale: activeIndex === index ? 1.5 : 1 }}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

// 3. Kanban-style Roadmap
const KanbanRoadmap = () => {
    const [items, setItems] = useState(roadmapItems)

    const onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id)
    }

    const onDragOver = (e) => {
        e.preventDefault()
    }

    const onDrop = (e, status) => {
        const id = e.dataTransfer.getData('id')
        const newItems = items.map(item =>
            item.id.toString() === id ? { ...item, status } : item
        )
        setItems(newItems)
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Kanban Roadmap</h2>
            <div className="flex space-x-4">
                {['upcoming', 'in-progress', 'completed'].map((status) => (
                    <div
                        key={status}
                        className="flex-1 bg-gray-100 p-4 rounded-lg"
                        onDragOver={onDragOver}
                        onDrop={(e) => onDrop(e, status)}
                    >
                        <h3 className="text-xl font-semibold mb-4 capitalize">{status.replace('-', ' ')}</h3>
                        {items.filter(item => item.status === status).map(item => (
                            <Card
                                key={item.id}
                                className="mb-4 cursor-move"
                                draggable
                                onDragStart={(e) => onDragStart(e, item.id)}
                            >
                                <CardHeader>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>{item.date}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

// 4. Interactive Gantt Chart Roadmap
const GanttChartRoadmap = () => {
    const [selectedItem, setSelectedItem] = useState(null)

    const startDate = new Date('2024-01-01')
    const endDate = new Date('2025-12-31')
    const totalDays = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)

    const getItemPosition = (date) => {
        const itemDate = new Date(date)
        return ((itemDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) / totalDays * 100
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Interactive Gantt Chart Roadmap</h2>
            <div className="relative h-[400px] bg-gray-100 rounded-lg p-4">
                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="absolute h-8 bg-blue-500 rounded cursor-pointer"
                        style={{
                            top: `${index * 40 + 20}px`,
                            left: `${getItemPosition(item.date.split(' ')[1])}%`,
                            width: '20%',
                        }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedItem(item)}
                    >
                        <span className="text-white text-xs font-semibold px-2">{item.title}</span>
                    </motion.div>
                ))}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2">
                    <span>2024</span>
                    <span>2025</span>
                </div>
            </div>
            {selectedItem && (
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>{selectedItem.title}</CardTitle>
                        <CardDescription>{selectedItem.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{selectedItem.description}</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" onClick={() => setSelectedItem(null)}>Close</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    )
}

// 5. Milestone-based Roadmap with Progress Tracking
const MilestoneRoadmap = () => {
    const [currentMilestone, setCurrentMilestone] = useState(0)

    const milestones = [
        { title: 'Project Kickoff', tasks: ['Define scope', 'Assemble team', 'Set up infrastructure'] },
        { title: 'Design Phase', tasks: ['Create wireframes', 'Design UI/UX', 'Conduct user research'] },
        { title: 'Development', tasks: ['Implement core features', 'Integrate APIs', 'Perform unit testing'] },
        { title: 'Testing', tasks: ['Conduct QA testing', 'Fix bugs', 'Perform user acceptance testing'] },
        { title: 'Launch', tasks: ['Finalize documentation', 'Deploy to production', 'Monitor performance'] },
    ]

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Milestone-based Roadmap</h2>
            <Tabs value={currentMilestone.toString()} onValueChange={(value) => setCurrentMilestone(parseInt(value))}>
                <TabsList className="grid w-full grid-cols-5 mb-8">
                    {milestones.map((milestone, index) => (
                        <TabsTrigger key={index} value={index.toString()} disabled={index > currentMilestone}>
                            {milestone.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {milestones.map((milestone, index) => (
                    <TabsContent key={index} value={index.toString()}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{milestone.title}</CardTitle>
                                <CardDescription>Progress: {((index + 1) / milestones.length * 100).toFixed(0)}%</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Progress value={(index + 1) / milestones.length * 100} className="mb-4" />
                                <ul className="space-y-2">
                                    {milestone.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                {index < milestones.length - 1 && (
                                    <Button onClick={() => setCurrentMilestone(index + 1)}>
                                        Next Milestone <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default function RoadmapLayouts() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <VerticalTimeline />
            <HorizontalScrollingRoadmap />
            <CircularRoadmap />
            <GridRoadmap />
            <PerspectiveRoadmap />
            <AnimatedTreeRoadmap />
            <RadialProgressRoadmap />
            <KanbanRoadmap />
            <GanttChartRoadmap />
            <MilestoneRoadmap />
        </div>
    )
}