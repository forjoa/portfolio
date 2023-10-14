// icons
import { IconArrowBigDownFilled, IconArrowBigLeftFilled, IconArrowBigRightFilled, IconArrowBigUpFilled, IconTriangle, IconSquare, IconCircle, IconX, IconArrowDown } from '@tabler/icons-react'

const Console = () => {
    return (
        <div className="consola">
            <div className="consola-content">
                <h1>I make web applications, <br/>web design & <span className='retro'>retro</span> || <span className='modern'>modern</span> style</h1>
            </div>
            <div class="controller">
                <section class="layout">
                    <div class="top"><IconArrowBigUpFilled /></div>
                    <div class="left"><IconArrowBigLeftFilled /></div>
                    <div class="right"><IconArrowBigRightFilled /></div>
                    <div class="down"><IconArrowBigDownFilled /></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                <section class="layout">
                    <div class="top triangle"><IconTriangle  /></div>
                    <div class="left square"><IconSquare  /></div>
                    <div class="right circle"><IconCircle  /></div>
                    <div class="down x"><IconX  /></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </div>
            <div className="continue">
                <IconArrowDown size={48}/>
            </div>
        </div>
    )
}

export default Console