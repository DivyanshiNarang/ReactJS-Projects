import React from 'react'
import { Link, useNavigate } from 'react-router'
import { Button } from './ui/button'
import { CircleUserRound, LinkIcon, LogOut, ReceiptIndianRupee, UserRoundPen } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Header = () => {
    const navigate = useNavigate();
    const user = false;

    return (
        <nav className='py-4 flex justify-between items-center'>
            <Link to='/'>
                <img src='/logo.png' alt='Logo' className='h-16' />
            </Link>

            <div>
                {user ? (
                    <DropdownMenu className='bg-(--primary-foreground) border'>
                        <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuLabel className='my-2'>
                                Divyanshi Narang
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className='flex items-center gap-1 mb-2'>
                                <CircleUserRound className='w-4 h-4' />
                                My Account
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex items-center gap-1 mb-2'>
                                <UserRoundPen className='w-4 h-4' />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex items-center gap-1 mb-2'>
                                <ReceiptIndianRupee className='w-4 h-4' />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex items-center gap-1 mb-2'>
                                <LinkIcon className='w-4 h-4' />
                                Team
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex items-center gap-1 mb-2 text-red-400'>
                                <LogOut className='w-4 h-4' />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) :
                    <Button onClick={() => navigate('/auth')}>Login</Button>
                }
            </div>
        </nav>
    )
}

export default Header
