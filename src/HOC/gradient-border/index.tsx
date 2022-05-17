import styled from 'styled-components'
import React from 'react'
import { borderConfig, borderConfigWithValue, } from './type';
import { createColor, createDeg } from '../../util/color';
import { createBorderWidth } from '../../util/width'




function fillConfigWidthDefault({colors = ['(0,0,0,1)'],width='2',direction="horizon",radiusWidth=10}:borderConfig):borderConfigWithValue{
    return {
        colors,
        width,
        direction,
      
        radiusWidth,
    }

}


export default function GradientBorder(Component:any, config:borderConfig){
    const newConfig : borderConfigWithValue = fillConfigWidthDefault(config)
    console.log(newConfig)
    const border_width = createBorderWidth(newConfig.width)
    const radius =  newConfig.radiusWidth+'px'
    const Wrap = styled.div`
        position: relative;
        z-index: 2;
        width: max-content;
        height: max-content;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            right: 0;
            bottom: 0;
            border-radius: ${radius};
            border: ${border_width} solid transparent;
            background: linear-gradient(${createDeg(newConfig.direction)} ${createColor(newConfig.colors)}) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
            -webkit-mask-composite: destination-out;
            mask-composite: exclude;
        } 
    `
    return function(props:any){
        return (
            <Wrap>
                <Component  {...props}></Component>
            </Wrap>
        )
      
    }
}