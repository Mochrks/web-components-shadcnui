'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Video, FileText, CheckCircle, User, BarChart, Clock, Calendar, ChevronDown, Play, Pause, Star, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

// Dummy data for courses
const courses = [
    { id: 1, title: 'Introduction to React', progress: 75, instructor: 'John Doe', duration: '4 weeks' },
    { id: 2, title: 'Advanced JavaScript Concepts', progress: 30, instructor: 'Jane Smith', duration: '6 weeks' },
    { id: 3, title: 'UI/UX Design Fundamentals', progress: 90, instructor: 'Alice Johnson', duration: '3 weeks' },
    { id: 4, title: 'Data Structures and Algorithms', progress: 50, instructor: 'Bob Wilson', duration: '8 weeks' },
    { id: 5, title: 'Machine Learning Basics', progress: 10, instructor: 'Eva Brown', duration: '5 weeks' },
]


const StudentProgressLayout = () => {
    const studentProgress = [
        { id: 1, course: 'Introduction to React', completed: 15, total: 20 },
        { id: 2, course: 'Advanced JavaScript Concepts', completed: 8, total: 25 },
        { id: 3, course: 'UI/UX Design Fundamentals', completed: 12, total: 15 },
        { id: 4, course: 'Data Structures and Algorithms', completed: 20, total: 40 },
        { id: 5, course: 'Machine Learning Basics', completed: 5, total: 30 },
    ]

    return (
        <div className=" bg-gray-100">
            {/* <h1 className="text-4xl font-bold mb-8">Your Learning Progress</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Course Completion</h2>
                    {studentProgress.map((course) => (
                        <div key={course.id} className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold">{course.course}</span>
                                <span>
                                    {course.completed}/{course.total} lessons
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <motion.div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(course.completed / course.total) * 100}%` }}
                                    transition={{ duration: 1 }}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Learning Statistics</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span>Total Courses Enrolled</span>
                            <span className="font-bold">{studentProgress.length}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Average Completion Rate</span>
                            <span className="font-bold">
                                {Math.round(
                                    (studentProgress.reduce(
                                        (acc, course) => acc + course.completed / course.total,
                                        0
                                    ) /
                                        studentProgress.length) *
                                    100
                                )}
                                %
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Total Learning Time</span>
                            <span className="font-bold">37 hours</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Recent Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div
                        className="bg-yellow-100 rounded-lg p-4 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Star className="text-yellow-500 mr-2" />
                        <span>Completed 5 courses</span>
                    </motion.div>
                    <motion.div
                        className="bg-green-100 rounded-lg p-4 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <CheckCircle className="text-green-500 mr-2" />
                        <span>100% quiz score</span>
                    </motion.div>
                    <motion.div
                        className="bg-blue-100 rounded-lg p-4 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <BarChart className="text-blue-500 mr-2" />
                        <span>30-day streak</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

// 1. Dashboard Layout
const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-8">Welcome back, Student!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                    className="bg-white rounded-lg shadow-md p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
                    <div className="flex items-center justify-between mb-2">
                        <span>Overall Completion</span>
                        <span className="font-bold">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                            className="bg-blue-600 h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '68%' }}
                            transition={{ duration: 1 }}
                        ></motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className="bg-white rounded-lg shadow-md p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Upcoming Deadlines</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <Calendar className="mr-2 text-blue-500" />
                            <span>Project submission - 3 days left</span>
                        </li>
                        <li className="flex items-center">
                            <Calendar className="mr-2 text-blue-500" />
                            <span>Quiz on React Hooks - 1 week left</span>
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    className="bg-white rounded-lg shadow-md p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 text-green-500" />
                            <span>Completed "React Components" lesson</span>
                        </li>
                        <li className="flex items-center">
                            <Video className="mr-2 text-blue-500" />
                            <span>Watched "State Management" video</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
            <div className='w-full py-10'>
                <StudentProgressLayout />
            </div>
            <h2 className="text-2xl font-semibold mt-12 mb-6">Your Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <motion.div
                        key={course.id}
                        className="bg-white rounded-lg shadow-md p-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
                        <div className="flex items-center justify-between mb-2">
                            <span>Progress</span>
                            <span className="font-bold">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <motion.div
                                className="bg-green-600 h-2.5 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${course.progress}%` }}
                                transition={{ duration: 1 }}
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// 2. Course Detail Layout
const CourseDetailLayout = ({ activeModule, setActiveModule }) => {
    const course = {
        title: 'Advanced JavaScript Concepts',
        description: 'Dive deep into advanced JavaScript concepts and become a pro developer.',
        instructor: 'Jane Smith',
        duration: '6 weeks',
        modules: [
            { id: 1, title: 'Closures and Scope', lessons: 4 },
            { id: 2, title: 'Prototypes and Inheritance', lessons: 3 },
            { id: 3, title: 'Asynchronous JavaScript', lessons: 5 },
            { id: 4, title: 'ES6+ Features', lessons: 4 },
        ],
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-gray-600 mb-8">{course.description}</p>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="relative aspect-video mb-4">
                        <img
                            src="//"
                            alt="Video thumbnail"
                            className="w-full h-full object-cover rounded-md"
                        />

                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <User className="mr-2 text-blue-500" />
                            <span>Instructor: {course.instructor}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="mr-2 text-blue-500" />
                            <span>Duration: {course.duration}</span>
                        </div>
                    </div>
                    <motion.button
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Learning
                    </motion.button>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Course Modules</h2>
                {course.modules.map((module) => (
                    <motion.div
                        key={module.id}
                        className="bg-white rounded-lg shadow-md p-6 mb-4"
                        initial={false}
                        animate={{ height: activeModule === module.id ? 'auto' : '64px' }}
                    >
                        <button
                            className="w-full text-left flex items-center justify-between"
                            onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                        >
                            <span className="text-xl font-semibold">{module.title}</span>
                            <motion.span
                                animate={{ rotate: activeModule === module.id ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown />
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {activeModule === module.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="mt-4">This module contains {module.lessons} lessons.</p>
                                    <ul className="mt-2 space-y-2">
                                        {[...Array(module.lessons)].map((_, index) => (
                                            <li key={index} className="flex items-center">
                                                <Video className="mr-2 text-blue-500" />
                                                <span>Lesson {index + 1}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// 3. Quiz Layout
const QuizLayout = ({ currentQuestion, setCurrentQuestion, selectedAnswer, setSelectedAnswer }) => {
    const quiz = {
        title: 'JavaScript Fundamentals Quiz',
        questions: [
            {
                id: 1,
                question: 'What is the result of 3 + "3" in JavaScript?',
                options: ['6', '33', 'undefined', 'NaN'],
                correctAnswer: 1,
            },
            {
                id: 2,
                question: 'Which method is used to add an element to the end of an array?',
                options: ['push()', 'pop()', 'shift()', 'unshift()'],
                correctAnswer: 0,
            },
            {
                id: 3,
                question: 'What does the "===" operator do in JavaScript?',
                options: [
                    'Assigns a value',
                    'Compares values',
                    'Compares values and types',
                    'Logical AND',
                ],
                correctAnswer: 2,
            },
        ],
    }

    const handleAnswer = (index) => {
        setSelectedAnswer(index)
    }

    const handleNext = () => {
        if (currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">{quiz.title}</h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-4">
                        <span className="text-lg font-semibold">
                            Question {currentQuestion + 1} of {quiz.questions.length}
                        </span>
                    </div>
                    <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">
                            {quiz.questions[currentQuestion].question}
                        </h2>
                        <div className="space-y-4">
                            {quiz.questions[currentQuestion].options.map((option, index) => (
                                <motion.button
                                    key={index}
                                    className={`w-full text-left p-4 rounded-md ${selectedAnswer === index
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                        }`}
                                    onClick={() => handleAnswer(index)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {option}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                    <div className="mt-8 flex justify-between">
                        <motion.button
                            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </motion.button>
                        <motion.button
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNext}
                            disabled={currentQuestion === quiz.questions.length - 1}
                        >
                            Next
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}



// 4. Video Lesson Layout
const VideoLessonLayout = ({ isPlaying, setIsPlaying }) => {
    const lesson = {
        title: 'Understanding React Hooks',
        description:
            'In this lesson, we will explore the concept of React Hooks and how they can simplify your functional components.',
        videoUrl: '/placeholder.svg?height=400&width=600',
        duration: '15:30',
        instructor: 'John Doe',
    }

    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{lesson.title}</h1>
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="relative aspect-video mb-4">
                        <img
                            src={lesson.videoUrl}
                            alt="Video thumbnail"
                            className="w-full h-full object-cover rounded-md"
                        />
                        <motion.button
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white"
                            onClick={togglePlay}
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isPlaying ? (
                                <Pause className="w-16 h-16" />
                            ) : (
                                <Play className="w-16 h-16" />
                            )}
                        </motion.button>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <Clock className="mr-2 text-blue-500" />
                            <span>{lesson.duration}</span>
                        </div>
                        <div className="flex items-center">
                            <User className="mr-2 text-blue-500" />
                            <span>Instructor: {lesson.instructor}</span>
                        </div>
                    </div>
                    <p className="text-gray-600">{lesson.description}</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Lesson Resources</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <FileText className="mr-2 text-blue-500" />
                            <span>Lesson Transcript</span>
                        </li>
                        <li className="flex items-center">
                            <FileText className="mr-2 text-blue-500" />
                            <span>React Hooks Cheat Sheet</span>
                        </li>
                        <li className="flex items-center">
                            <Video className="mr-2 text-blue-500" />
                            <span>Additional Examples Video</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


// New Settings Component
const SettingsLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Account Settings</h1>
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" className="mt-1 block w-full border rounded-md shadow-sm" defaultValue="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full border rounded-md shadow-sm" defaultValue="john@example.com" />
                            </div>
                            <Button>Update Profile</Button>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span>Email notifications</span>
                                <input type="checkbox" defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Push notifications</span>
                                <input type="checkbox" />
                            </div>
                            <Button>Save Preferences</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

// Main component to showcase all layouts
export default function LMSLayouts() {
    const [activeLayout, setActiveLayout] = useState(0)
    const [activeModule, setActiveModule] = useState(1)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const layouts = [
        { name: 'Dashboard', component: DashboardLayout },
        { name: 'Course Detail', component: CourseDetailLayout },
        { name: 'Quiz', component: QuizLayout },
        { name: 'Video Lesson', component: VideoLessonLayout },
        { name: 'Settings', component: SettingsLayout, },
    ]

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-2xl font-bold">LMS Layouts</h1>
                        <div className="flex space-x-4">
                            {layouts.map((layout, index) => (
                                <motion.button
                                    key={index}
                                    className={`px-4 py-2 rounded-md ${activeLayout === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                    onClick={() => setActiveLayout(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {layout.name}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeLayout}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {layouts[activeLayout].component({
                        activeModule,
                        setActiveModule,
                        currentQuestion,
                        setCurrentQuestion,
                        selectedAnswer,
                        setSelectedAnswer,
                        isPlaying,
                        setIsPlaying,
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}