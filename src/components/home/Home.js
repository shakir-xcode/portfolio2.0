import React, {useEffect} from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.webp';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { sendMessage } from "../../api/webFormsApi";
import { getIPV4, getIPV6 } from "../../api/ipApi";

export default function Home({ innerRef }) {

   const gatherUserInfo = async () => {
    let ipv4, ipv6;
    try {
      ipv4 = await getIPV4();
      ipv6 = await getIPV6();
    } catch (error) {
      console.log(error);
    }
    return {
      userType: "Site Visitor",
      userAgent: navigator.userAgent,
      width: window.screen.width,
      height: window.screen.height,
      platform: navigator?.userAgentData?.platform || navigator.platform,
      mobile:
        navigator?.userAgentData?.mobile ||
        window.matchMedia("(max-width: 560px)").matches,
      ipv4,
      ipv6,
      timestamp: new Date().toString(),
    };
  };

  useEffect(() => {
    const id = setTimeout(async () => {
       sendMessage(await gatherUserInfo());
    }, 0);

    return () => {
      clearTimeout(id);
    };
  }, []);

   return (
      <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '50vh' }}
            height={{ xs: '35vh', md: '50vh' }}
            borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} py={'0.7rem'} mx="-3rem" px={{ sm: "3rem" }} >
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} link={bio?.link} />
               ))}
            </Box>
            <Box display={'flex'} py={'0.7rem'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}