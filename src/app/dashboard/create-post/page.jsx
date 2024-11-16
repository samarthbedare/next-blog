"use client";

import { useUser } from "@clerk/nextjs";
import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
// https://dev.to/a7u/reactquill-with-nextjs-478b
import 'react-quill-new/dist/quill.snow.css';

export default function CreatePostPage() {
    const {isSignedIn, user,isLoaded}=useUser();

    if (!isLoaded) {
        return null;
    }

    if(isSignedIn && user.publicMetadata.isAdmin){
        return (
            <div className='p-3 max-w-3xl mx-auto min-h-screen'>
              <h1 className='text-center text-3xl my-7 font-semibold'>
                Create a post
              </h1>
              <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4 sm:flex-row justify-between'>
                  <TextInput
                    type='text'
                    placeholder='Title'
                    required
                    id='title'
                    className='flex-1'
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                  <Select
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value='uncategorized'>Select a category</option>
                    <option value='javascript'>JavaScript</option>
                    <option value='reactjs'>React.js</option>
                    <option value='nextjs'>Next.js</option>
                  </Select>
                </div>
                <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
                  <FileInput
                    type='file'
                    accept='image/*'
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <Button
                    type='button'
                    gradientDuoTone='purpleToBlue'
                    size='sm'
                    outline
                    onClick={handleUpdloadImage}
                    disabled={imageUploadProgress}
                  >
                    {imageUploadProgress ? (
                      <div className='w-16 h-16'>
                        <CircularProgressbar
                          value={imageUploadProgress}
                          text={`${imageUploadProgress || 0}%`}
                        />
                      </div>
                    ) : (
                      'Upload Image'
                    )}
                  </Button>
                </div>
      
                {imageUploadError && (
                  <Alert color='failure'>{imageUploadError}</Alert>
                )}
                {formData.image && (
                  <img
                    src={formData.image}
                    alt='upload'
                    className='w-full h-72 object-cover'
                  />
                )}
      
                <ReactQuill
                  theme='snow'
                  placeholder='Write something...'
                  className='h-72 mb-12'
                  required
                  onChange={(value) => {
                    setFormData({ ...formData, content: value });
                  }}
                />
                <Button type='submit' gradientDuoTone='purpleToPink'>
                  Publish
                </Button>
              </form>
            </div>
          );
    }return (
        <h1 className="text-center text-3xl my-7 font-semibold">
            You are not authorized to this Page
        </h1>
    )

  return (
    <div>CreatePostPage</div>
  )
}
