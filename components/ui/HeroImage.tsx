import Image from 'next/image';
import SelloraDashboard from '@/public/sellora-dashboard.png'

export default function HeroImage() {
  return (
    <>
      <Image 
        src={SelloraDashboard}
        alt='Project Dashboard'
        width={500}
        height={700}
        className='w-500 h-70 rounded-md object-fit'
      />
    </>
  )
}