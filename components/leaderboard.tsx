'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Award, Phone, Mail, MapPin, Calendar, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

// Extended mock data for 25 donators
const donators = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `Donator ${i + 1}`,
    amount: Math.floor(Math.random() * 1000) + 100,
    type: ['Supermarket', 'Restaurant', 'Bakery', 'Farm', 'Catering Service', 'Food Bank', 'School', 'Hotel'][Math.floor(Math.random() * 8)],
    location: ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ', 'Philadelphia, PA'][Math.floor(Math.random() * 6)],
    description: `A dedicated organization committed to reducing food waste and supporting the community. They have been actively participating in our program since ${2020 + Math.floor(Math.random() * 4)}.`,
    phone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    email: `contact@donator${i + 1}.com`,
    lastDonation: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    donationFrequency: ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'][Math.floor(Math.random() * 4)],
    impactScore: Math.floor(Math.random() * 100) + 1,
}))

// Sort donators by amount
donators.sort((a, b) => b.amount - a.amount)

export default function Leaderboard() {
    const [expandedDonator, setExpandedDonator] = useState<number | null>(null)
    const [currentPage, setCurrentPage] = useState(1)
    const donatorsPerPage = 10

    const toggleDonator = (id: number) => {
        setExpandedDonator(expandedDonator === id ? null : id)
    }

    // Calculate pagination indexes
    const indexOfLastDonator = currentPage * donatorsPerPage
    const indexOfFirstDonator = indexOfLastDonator - donatorsPerPage
    const currentDonators = donators.slice(indexOfFirstDonator, indexOfLastDonator)

    // Pagination control
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    // Calculate total pages
    const totalPages = Math.ceil(donators.length / donatorsPerPage)

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center text-primary">Food Donation Leaderboard</h1>
            <div className="max-w-3xl mx-auto space-y-6">
                {currentDonators.map((donator, index) => (
                    <Card key={donator.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-0">
                            <Button
                                variant="ghost"
                                className="w-full h-[130px] py-8 px-6 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                                onClick={() => toggleDonator(donator.id)}
                            >
                                <div className="flex gap-3 items-center w-full space-x-6">
                                    <div className="flex-shrink-0 relative">
                                        {index < 3 && (
                                            <Award className={`h-10 w-10 absolute -top-3 -left-3 ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-400' : 'text-amber-600'}`} />
                                        )}
                                        <Avatar className="h-20 w-20 border-2 border-primary">
                                            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">{donator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="flex-1 flex justify-between items-center">
                                        <p className="text-xl font-semibold text-primary truncate w-fit">
                                            {donator.name}
                                        </p>
                                        <p className="text-lg text-muted-foreground truncate mt-2 w-fit">
                                            {donator.amount} kg donated
                                        </p>
                                        <Badge variant="outline" className="mt-3 text-sm px-3 py-1 w-fit">
                                            {donator.type}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-3 items-center space-y-4">
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-primary">Impact Score</p>
                                        <p className="text-lg font-bold text-primary">{donator.impactScore}/100</p>
                                    </div>
                                    <Progress value={donator.impactScore} className="w-32 h-2" />
                                    {expandedDonator === donator.id ? <ChevronUp className="h-6 w-6 text-primary mt-2" /> : <ChevronDown className="h-6 w-6 text-primary mt-2" />}
                                </div>
                            </Button>
                            {expandedDonator === donator.id && (
                                <div className="px-6 py-6 bg-muted/30 space-y-4">
                                    <p className="text-sm leading-relaxed">{donator.description}</p>
                                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                        <p className="flex items-center text-muted-foreground">
                                            <MapPin className="h-5 w-5 mr-3" />
                                            {donator.location}
                                        </p>
                                        <p className="flex items-center text-muted-foreground">
                                            <Calendar className="h-5 w-5 mr-3" />
                                            Last Donation: {donator.lastDonation}
                                        </p>
                                        <p className="flex items-center text-muted-foreground">
                                            <Phone className="h-5 w-5 mr-3" />
                                            <Link href={`tel:${donator.phone}`} className="hover:underline">{donator.phone}</Link>
                                        </p>
                                        <p className="flex items-center text-muted-foreground">
                                            <Mail className="h-5 w-5 mr-3" />
                                            <Link href={`mailto:${donator.email}`} className="hover:underline">{donator.email}</Link>
                                        </p>
                                    </div>
                                    <p className="text-sm text-primary font-medium">
                                        Donation Frequency: {donator.donationFrequency}
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center mt-8 space-x-4">
                <Button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    variant="outline"
                    size="lg"
                    className="w-32"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                </Button>
                <Button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    size="lg"
                    className="w-32"
                >
                    Next <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
            </div>
        </div>
    )
}
