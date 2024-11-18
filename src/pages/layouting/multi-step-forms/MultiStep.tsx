'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, ChevronRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Title } from '@/components/demo/Title'

const MultiStep = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        personalInfo: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        education: {
            highestDegree: '',
            fieldOfStudy: '',
            university: '',
            graduationYear: '',
        },
        experience: {
            currentlyEmployed: false,
            yearsOfExperience: 0,
            relevantSkills: [],
        },
        jobDetails: {
            desiredPosition: '',
            salaryExpectation: '',
            startDate: '',
            workPreference: '',
        },
        additionalInfo: {
            coverLetter: '',
            portfolioUrl: '',
            references: [],
        },
    })

    const totalSteps = 6

    const updateFormData = (section, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }))
    }

    const handleNext = () => {
        setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }

    const handlePrevious = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1))
    }

    const handleSubmit = () => {

        console.log('Form submitted:', formData)
        setCurrentStep(totalSteps)
    }

    const renderProgressBar = () => (
        <div className="mb-8">
            <Progress value={(currentStep / totalSteps) * 100} className="w-full" />
            <div className="flex justify-between mt-2">
                {[...Array(totalSteps)].map((_, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index + 1 <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                            }`}>
                            {index + 1 <= currentStep ? (
                                <CheckCircle2 className="w-5 h-5" />
                            ) : (
                                index + 1
                            )}
                        </div>
                        <span className="text-xs mt-1">Step {index + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    )

    const renderPersonalInfo = () => (
        <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Please provide your basic contact information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            value={formData.personalInfo.firstName}
                            placeholder='your first name'
                            onChange={(e) => updateFormData('personalInfo', 'firstName', e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            value={formData.personalInfo.lastName}
                            placeholder='your last name'
                            onChange={(e) => updateFormData('personalInfo', 'lastName', e.target.value)}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.personalInfo.email}
                        placeholder='youremail@example.com'
                        onChange={(e) => updateFormData('personalInfo', 'email', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        type="tel"
                        value={formData.personalInfo.phone}
                        placeholder='+628192391231'
                        onChange={(e) => updateFormData('personalInfo', 'phone', e.target.value)}
                    />
                </div>
            </CardContent>
        </Card>
    )

    const renderEducation = () => (
        <Card>
            <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>Tell us about your educational background.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="highestDegree">Highest Degree Obtained</Label>
                    <Select
                        value={formData.education.highestDegree}
                        onValueChange={(value) => updateFormData('education', 'highestDegree', value)}
                    >
                        <SelectTrigger id="highestDegree">
                            <SelectValue placeholder="Select your highest degree" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="highSchool">High School</SelectItem>
                            <SelectItem value="associate">Associate's Degree</SelectItem>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="doctorate">Doctorate</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="fieldOfStudy">Field of Study</Label>
                    <Input
                        id="fieldOfStudy"
                        value={formData.education.fieldOfStudy}
                        placeholder='your study'
                        onChange={(e) => updateFormData('education', 'fieldOfStudy', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="university">University/Institution</Label>
                    <Input
                        id="university"
                        value={formData.education.university}
                        placeholder='your university or institution'
                        onChange={(e) => updateFormData('education', 'university', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input
                        id="graduationYear"
                        type="number"
                        min="1900"
                        max={new Date().getFullYear()}
                        value={formData.education.graduationYear}
                        placeholder='your graduation years'
                        onChange={(e) => updateFormData('education', 'graduationYear', e.target.value)}
                    />
                </div>
            </CardContent>
        </Card>
    )

    const renderExperience = () => (
        <Card>
            <CardHeader>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>Share your professional experience with us.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Switch
                        id="currentlyEmployed"
                        checked={formData.experience.currentlyEmployed}
                        onCheckedChange={(checked) => updateFormData('experience', 'currentlyEmployed', checked)}
                    />
                    <Label htmlFor="currentlyEmployed">I am currently employed</Label>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                    <Slider
                        id="yearsOfExperience"
                        min={0}
                        max={40}
                        step={1}
                        value={[formData.experience.yearsOfExperience]}
                        onValueChange={([value]) => updateFormData('experience', 'yearsOfExperience', value)}
                    />
                    <div className="text-center">{formData.experience.yearsOfExperience} years</div>
                </div>
                <div className="space-y-2">
                    <Label>Relevant Skills</Label>
                    <div className="grid grid-cols-2 gap-2">
                        {['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'SQL', 'Git'].map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                                <Checkbox
                                    id={skill}
                                    checked={formData.experience.relevantSkills.includes(skill)}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            updateFormData('experience', 'relevantSkills', [...formData.experience.relevantSkills, skill])
                                        } else {
                                            updateFormData('experience', 'relevantSkills', formData.experience.relevantSkills.filter(s => s !== skill))
                                        }
                                    }}
                                />
                                <Label htmlFor={skill}>{skill}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )

    const renderJobDetails = () => (
        <Card>
            <CardHeader>
                <CardTitle>Job Preferences</CardTitle>
                <CardDescription>Tell us about the position you're seeking.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="desiredPosition">Desired Position</Label>
                    <Input
                        id="desiredPosition"
                        value={formData.jobDetails.desiredPosition}
                        placeholder='your position'
                        onChange={(e) => updateFormData('jobDetails', 'desiredPosition', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="salaryExpectation">Salary Expectation (Annual)</Label>
                    <Input
                        id="salaryExpectation"
                        type="number"
                        min="0"
                        step="1000"
                        value={formData.jobDetails.salaryExpectation}
                        placeholder='your salary expectation'
                        onChange={(e) => updateFormData('jobDetails', 'salaryExpectation', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="startDate">Earliest Start Date</Label>
                    <Input
                        id="startDate"
                        type="date"
                        value={formData.jobDetails.startDate}
                        onChange={(e) => updateFormData('jobDetails', 'startDate', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="workPreference">Work Preference</Label>
                    <RadioGroup
                        id="workPreference"
                        value={formData.jobDetails.workPreference}
                        onValueChange={(value) => updateFormData('jobDetails', 'workPreference', value)}
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="onsite" id="onsite" />
                            <Label htmlFor="onsite">On-site</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="remote" id="remote" />
                            <Label htmlFor="remote">Remote</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hybrid" id="hybrid" />
                            <Label htmlFor="hybrid">Hybrid</Label>
                        </div>
                    </RadioGroup>
                </div>
            </CardContent>
        </Card>
    )

    const renderAdditionalInfo = () => (
        <Card>
            <CardHeader>
                <CardTitle>Additional Information</CardTitle>
                <CardDescription>Provide any extra details to support your application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                        id="coverLetter"
                        rows={5}
                        value={formData.additionalInfo.coverLetter}
                        placeholder='your cover latter ..'
                        onChange={(e) => updateFormData('additionalInfo', 'coverLetter', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                    <Input
                        id="portfolioUrl"
                        type="url"
                        value={formData.additionalInfo.portfolioUrl}
                        placeholder='your link url portfolio'
                        onChange={(e) => updateFormData('additionalInfo', 'portfolioUrl', e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label>References</Label>
                    {formData.additionalInfo.references.map((reference, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <Input
                                value={reference}
                                onChange={(e) => {
                                    const newReferences = [...formData.additionalInfo.references]
                                    newReferences[index] = e.target.value
                                    updateFormData('additionalInfo', 'references', newReferences)
                                }}
                                placeholder={`Reference ${index + 1}`}
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => {
                                    const newReferences = formData.additionalInfo.references.filter((_, i) => i !== index)
                                    updateFormData('additionalInfo', 'references', newReferences)
                                }}
                            >
                                <AlertCircle className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                    <Button
                        variant="outline"
                        onClick={() => {
                            const newReferences = [...formData.additionalInfo.references, '']
                            updateFormData('additionalInfo', 'references', newReferences)
                        }}
                    >
                        Add Reference
                    </Button>
                </div>
            </CardContent>
        </Card >
    )

    const renderReview = () => (
        <Card>
            <CardHeader>
                <CardTitle>Review Your Application</CardTitle>
                <CardDescription>Please review your information before submitting.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold">Personal Information</h3>
                            <p>Name: {formData.personalInfo.firstName} {formData.personalInfo.lastName}</p>
                            <p>Email: {formData.personalInfo.email}</p>
                            <p>Phone: {formData.personalInfo.phone}</p>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="text-lg font-semibold">Education</h3>
                            <p>Highest Degree: {formData.education.highestDegree}</p>
                            <p>Field of Study: {formData.education.fieldOfStudy}</p>
                            <p>University: {formData.education.university}</p>
                            <p>Graduation Year: {formData.education.graduationYear}</p>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="text-lg font-semibold">Experience</h3>
                            <p>Currently Employed: {formData.experience.currentlyEmployed ? 'Yes' : 'No'}</p>
                            <p>Years of Experience: {formData.experience.yearsOfExperience}</p>
                            <p>Relevant Skills: {formData.experience.relevantSkills.join(', ')}</p>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="text-lg font-semibold">Job Details</h3>
                            <p>Desired Position: {formData.jobDetails.desiredPosition}</p>
                            <p>Salary Expectation: ${formData.jobDetails.salaryExpectation}</p>
                            <p>Start Date: {formData.jobDetails.startDate}</p>
                            <p>Work Preference: {formData.jobDetails.workPreference}</p>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="text-lg font-semibold">Additional Information</h3>
                            <p>Cover Letter: {formData.additionalInfo.coverLetter.substring(0, 100)}...</p>
                            <p>Portfolio URL: {formData.additionalInfo.portfolioUrl}</p>
                            <p>References: {formData.additionalInfo.references.length}</p>
                        </div>
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return renderPersonalInfo()
            case 2:
                return renderEducation()
            case 3:
                return renderExperience()
            case 4:
                return renderJobDetails()
            case 5:
                return renderAdditionalInfo()
            case 6:
                return renderReview()
            default:
                return null
        }
    }

    return (
        <div className="container mx-auto py-10">
            <div className='flex flex-col w-full text-center gap-5 mb-20'>
                <Title name="Screen Multi Step Form " />
            </div>
            <h1 className="text-3xl font-bold text-center mb-6">Job Application Form</h1>
            {renderProgressBar()}
            {renderStepContent()}
            <div className="mt-6 flex justify-between">
                {currentStep > 1 && (
                    <Button onClick={handlePrevious}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                )}
                {currentStep < totalSteps && (
                    <Button onClick={handleNext} className="ml-auto">
                        Next <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
                {currentStep === totalSteps && (
                    <Button onClick={handleSubmit} className="ml-auto">
                        Submit Application
                    </Button>
                )}
            </div>
        </div>
    )
}

export default MultiStep