function fillColor(color:string){
    return `rgba${color}`
}

export function createDeg(direction:string){
    console.log(direction)
    // 1. 固定的方位: to right , to top, to left, to bottom
    direction = direction.trim();
    const regex = /^to\s+([\d\D]*)/
    const numberRegex = /^([\d]*)deg/

    if(regex.test(direction)){
        let result = direction.match(regex);
        if(result == null) return;
        let orient = result[1]
        switch(orient){
            case 'right':
                return '90deg'
            case 'left':
                return '270deg'
            case 'top':
                return '0deg'
            case 'bottom':
                return '180deg'
        }
    }else if(numberRegex.test(direction)){
        return direction;
    }else{
        return ""
    }
}
export function createColor(colors:string[]){ // [(233,423,455,0.4)]
    // rgb/十六进制 转 rgba
    const OX_regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g; 
    const RGB_regex = /^rgb\(\s*\d{1,3}(\.\d*)?\s*,\s*\d{1,3}(\.\d*)?\s*,\s*\d{1,3}(\.\d*)?\s*\)/g;
    const RGBA_regex = /^rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1}\.*\d*\s*\)/;

    // 处理 rgba(r,g,b) 漏 a
    // 处理 rga(r,g,b,a) 多 a
    const ERROR_RGB_regex =  /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)/;

    colors = colors.filter(color => OX_regex.test(color)||RGB_regex.test(color)||RGBA_regex.test(color))
    return colors.join(',')
}
