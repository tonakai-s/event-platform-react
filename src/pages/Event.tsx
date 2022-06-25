import { Header } from '../components/Header'
import { LessonsSideBar } from '../components/LessonsSideBar'
import { LessonPlayer } from '../components/LessonPlayer'
import { useParams } from 'react-router-dom'


export function Event(){
    const { slug } = useParams<{ slug: string; }>()

    return(
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex flex-1'>
                { slug
                  ? <LessonPlayer lessonSlug={slug} />
                  : <div className='flex-1' />
                }
                <LessonsSideBar />
            </main>
        </div>
    )
}