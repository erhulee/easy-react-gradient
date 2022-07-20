import React, { PropsWithChildren } from 'react';
import { createColor, createDeg } from '../../util/color'
import styled from 'styled-components'
type strokeConfig = {
    width: string,
    colors: string[],
    direction: string
}

type shadowConfig = {
    xpos:number,
    ypos:number,
    colors:string[],
    direction: string
}

type GradientTextProps = PropsWithChildren<{
    content?:string,
    colors?:string[],
    direction?: string,
    custom?:any,
    stroke?:strokeConfig,
    shadow?:shadowConfig
}> 

function translateCustom(source:any){
    if(source == null) return ""
    let result = ""
    let keys = Object.keys(source)
    for(let key of keys){
        result += `${key}: ${source[key]};`
    }
    return result
}



function GradientText(props:GradientTextProps){
    const {content,colors=['rgba(0,0,0,1)','rgba(0,0,0,1)'],direction='90deg', custom, stroke, shadow, children} = props
    const fontSize = custom?.fontSize ?? null;
    const renderContent = children ?? content;

    const Content = styled.div`
        background-image: linear-gradient(${createDeg(direction)},${createColor(colors)});
        -webkit-background-clip: text;
        color: transparent;
        width: max-content;
        height: max-content;
        line-height: 1;
        position: absolute;
        top: 0;
        left: 0;
        ${translateCustom(custom)}
    `;

    const strokeGen = ()=>{
        if(!stroke) return null;
        const Stroke = styled.div`
            line-height: 1;
            color: transparent;
            background: linear-gradient(${createDeg(stroke?.direction)}, ${createColor(stroke?.colors)});
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-stroke: ${stroke?.width} transparent;
            display: flex;
            justify-content: center;
            ${translateCustom(custom)}
        `;

        return (
            <Stroke>
                {renderContent}
            </Stroke>
        )
    }

    const shadowGen = () => {
        if(!shadow) return null;
        const Shadow = styled.div`
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(${createDeg(shadow?.direction)} ${createColor(shadow?.colors)});

            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            transform: translate(${shadow?.xpos}px, ${shadow?.ypos}px);
            line-height: 1;
            ${translateCustom(custom)}
        `
        return (
            <Shadow>
                {renderContent}
            </Shadow>
        )
    }

  

  


   
    const Container = styled.div`
        position: relative;
    `

    return (
        <Container>
            {shadowGen()}
            <Content>
                {renderContent}
            </Content>
            {strokeGen()}
        
        </Container>
    )
}

export default GradientText

