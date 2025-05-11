import AboutImgUploadForm from '@/components/about/AboutImgUploadForm'
import { db } from '@/server';
import React from 'react'

const page =  async () => {
  const contactData = await db.query.about.findFirst();
  return (
    <div className=' mt-14'>
     <AboutImgUploadForm  initialData={
          contactData
            ? {
                image: contactData.image ?? "",
                aboutMe: contactData.aboutMe ?? "",
              }
            : undefined
        }/>
    </div>
  )
}

export default page