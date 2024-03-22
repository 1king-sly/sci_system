'use client'
import React, { useCallback, useEffect, useState } from 'react';
import Input from './Input';
import Button from './Button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import clsx from 'clsx'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

type Variant = 'REGISTER' | 'LOGIN';

export default function AuthForm() {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [loading, setisLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    registrationNumber: '',
  });

  const toggleLoading = () => {
    setisLoading((prevLoading) => !prevLoading);
  };

  const toggleVariant = useCallback(() => {
    setVariant((prevVariant) => (prevVariant === 'LOGIN' ? 'REGISTER' : 'LOGIN'));
  }, []);


  const router = useRouter();

  const session = useSession();


  const handleGuestSubmit = async() =>{
    const event = window.event;
    if (!event) {
      return;
    }
    event.preventDefault();

    toggleLoading();

    router.push('/Guest/Projects');   
  }

  const handleSubmit = async () => {
    const event = window.event;
    if (!event) {
      return;
    }
    event.preventDefault();

    toggleLoading();

    try {
      toast.loading('Authenticating ...')
      if (variant === 'REGISTER') {
        await axios.post('/api/register', formData);
        await signIn('credentials', formData);
      }

      if (variant === 'LOGIN') {
        const callback = await signIn('credentials', {
          ...formData,
          redirect: false,
        });

        if (callback?.error) {
          toast.dismiss()
          toast.error('Invalid Credentials');
        } else if (callback?.ok && !callback?.error) {
          toast.dismiss()
          toast.success('Logged In');
        }
      }
    } catch (error) {
      toast.dismiss()
      toast.error('Something went wrong');
    } finally {
      toggleLoading();
    }
  };

  useEffect(() => {
    setDisabled(loading);
  }, [loading]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event) {
      return;
    }
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <div className={clsx(`w-full mx-16 bg-white px-4 lg:px-10 py-6 mt-2 gap-2 rounded-md  shadow-lg`, {
        'hidden': session?.status === 'authenticated'
      })}>
        <form>
          {variant === 'REGISTER' && (
             <>
             <Input
               id='FName'
               name='firstName'
               label='First Name'
               type='text'
               required
               placeholder='Enter First Name'
               disabled={disabled}
               value={formData.firstName}
               onChange={handleChange}
             />
             <Input
               id='SName'
               name='secondName'
               label='Second Name'
               required
               type='text'
               placeholder='Enter Second Name'
               disabled={disabled}
               value={formData.secondName}
               onChange={handleChange}
             />
           </>
         )}
         <Input
           required
           id='email'
           name='email'
           label=' Email'
           type='email'
           placeholder='Email address'
           disabled={disabled}
           value={formData.email}
           onChange={handleChange}
         />
         <div className='relative'>
           <Input
             required
             id='Pword'
             name='password'
             label='Password'
             type={showPassword ? 'text' : 'password'} 
             placeholder='Enter Password'
             disabled={disabled}
             value={formData.password}
             onChange={handleChange}
           />
           <div
             className='absolute inset-y-0 right-0 flex  pr-1 cursor-pointer   items-center mt-7 '
             onClick={togglePasswordVisibility} 
           >
             {showPassword ? (
              <EyeSlashIcon className='w-4 max-[425px]:w-3'/>
             ) : (
               <EyeIcon className='w-4 max-[425px]:w-3'/>
             )}
           </div>
         </div>
          <div className='mt-4 text-gray-100'>
            <Button
              type='submit'
              fullWidth
              onClick={() => handleSubmit()}
              disabled={disabled}
            >
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>
        <div className='flex gap-2 justify-center text-xs mt-6 px-2 text-gray-500'>
          <div>{variant === 'LOGIN' ? "Don't have an account?": "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className='underline cursor-pointer'>
            {variant === 'LOGIN' ? 'Sign up' : 'Login'}
          </div>
        </div>
      </div>
    </>
  );
}
