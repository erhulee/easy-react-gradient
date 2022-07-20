/*
    主要解决渐变边框的圆角问题
*/
import * as React from "react";
import { PropsWithChildren } from "react";
import styled from 'styled-components'
import { createColor, createDeg } from "../../util/color";
type GradientRectangleProps = PropsWithChildren<{
    colors?:string[],
    direction?: string,
    radius?:string,
    width?:string
}> 

export default function GradientRectangle(props:GradientRectangleProps){
    const {colors=['#000','#c61212'], direction='90deg', radius='0px', width = "2px", children} = props   
    const Wapper = styled.div`
        position: relative;
        border-radius: ${radius};
        overflow: hidden;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            right: 0;
            bottom: 0;
            border-radius: ${radius};
            /* 下面的代码让伪元素盖住原来的元素，
            需要有下面的代码，让伪元素的尺寸大于原元素*/
            border: ${width} solid transparent;
            
            /* 然后设置渐变色，并且设置 background-clip
            background-clip: 设置背景色的覆盖范围，border/padding/content*/
            background:  linear-gradient(${createDeg(direction)},${createColor(colors)}) border-box;
            /* padding-box 是生效的范围 */
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
        }
    `
    return <Wapper>
        {children}
    </Wapper>
}