import { useEffect } from 'react'
import client from '../config/supabase'

export default function AuthRoute({children}) {
    useEffect(() => {
        const checkAuth = async () => {
            const { error } = await client.auth.getUser()
            
            if (error) {
                location.href = '/login'
            }
        }
        checkAuth()
    }, [])

    return children
}