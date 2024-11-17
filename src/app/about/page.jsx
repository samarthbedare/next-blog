export default function About() {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-2xl mx-auto p-3 text-center'>
          <div>
            <h1 className='text-3xl font font-semibold text-center my-7'>
            About Samarth Bedare & NewsSpiral Blog
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
              Hello! Im Samarth Bedare, a student developer currently studying Computer Engineering in India. As a hobbyist with a deep passion for technology, sports, cricket, movies, and more, I created NewsSpiral Blog to share my thoughts, ideas, and discoveries with the world. Through this blog, I aim to explore a wide variety of topics, from the latest tech developments to exciting sports updates and cinematic reviews.              </p>
              <p>
              Being a student, Im always learning, experimenting, and growing my skills in the ever-evolving field of computer engineering. This platform is a way for me to channel that creativity and connect with others who share similar interests. Thank you for visiting NewsSpiral Blog, and I hope you find something that catches your eye!
              </p>
  
              <p>
                This website is created using Next.js and{' '}
                <a
                  href='https://go.clerk.com/fgJHKlt'
                  target='_blank'
                  className='text-teal-500 hover:underline'
                >
                  Clerk
                </a>
                .
              </p>
  
              <p>
                We invite you to comment on our posts and interact with other
                readers. You can like and reply to others&apos; comments as well. We
                believe that a community of learners can support each other&apos;s
                growth and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }