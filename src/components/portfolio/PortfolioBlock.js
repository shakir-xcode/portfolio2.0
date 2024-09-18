import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import DetailsModal from './DetailsModal';

function PortfolioBlock(props) {
   const { image, live, source, title, description, features, technologies } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
            alignItems={'center'} justifyContent={"center"} fontSize={'1rem'} px={"1em"} py={'2rem'} flexWrap={"wrap"} >
            <DetailsModal title={title} description={description} features={features} technologies={technologies} />
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;