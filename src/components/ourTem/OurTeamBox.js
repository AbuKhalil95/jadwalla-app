
import React from 'react';

import Image from 'react-bootstrap/Image';
export const OurTeamBox = (props) => {
    const { img, name, des, position, gitHubLink, faceLink } = props;
    return (

        <div class="our_team">
            <div class="team_member">
                <div class="member_img">
                    <Image src={img} alt="our_team" rounded />
                    <div class="social_media">
                        <div class="instagram item"><i class="fab fa-instagram"></i></div>
                        <div class="github item"><a href={gitHubLink} target="_blank" ><i class="fab fa-github"></i></a></div>
                        <div class="facebook item"><a href={faceLink}><i class="fab fa-facebook-f"></i></a></div>
                    </div>
                </div>


                <h3>{name}</h3>
                <span>{position}</span>
                <p>{des}</p>
            </div>
        </div>

    )
}