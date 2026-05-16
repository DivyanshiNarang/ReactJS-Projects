import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router'

const AppLayout = () => {
    return (
        <div>
            <main className='min-h-screen container mx-auto px-4 md:px-0'>
                <Header />
                <Outlet />
            </main>

            <footer className='p-10 text-center bg-gray-800 mt-10'>
                Made with ❤️ by Divyanshi
            </footer>
        </div>
    )
}

export default AppLayout
