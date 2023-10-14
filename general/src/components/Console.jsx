// icons
import { IconArrowBigDownFilled, IconArrowBigLeftFilled, IconArrowBigRightFilled, IconArrowBigUpFilled, IconTriangle, IconSquare, IconCircle, IconX, IconArrowDown } from '@tabler/icons-react'

const Console = () => {
    return (
        <div className="consola">
            <div className="consola-content">
                <h1>I make web applications, <br/>web design & <span className='retro'>retro</span> || <span className='modern'>modern</span> style</h1>
            </div>
            <div className="controller">
                <section className="layout">
                    <div className="top"><IconArrowBigUpFilled /></div>
                    <div className="left"><IconArrowBigLeftFilled /></div>
                    <div className="right"><IconArrowBigRightFilled /></div>
                    <div className="down"><IconArrowBigDownFilled /></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
                <section className="layout">
                    <div className="top triangle"><IconTriangle  /></div>
                    <div className="left square"><IconSquare  /></div>
                    <div className="right circle"><IconCircle  /></div>
                    <div className="down x"><IconX  /></div>
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