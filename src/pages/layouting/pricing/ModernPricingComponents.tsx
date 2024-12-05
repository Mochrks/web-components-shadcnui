import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Moon, Sun, X } from 'lucide-react'
import { Title } from '@/components/demo/Title'

// Pricing data
const pricingData = [
    { name: "Basic", monthlyPrice: 9, yearlyPrice: 90, features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"] },
    { name: "Pro", monthlyPrice: 19, yearlyPrice: 190, features: ["5 Users", "50 Projects", "50GB Storage", "Priority Support", "Advanced Analytics"] },
    { name: "Enterprise", monthlyPrice: 49, yearlyPrice: 490, features: ["Unlimited Users", "Unlimited Projects", "1TB Storage", "24/7 Support", "Custom Integration", "Dedicated Account Manager"] },


]

// 1. Pricing cards with toggle switch
const TogglePricingCards = () => {
    const [isYearly, setIsYearly] = useState(false)

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
                <span>Monthly</span>
                <Switch checked={isYearly} onCheckedChange={setIsYearly} />
                <span>Yearly</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingData.map((plan, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{plan.name}</CardTitle>
                            <CardDescription>
                                <span className="text-3xl font-bold">
                                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                </span>
                                {isYearly ? "/year" : "/month"}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Choose Plan</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

// 2. Pricing table with feature highlight
const PricingTable = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Features</TableHead>
                    {pricingData.map((plan, index) => (
                        <TableHead key={index} className="text-center">{plan.name}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Price</TableCell>
                    {pricingData.map((plan, index) => (
                        <TableCell key={index} className="text-center font-bold">
                            ${plan.monthlyPrice}/month
                        </TableCell>
                    ))}
                </TableRow>
                {pricingData[2].features.map((feature, index) => (
                    <TableRow key={index}>
                        <TableCell>{feature}</TableCell>
                        {pricingData.map((plan, planIndex) => (
                            <TableCell key={planIndex} className="text-center">
                                {plan.features.includes(feature) ? (
                                    <Check className="mx-auto h-4 w-4 text-green-500" />
                                ) : (
                                    <X className="mx-auto h-4 w-4 text-red-500" />
                                )}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell>Choose Plan</TableCell>
                    {pricingData.map((plan, index) => (
                        <TableCell key={index} className="text-center">
                            <Button variant="outline">Select {plan.name}</Button>
                        </TableCell>
                    ))}
                </TableRow>
            </TableBody>
        </Table>
    )
}

// 3. Pricing slider with user count
const PricingSlider = () => {
    const [userCount, setUserCount] = useState(1)
    const pricePerUser = 10

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Custom Plan</CardTitle>
                <CardDescription>Choose the number of users for your plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Slider
                    min={1}
                    max={100}
                    step={1}
                    value={[userCount]}
                    onValueChange={(value) => setUserCount(value[0])}
                />
                <div className="text-center">
                    <span className="text-3xl font-bold">{userCount}</span> Users
                </div>
                <div className="text-center">
                    <span className="text-4xl font-bold">${userCount * pricePerUser}</span>/month
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Get Started</Button>
            </CardFooter>
        </Card>
    )
}

// 4. Pricing cards with hover animation
const AnimatedPricingCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingData.map((plan, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <CardTitle>{plan.name}</CardTitle>
                            <CardDescription>
                                <span className="text-3xl font-bold">${plan.monthlyPrice}</span>/month
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className="mr-2 h-4 w-4 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Choose Plan</Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}

// 5. Pricing comparison with expandable features
const ExpandablePricingComparison = () => {
    const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

    return (
        <div className="space-y-4">
            {pricingData.map((plan, index) => (
                <Card key={index}>
                    <CardHeader className="cursor-pointer" onClick={() => setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}>
                        <div className="flex justify-between items-center">
                            <CardTitle>{plan.name}</CardTitle>
                            <CardDescription>
                                <span className="text-2xl font-bold">${plan.monthlyPrice}</span>/month
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <AnimatePresence>
                        {expandedPlan === plan.name && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CardContent>
                                    <ul className="space-y-2">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <Check className="mr-2 h-4 w-4 text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Choose {plan.name} Plan</Button>
                                </CardFooter>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Card>
            ))}
        </div>
    )
}


// 1. Interactive 3D Pricing Cards
const Interactive3DPricingCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.map((plan, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className="p-6 bg-gradient-to-br from-primary to-primary-foreground text-white">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-4xl font-bold">${plan.monthlyPrice}<span className="text-lg">/mo</span></p>
                    </div>
                    <div className="p-6">
                        <div className='h-[200px]'>
                            <ul className="space-y-2 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className="mr-2 h-5 w-5 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full bg-primary text-white py-2 rounded-md  transition-colors duration-300">
                            Choose Plan
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// 2. Pricing Timeline
const PricingTimeline = () => {
    return (
        <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary transform -translate-x-1/2" />
            {pricingData.map((plan, index) => (
                <motion.div
                    key={index}
                    className="relative mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                >
                    <div className="flex items-center mb-2">
                        <div className="w-1/2 text-right pr-8">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <p className="text-3xl font-bold text-primary">${plan.monthlyPrice}<span className="text-lg">/mo</span></p>
                        </div>
                        <div className="w-6 h-6 bg-primary rounded-full z-10" />
                        <div className="w-1/2 pl-8">
                            <ul className="space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className="mr-2 h-5 w-5 text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md  transition-colors duration-300">
                                Choose Plan
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

// 3. Pricing Comparison Slider
const PricingComparisonSlider = () => {
    const [sliderValue, setSliderValue] = useState(50)

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Compare Plans</h2>
            <div className="flex justify-between mb-4">
                <span className="font-bold">Starter</span>
                <span className="font-bold">Pro</span>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(parseInt(e.target.value))}
                className="w-full mb-8"
            />
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Starter</h3>
                    <p className="text-4xl font-bold mb-4">${pricingData[0].monthlyPrice}<span className="text-lg">/mo</span></p>
                    <ul className="space-y-2">
                        {pricingData[0].features.map((feature, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: sliderValue <= 50 ? 1 : 0.3 }}
                            >
                                <Check className="mr-2 h-5 w-5 text-green-500" />
                                {feature}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">Pro</h3>
                    <p className="text-4xl font-bold mb-4">${pricingData[1].monthlyPrice}<span className="text-lg">/mo</span></p>
                    <ul className="space-y-2">
                        {pricingData[1].features.map((feature, i) => (
                            <motion.li
                                key={i}
                                className="flex items-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: sliderValue > 50 ? 1 : 0.3 }}
                            >
                                <Check className="mr-2 h-5 w-5 text-green-500" />
                                {feature}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

// 4. Animated Feature Highlight
const AnimatedFeatureHighlight = () => {
    const [selectedPlan, setSelectedPlan] = useState(pricingData[1].name)

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-center space-x-4 mb-8">
                {pricingData.map((plan, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-md ${selectedPlan === plan.name ? 'bg-primary text-white' : 'bg-gray-200'}`}
                        onClick={() => setSelectedPlan(plan.name)}
                    >
                        {plan.name}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">{selectedPlan}</h3>
                    <p className="text-4xl font-bold mb-4">
                        ${pricingData.find(p => p.name === selectedPlan)?.monthlyPrice}
                        <span className="text-lg">/mo</span>
                    </p>
                    <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-foreground transition-colors duration-300 mt-4">
                        Choose Plan
                    </button>
                </div>
                <div>
                    <AnimatePresence mode="wait">
                        <motion.ul
                            key={selectedPlan}
                            className="space-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {pricingData.find(p => p.name === selectedPlan)?.features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Check className="mr-2 h-5 w-5 text-green-500" />
                                    {feature}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

// 5. Day/Night Theme Pricing Toggle
const DayNightThemePricing = () => {
    const [isNightTheme, setIsNightTheme] = useState(false)

    return (
        <div className={`p-8 rounded-xl transition-colors duration-500 ${isNightTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Pricing Plans</h2>
                <button
                    className={`p-2 rounded-full ${isNightTheme ? 'bg-yellow-400' : 'bg-gray-800 text-white'}`}
                    onClick={() => setIsNightTheme(!isNightTheme)}
                >
                    {isNightTheme ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingData.map((plan, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col p-6 rounded-lg ${isNightTheme ? 'bg-gray-800' : 'bg-gray-100'}`}
                        initial={false}
                        animate={{ y: isNightTheme ? [0, -10, 0] : 0 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                    >
                        <div className='flex flex-col h-[250px]'>
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-4xl font-bold mb-4">${plan.monthlyPrice}<span className="text-lg">/mo</span></p>
                            <ul className="space-y-2 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <Check className={`mr-2 h-5 w-5 ${isNightTheme ? 'text-yellow-400' : 'text-green-500'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className={`w-full py-2 rounded-md transition-colors duration-300 ${isNightTheme ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'bg-primary text-white hover:bg-primary-foreground'}`}>
                            Choose Plan
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}


// Main component to showcase all Pricing components
export default function ModernPricingComponents() {
    return (
        <>
            <div className="p-20 bg-slate-200 my-4">
                <Title name="Screen Pricing Layout " />
            </div>
            <div className="container mx-auto py-8 space-y-12">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Toggle Pricing Cards</h2>
                    <TogglePricingCards />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Pricing Table</h2>
                    <PricingTable />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Pricing Slider</h2>
                    <PricingSlider />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Animated Pricing Cards</h2>
                    <AnimatedPricingCards />
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Expandable Pricing Comparison</h2>
                    <ExpandablePricingComparison />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Interactive 3D Pricing Cards</h2>
                    <Interactive3DPricingCards />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Pricing Timeline</h2>
                    <PricingTimeline />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Pricing Comparison Slider</h2>
                    <PricingComparisonSlider />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Animated Feature Highlight</h2>
                    <AnimatedFeatureHighlight />
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-8">Day/Night Theme Pricing Toggle</h2>
                    <DayNightThemePricing />
                </section>
            </div>
        </>
    )
}