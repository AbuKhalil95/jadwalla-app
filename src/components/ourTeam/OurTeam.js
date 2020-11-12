import React from 'react';
import './ourTeam.scss';
import { OurTeamBox } from './OurTeamBox';

const OurTeam = props => {

    return (
        <body class="body">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>
            <h1>About Us</h1>
            <p class="aboutUs">Khobaraa Team was founded in 2020 by a group of engineering and designers. from different locations from Amman, Zarqa Jordan, and Gaza city Palestine, we have a global scope, providing Jadwaleh application for time management  to all students in high secondary schools around the world, our vision depends in how to make the students' effort more efficient and accurate, where the time is the most valuable thing around the world for all people,in our future plans, we will target all people who interest in time management for his own business and for his daily routine.</p>



            <h2>Our Team</h2>
            <div class="wrapper">
                <OurTeamBox
                    img={"https://ca.slack-edge.com/TNGRRLUMA-U013538GSAJ-b9f3777431e9-512"}
                    name={'Ashjan Albarqi'}
                    des={'Full stack web developer, with background in communications Engineering.'}
                    position={'Team Member'}
                    faceLink={""}
                    gitHubLink={"https://github.com/AAlbarqi"}
                />
                <OurTeamBox
                    img={"https://ca.slack-edge.com/TNGRRLUMA-U011NPH9GAZ-808c81d1e1e9-512"}
                    name={'Osama Hanoun'}
                    des={'A Javascript full-stack web developer with CodeFellows.  B.Sc degree in Civil Engineering from the University of Jordan.'}
                    position={'Vice Team Leader'}
                    faceLink={""}
                    gitHubLink={"https://github.com/OsamaHanoun"}
                />
                <OurTeamBox
                    img={"https://ca.slack-edge.com/TNGRRLUMA-U012B8H4S86-f69cf5f5e0bc-512"}
                    name={'Yahya Abu Khalil'}
                    des={'JS Web Developer, Electrical Engineer, Experience in problem solving.'}
                    position={'Team Leader'}
                    faceLink={""}
                    gitHubLink={"https://github.com/AbuKhalil95"}
                />
                <OurTeamBox
                    img={"https://media-exp1.licdn.com/dms/image/C5603AQEDKIeKhWRkJQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=TiT18WfR1x4qwNW8el6iK7MgF-vlyTfZLfxzdTIeEOU"}
                    name={'Ahmad AlHabrawi'}
                    des={'Full Stack Web Developer In JavaScript with Electrical Engineering  Background '}
                    position={'Team Member'}
                    faceLink={"https://web.facebook.com/mamdouh.hubrawee"}
                    gitHubLink={"https://github.com/ahmadmamdouh1995"}
                />
            </div>
        </body>
    )
};

export default OurTeam;