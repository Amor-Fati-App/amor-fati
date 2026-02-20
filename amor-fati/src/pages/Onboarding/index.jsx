import React, {useEffect} from 'react'
import { useAuth } from '../../hooks/useAuth'
import client from '../../config/supabase';

const Onboarding = () => {
    const { user } = useAuth();

    useEffect(() => {
        const getUserProfile = async () => {
           
        }
    })

    
  return (
    <div>Onboarding</div>
  )
}

export default Onboarding