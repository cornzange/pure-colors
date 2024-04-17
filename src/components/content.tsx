import { HexColorPicker } from "react-colorful";
type Params = {
    color: string,
    setColor: (newColor: string) => void
}
function Content({ color, setColor }: Params) {
    const getRadialGradient = () => `radial-gradient(circle farthest-side  at 50% 50%,  #000, ${color})`
    return (
        <section className="Content" style={{ background: getRadialGradient() }} >
            <h1 className="content_header">create your own pure color</h1>
            <HexColorPicker color={color} onChange={setColor} />
            <div className="value" >
                Current color is {color}
            </div>
        </section>
    );
}

export default Content;