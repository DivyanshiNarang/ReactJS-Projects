import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BeatLoader } from 'react-spinners'
import Error from './Error'
import * as yup from 'yup'
import { login } from '@/db/apiAuth'
import useFetch from '@/hooks/useFetch'

const Login = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const longLink = searchParams.get('createNew')
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { data, error, loading, fn } = useFetch(login, formData)

    useEffect(() => {
        if (error === null && data) {
            navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ''}`)
        }
    }, [data])

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setErrors([])

        try {
            const schema = yup.object().shape({
                email: yup.string().email('Invalid Email').required('Email is required'),
                password: yup.string().min(6, 'Password must be 6 characters long').required('Password is required')
            })

            await schema.validate(formData, { abortEarly: false })

            await fn()

        } catch (err) {
            const newErros = {}

            err?.inner?.forEach(err => {
                newErros[err.path] = err.message
            })

            setErrors(newErros)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>to your account if you already have one.</CardDescription>
                {error && <Error message={error.message} />}
            </CardHeader>
            <CardContent className='space-y-2'>
                <div className='space-y-1'>
                    <Input name='email' type='email' placeholder='Email'
                        onChange={handleInputChange} />
                    {errors?.email && <Error message={errors.email} />}
                </div>
                <div className='space-y-1'>
                    <Input name='password' type='password' placeholder='Password'
                        onChange={handleInputChange} />
                    {errors?.password && <Error message={errors.password} />}
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={(e) => handleLogin(e)}>
                    {loading ? <BeatLoader size={10} color='#36d7b7' /> : 'Login'}
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Login
