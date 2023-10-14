// icons
import { IconArrowBigDownFilled, IconArrowBigLeftFilled, IconArrowBigRightFilled, IconArrowBigUpFilled, IconTriangle, IconSquare, IconCircle, IconX } from '@tabler/icons-react'

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
                    <div class="top triangle"><IconTriangle color='white' /></div>
                    <div class="left square"><IconSquare color='white' /></div>
                    <div class="right circle"><IconCircle color='white' /></div>
                    <div class="down x"><IconX color='white' /></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </div>
        </div>
    )
}

export default Console