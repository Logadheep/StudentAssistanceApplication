import React from 'react';

import s from './home.module.css';
const Courses = () => {
    const courses = [
        { id: 1, title: 'Cloud Computing',
            img: 'https://suretyit.com.au/wp-content/uploads/2022/11/cloud-computing-1024x768.jpg',
         details: 'Cloud Computing tutorial provides basic and advanced concepts of Cloud Computing. Our Cloud Computing tutorial is designed for beginners and professionals. Cloud computing is a virtualization-based technology that allows us to create, configure, and customize applications via an internet connection. The cloud technology includes a development platform, hard disk, software application, and database.\n In this course, you will learn Cloud Computing basics, AWS, Azure, GCP, Cloud Migration, Security, and many more.'
         },
        { id: 2, title: 'Block Chain', 
            img: 'https://www.blueoceanacademy.com/wp-content/uploads/2023/09/Blockchain-Applications-Analysed-through-Workshop-Sessions.jpeg',
            details: 'Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. \n In this course, you will learn Blockchain basics, Ethereum, Hyperledger, Smart Contracts, and many more.'
        },
        { id: 3, title: 'Generative AI', 
            img: 'https://d2908q01vomqb2.cloudfront.net/cb7a1d775e800fd1ee4049f7dca9e041eb9ba083/2023/06/30/genai.jpg',
            details: 'Generative AI is one of the biggest recent advancements in artificial intelligence technology because of its ability to create something new. It opens the door to an entire world of possibilities for human-computer creativity, cooperation, and communication. \n In this course, you will learn Generative AI basics, GANs, VAEs, and many more.'
        },
        { id: 4, title: 'Internet of Things',
            img: 'https://images.prismic.io//intuzwebsite/078cae79-99e4-4114-80d7-c3beffd254c6_IoT+without+Internet-1.png?w=1200&q=80&auto=format,compress&fm=png8',
            details: 'The Internet of Things (IoT) refers to a system of interrelated, internet-connected objects that are able to collect and transfer data over a wireless network without human intervention. It is essential for enabling smart homes, smart cities, industrial automation, and various other applications. In this course, you will learn IoT basics, IoT Security, IoT on Cloud, IoT protocols, IoT data analytics, and many more. You will also explore real-world IoT use cases and gain hands-on experience in building IoT applications'
        }
    ];

    const handleApply = (courseId) => {
        // Handle apply button click for the given course id
        alert(`Applying for course ${courseId}`);
        // redirect to form
    };

    return (
        <div className={s.courses}>
        <h1>Courses</h1>
        <div className={s.coursesList}>
            {courses.map((course) => (
                <div className={s.courseCard} key={course.id}>
                    <h2>{course.title}</h2>
                    <img src={course.img} alt={course.title} />
                    <p>{course.details}</p>
                    <button onClick={() => handleApply(course.id)}>Apply</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Courses;
