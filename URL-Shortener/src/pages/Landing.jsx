import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Landing = () => {
    const navigate = useNavigate()
    const [longUrl, setLongUrl] = useState('')

    const handleShortenUrl = (e) => {
        e.preventDefault();
        if (longUrl) {
            navigate(`/auth?createNew=${longUrl}`)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-bold'>
                URL Shortener
            </h2>

            <form
                onSubmit={handleShortenUrl}
                className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
                <Input type='url'
                    placeholder='Enter your long URL'
                    onChange={(e) => setLongUrl(e.target.value)}
                    className='h-full flex-1 p-4'
                />
                <Button className='h-full' type='submit' variant='destructive'>
                    Shorten
                </Button>
            </form>

            <img src="/banner.jpg" alt="banner" className='w-full my-11 md:px-11' />

            <Accordion type="multiple" collapsible className='w-full md:px-11'>
                <AccordionItem value="item-1">
                    <AccordionTrigger>How does the URL shortener works?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis debitis aut similique adipisci cum officia incidunt reprehenderit excepturi saepe quos repudiandae, voluptatem in provident error suscipit dolore obcaecati id nihil!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How does the URL shortener works?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis debitis aut similique adipisci cum officia incidunt reprehenderit excepturi saepe quos repudiandae, voluptatem in provident error suscipit dolore obcaecati id nihil!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How does the URL shortener works?</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis debitis aut similique adipisci cum officia incidunt reprehenderit excepturi saepe quos repudiandae, voluptatem in provident error suscipit dolore obcaecati id nihil!
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default Landing
