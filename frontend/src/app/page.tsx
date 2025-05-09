'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function RoleSelectionPage() {
  const router = useRouter()

  const handleRoleSelect = role => {
    if (role === 'patient') {
      router.push('/login/patient')
    } else if (role === 'doctor') {
      router.push('/login/doctor')
    } else if (role === 'admin') {
      router.push('/login/admin')
    }
  }

  return (
    <div className='relative min-h-screen bg-gray-800'>
      {/* Background image for screens < 2xl (fullscreen) */}
      <div className='absolute inset-0 z-0 block 2xl:hidden'>
        <Image
          src='/login_register_medbot.png'
          alt='Medical Professional'
          layout='fill'
          objectFit='cover'
          priority
        />
      </div>

      <main className='relative z-10 flex min-h-screen flex-col 2xl:flex-row'>
        <div className='relative hidden w-1/2 bg-cover bg-center 2xl:block'>
          <Image
            src='/login_register_medbot.png'
            alt='Medical Professional'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>

        <div className='flex min-h-screen w-full items-center justify-center bg-gray-800 bg-opacity-80 p-6 2xl:w-1/2'>
          <div className='w-full max-w-md'>
            <div className='mb-6 flex justify-center'>
              <div className='flex items-center text-white'>
                <Image
                  src='/Union.png'
                  alt='MedBot Logo'
                  width={30}
                  height={30}
                  className='mr-2'
                />
                <span className='text-2xl font-semibold'>MedBot</span>
              </div>
            </div>

            <div className='rounded-lg bg-white p-8 shadow-lg'>
              <h2 className='mb-6 text-center text-xl font-semibold'>
                Log in as
              </h2>

              <div className='space-y-4'>
                <button
                  className='w-full rounded-md bg-cyan-500 py-3 text-white transition duration-200 hover:bg-cyan-600'
                  onClick={() => handleRoleSelect('doctor')}
                >
                  Doctor
                </button>

                <button
                  className='w-full rounded-md border border-cyan-500 bg-white py-3 text-cyan-500 transition duration-200 hover:bg-gray-100'
                  onClick={() => handleRoleSelect('admin')}
                >
                  Admin
                </button>

                <button
                  className='w-full rounded-md bg-cyan-500 py-3 text-white transition duration-200 hover:bg-cyan-600'
                  onClick={() => handleRoleSelect('patient')}
                >
                  Patient
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
