'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
    Bell, HelpCircle, Star, User, Settings, Zap,
    CheckCircle, ChevronRight, MessageSquare, Send
} from 'lucide-react'
import { Title } from '@/components/demo/Title'

export default function OnboardingLayout() {
    const [currentStep, setCurrentStep] = useState(0)
    const totalSteps = 7

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps - 1))
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="p-20 bg-slate-200 my-4">
                <Title name="Screen Onboarding User " />
            </div>
            <Header />
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            <main className="flex-grow container mx-auto px-4 py-8">
                {currentStep === 0 && <WelcomeScreen onNext={nextStep} />}
                {currentStep === 1 && <ProfileSetup onNext={nextStep} onBack={prevStep} />}
                {currentStep === 2 && <InterestsSelection onNext={nextStep} onBack={prevStep} />}
                {currentStep === 3 && <NotificationPreferences onNext={nextStep} onBack={prevStep} />}
                {currentStep === 4 && <TutorialStep onNext={nextStep} onBack={prevStep} />}
                {currentStep === 5 && <GuidedTour onNext={nextStep} onBack={prevStep} />}
                {currentStep === 6 && <CompletionCelebration />}
            </main>
            <QuickTips />
            <HelpButton />
        </div>
    )
}

function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">YourApp</h1>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>UN</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}

function ProgressBar({ currentStep, totalSteps }) {
    return (
        <div className="bg-white shadow-sm py-4">
            <div className="container mx-auto px-4">
                <Progress value={(currentStep / (totalSteps - 1)) * 100} className="w-full" />
            </div>
        </div>
    )
}

function WelcomeScreen({ onNext }) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">Welcome to YourApp!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-center text-gray-600">We're excited to have you on board. Let's get you set up in just a few quick steps.</p>
                <div className="flex justify-center">
                    <Button onClick={onNext}>Get Started <ChevronRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </CardContent>
        </Card>
    )
}

function ProfileSetup({ onNext, onBack }) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Set Up Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex justify-center">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                </div>
                <Input placeholder="Full Name" />
                <Input placeholder="Job Title" />
                <Input placeholder="Bio" />
                <div className="flex justify-between">
                    <Button variant="outline" onClick={onBack}>Back</Button>
                    <Button onClick={onNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </CardContent>
        </Card>
    )
}

function InterestsSelection({ onNext, onBack }) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Select Your Interests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    {['Technology', 'Design', 'Marketing', 'Business', 'Science', 'Arts'].map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                            <Checkbox id={interest} />
                            <Label htmlFor={interest}>{interest}</Label>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <Button variant="outline" onClick={onBack}>Back</Button>
                    <Button onClick={onNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </CardContent>
        </Card>
    )
}

function NotificationPreferences({ onNext, onBack }) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all" />
                        <Label htmlFor="all">All Notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="important" id="important" />
                        <Label htmlFor="important">Important Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="none" id="none" />
                        <Label htmlFor="none">No Notifications</Label>
                    </div>
                </RadioGroup>
                <div className="flex justify-between">
                    <Button variant="outline" onClick={onBack}>Back</Button>
                    <Button onClick={onNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </CardContent>
        </Card>
    )
}

function TutorialStep({ onNext, onBack }) {
    return (
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Quick Tutorial</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Tutorial Video Placeholder</p>
                </div>
                <p className="text-gray-600">This quick tutorial will show you the main features of YourApp and how to use them effectively.</p>
                <div className="flex justify-between">
                    <Button variant="outline" onClick={onBack}>Back</Button>
                    <Button onClick={onNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </CardContent>
        </Card>
    )
}

function QuickTips() {
    return (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold mb-2">Quick Tips</h3>
            <ul className="text-sm space-y-1">
                <li>• Use keyboard shortcuts for faster navigation</li>
                <li>• Customize your dashboard for easy access</li>
                <li>• Check out our FAQ section for more help</li>
            </ul>
        </div>
    )
}

function FeatureHighlight({ feature, description, icon: Icon }) {
    return (
        <Card>
            <CardContent className="flex items-center space-x-4 p-6">
                <div className="bg-primary-100 p-3 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold">{feature}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}

function GuidedTour({ onNext, onBack }) {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold mb-4">Guided Tour</h2>
            <div className="grid md:grid-cols-2 gap-4">
                <FeatureHighlight
                    feature="Profile Management"
                    description="Easily update your information and preferences"
                    icon={User}
                />
                <FeatureHighlight
                    feature="Notifications"
                    description="Stay updated with important alerts and messages"
                    icon={Bell}
                />
                <FeatureHighlight
                    feature="Advanced Settings"
                    description="Customize the app to work best for you"
                    icon={Settings}
                />
                <FeatureHighlight
                    feature="Quick Actions"
                    description="Perform common tasks with just one click"
                    icon={Zap}
                />
            </div>
            <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={onBack}>Back</Button>
                <Button onClick={onNext}>Finish Tour <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </div>
        </div>
    )
}

function FAQSection() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                <AccordionContent>
                    You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions sent to your email.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Can I change my username?</AccordionTrigger>
                <AccordionContent>
                    Yes, you can change your username in the Profile Settings section of your account.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>How do I contact support?</AccordionTrigger>
                <AccordionContent>
                    You can contact our support team by clicking on the Help button in the bottom right corner of the screen or by emailing support@yourapp.com.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

function HelpButton() {
    return (
        <Button
            className="fixed bottom-4 left-4 rounded-full w-12 h-12 shadow-lg"
            size="icon"
        >
            <HelpCircle className="h-6 w-6" />
        </Button>
    )
}

function FeedbackForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>We'd Love Your Feedback!</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div>
                        <Label htmlFor="feedback">How was your onboarding experience?</Label>
                        <Input id="feedback" placeholder="Share your thoughts..." />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="rating">Rate your experience:</Label>
                        <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-5 w-5 text-yellow-400 cursor-pointer" />
                            ))}
                        </div>
                    </div>
                    <Button type="submit">
                        Send Feedback
                        <Send className="ml-2 h-4 w-4" />
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

function CompletionCelebration() {
    return (
        <div className="text-center space-y-6">
            <div className="text-6xl">🎉</div>
            <h2 className="text-3xl font-bold">Congratulations!</h2>
            <p className="text-xl text-gray-600">You've completed the onboarding process.</p>
            <Card>
                <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">What's Next?</h3>
                    <ul className="space-y-2 text-left">
                        <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            Explore your personalized dashboard
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            Connect with other users
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            Start your first project
                        </li>
                    </ul>
                </CardContent>
            </Card>
            <Button className="mt-4">
                Go to Dashboard
                <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <FeedbackForm />
        </div>
    )
}