'use client'

import { useState } from 'react'

import Link from 'next/link'

const Home = (props) => {
    // const [topicOptions, setTopicOptions] = useState(topics.python.beginner)

    // const router = useRouter()
    const {topic}=props;
    const [language, setLanguage] = useState('javascript')
    const [difficulty, setDifficulty] = useState('Beginner')
    const [numQuestions, setNumQuestions] = useState('10')

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(language, difficulty, topic)

    //     // router.push('/quiz')
    // }

    // bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent

    return (

        <div className='grid place-items-center p-5'>
            <div className='border rounded border-white/0'>
                {/* DIFFICULTY */}
                <div className='flex flex-col'>
                    <label
                        htmlFor='difficult'
                        className='uppercase text-xs'
                        >
                        Difficulty
                    </label>
                    <select
                        name='difficulty'
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className='quiz-select'
                        >
                        <option value='beginner'>Beginner</option>
                        <option value='intermediate'>Intermediate</option>
                        <option value='advanced'>Advanced</option>
                    </select>
                </div>
                <Link
                    className='q-button'
                    href={{
                        pathname: '/quiz',
                        query: {
                            language,
                            difficulty: difficulty.toLowerCase(),
                            topic: topic.toLowerCase(),
                            numQuestions,
                        },
                    }}
                >
                    Generate Quiz
                </Link>
            </div>
        </div>
    )
}
export default Home
