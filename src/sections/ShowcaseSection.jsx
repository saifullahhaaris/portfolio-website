import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'; 
import TitleHeader from "../components/TitleHeader";
import Button from '../components/Button.jsx'
import GlowCard from '../components/GlowCard'; // Adjust the path if needed

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);

    

    useGSAP(() => {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current, project5Ref.current];

        projects.forEach((card,index) =>{
            gsap.fromTo(
                card, 
                {y:50,opacity:0},
                {y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3*(index+1),
                    scrollTrigger:{
                        trigger:card, 
                        start: 'top bottom-=100'
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity: 1, duration: 1.5}
        )
    }, [])
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <TitleHeader 
                    title="Personal Projects" 
                    sub="💻 Some Things I've Built" 
            />
            <div className="showcaselayout mt-16">
                {/* {LEFT} */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <GlowCard showReview={false}>
                        <div className="xl:h-[70vh] md:h-[50vh] h-96 relative bg-[#ffefdb] rounded-xl overflow-hidden flex justify-center items-center">
                        <img  className="w-full h-full object-contain scale-140" src="/images/ticketmanagementimage.png" alt="Ticket Management System"/>
                    </div>
{/*                     <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ticket Management System"/>
                    </div> */}
                    <div className="text-content mb-5">
                        <h2>
                            A full-stack web app to manage and track tickets
                        </h2>
                        <p className="text-white-50 md:text-xl mb-5">
                            Built with Java (CLI & Spring Boot), Angular, and MySQL. Includes RESTful APIs, JWT auth, role-based access, real-time updates, and a terminal-based version for offline ticket management.                        
                        </p>
                        <div className="flex flex-row gap-4 justify-center flex-wrap sm:flex-nowrap">
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="GitHub"
                                href="https://github.com/saifullahhaaris/Full-stack-web-app-TicketManagementSystem"
                                icon="arrow-right.svg"
                            />
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="Demo"
                                href="https://www.youtube.com/@saifullahhaaris"
                                icon="arrow-right.svg"
                            />
                        </div>
                    </div>
                   </GlowCard>

                   <GlowCard showReview={false}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Chat App"/>
                    </div>
                    <div className="text-content mb-5">
                        <h2>
                            A chat app to message seamlessly
                        </h2>
                        <p className="text-white-50 md:text-xl mb-5">
                            An app built with Flutter and Firebase backend. Real-time messaging, user authentication, notifications and files sharing.                        
                        </p>
                        <div className="flex flex-row gap-4 justify-center flex-wrap sm:flex-nowrap">
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="GitHub"
                                href="https://github.com/saifullahhaaris/chatapp-flutter"
                                icon="arrow-right.svg"
                            />
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="Demo"
                                href="https://www.youtube.com/@saifullahhaaris"
                                icon="arrow-right.svg"
                            />
                        </div>
                    </div>
                    </GlowCard>
                </div>

                {/* {RIGHT} */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <GlowCard showReview={false}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="Movie Finder App"/>
                        </div>
                        <h2 className="mb-4">
                            An Android app for discovering, searching, and saving movies.
                        </h2>
                        <p className="text-white-50 md:text-xl mb-3">
                            Built with Kotlin, Jetpack Compose, and the OMDb API. Key features include movie and actor search, offline caching of favorite movies using Room Database (SQLite), and a modern, responsive UI. The app ensures a smooth user experience with persistent state across device rotations.
                        </p>
                        <div className="flex flex-row gap-4 justify-center flex-wrap sm:flex-nowrap">
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="GitHub"
                                href="https://github.com/saifullahhaaris/movie-app-kotlin"
                                icon="arrow-right.svg"
                            />
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="Demo"
                                href="https://www.youtube.com/@saifullahhaaris"
                                icon="arrow-right.svg"
                            />
                        </div>
                        </GlowCard>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <GlowCard showReview={false}>
                        <div className="image-wrapper bg-[#c88893]">
                            <img src="/images/project3.png" alt="Snake Game"/>
                        </div>
                        <h2 className="mb-4">
                           A classic Snake game built in Java
                        </h2>
                        <p className="text-white-50 md:text-xl mb-3">
                            Built using Java, swing and OOP principles. Features include keyboard controls, dynamic grid logic, score tracking, and customizable speed.                        
                        </p>
                        <div className="flex flex-row gap-4 justify-center flex-wrap sm:flex-nowrap">
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="GitHub"
                                href="https://github.com/saifullahhaaris/SnakeGame-java"
                                icon="arrow-right.svg"
                            />
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="Demo"
                                href="https://www.youtube.com/@saifullahhaaris"
                                icon="arrow-right.svg"
                            />
                        </div>
                        </GlowCard>
                    </div>
                    {/* <div className="project" ref={project5Ref}>
                        <GlowCard showReview={false}>
                        <div className="image-wrapper bg-[#80656a]">
                            <img src="/images/project3.png" alt="Book Shop Website"/>
                        </div>
                        <h2 className="mb-4">
                            A literature-themed book shop website
                        </h2>
                        <p className="text-white-50 md:text-xl mb-3">
                            A responsive frontend web app built with HTML, CSS, and JavaScript. Explore curated book collections, take interactive quizzes, view galleries, and submit feedback—all in a modern, user-friendly interface. Designed as a group project to showcase web design and client-side interactivity.
                        </p>
                        <div className="flex flex-row gap-4 justify-center flex-wrap sm:flex-nowrap">
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="GitHub"
                                href="https://github.com/saifullahhaaris/DemoOnlineStore"
                                icon="arrow-right.svg"
                            />
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="Demo"
                                href="https://www.youtube.com/@saifullahhaaris"
                                icon="arrow-right.svg"
                            />
                        </div>
                        </GlowCard>
                    </div> */}
                </div>
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project4Ref}>
                        <GlowCard showReview={false}>
                        <div className="image-wrapper bg-[#9e8186]">
                            <img src="/images/project3.png" alt="Dice Battle"/>
                        </div>
                        <h2 className="mb-4">
                           A real-time multiplayer dice battle game for Android
                        </h2>
                        <p className="text-white-50 md:text-xl mb-3">
                            A fast-paced Android dice game built with Kotlin and Jetpack Compose. Play against an intelligent computer opponent in a classic dice battle, with real-time score updates and a modern, intuitive UI. Powered by Android’s latest app architecture.                        
                        </p>
                        <div className="flex flex-row gap-4 justify-center flex-wrap sm:flex-nowrap">
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="GitHub"
                                href="https://github.com/saifullahhaaris/Dice-Battle-kotlin"
                                icon="arrow-right.svg"
                            />
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="Demo"
                                href="https://www.youtube.com/@saifullahhaaris"
                                icon="arrow-right.svg"
                            />
                        </div>
                        </GlowCard>
                    </div>
                    <div className="project" ref={project5Ref}>
                        <GlowCard showReview={false}>
                        <div className="image-wrapper bg-[#797676]">
                            <img src="/images/project3.png" alt="Java Pathfinder"/>
                        </div>
                        <h2 className="mb-4">
                            A Java Application for Solving Grid-Based Pathfinding Puzzles with A* Algorithm
                        </h2>
                        <p className="text-white-50 md:text-xl mb-3">
                            Built with Java, this CLI tool loads grid puzzles from text files. The project demonstrates core algorithmic skills, object-oriented design, and practical use of Java collections and file I/O.
                        </p>
                        <div className="flex flex-row gap-4 justify-center flex-wrap sm:flex-nowrap">
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="GitHub"
                                href="https://github.com/saifullahhaaris/java-pathfinder-algorithm"
                                icon="arrow-right.svg"
                            />
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="Demo"
                                href="https://www.youtube.com/@saifullahhaaris"
                                icon="arrow-right.svg"
                            />
                        </div>
                        </GlowCard>
                    </div>
                    {/* <div className="project" ref={project5Ref}>
                        <GlowCard showReview={false}>
                        <div className="image-wrapper bg-[#b8949a]">
                            <img src="/images/project3.png" alt="JS mini Projects"/>
                        </div>
                        <h2 className="mb-4">
                            Java script mini projects
                        </h2>
                        <p className="text-white-50 md:text-xl mb-3">
                            A collection of five mini JavaScript projects designed to practice and demonstrate core web development concepts. Built with HTML, CSS, and JavaScript — perfect for showing hands-on coding skills and a growth mindset.
                        </p>
                        <div className="flex flex-row gap-4 justify-center flex-wrap sm:flex-nowrap">
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="GitHub"
                                href="https://github.com/saifullahhaaris/5-js-projects"
                                icon="arrow-right.svg"
                            />
                            <Button
                                className="flex-1 min-w-[140px] sm:max-w-[220px] h-12 md:h-16"
                                text="Demo"
                                href="https://www.youtube.com/@saifullahhaaris"
                                icon="arrow-right.svg"
                            />
                        </div>
                        </GlowCard>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection
