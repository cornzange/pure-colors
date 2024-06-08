import { SendTransactionRequest, useTonConnectUI } from "@tonconnect/ui-react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { getMSG } from "../utils/msg-helper";
import { createMetadata } from "../api";
import { Address } from "@ton/core";

type Params = {
    color: string,
    setColor: (newColor: string) => void
}

function Content({ color, setColor }: Params) {
    const [tonConnectUI, setOptions] = useTonConnectUI();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    tonConnectUI.onStatusChange((wallet) => {
        if (wallet) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    })
    const getNFT = async (color: string) => {
        setIsButtonDisabled(true)
        const ownerAddress = Address.parseRaw(tonConnectUI.account?.address as string)
        const msg = await getMSG(color, ownerAddress);
        const secondsInMinute = 60;
        const minutes = 10
        const waitingTime = minutes * secondsInMinute;
        const transaction: SendTransactionRequest = { validUntil: Math.floor(Date.now() / 1000) + waitingTime, messages: [msg] }
        await createMetadata(color)
        await tonConnectUI.sendTransaction(transaction);
        setIsButtonDisabled(false)
    };
    const getRadialGradient = () => `radial-gradient(circle farthest-side  at 50% 50%,  #000, ${color})`
    return (
        <section className="Content" style={{ background: getRadialGradient() }} >
            <h1 className="content_header">create your own pure color</h1>
            <HexColorPicker color={color} onChange={setColor} />
            {/* <div className="content_value">
                current color is {color}
            </div> */}
            <div className="content_button-container">
                <button className="content_button" onClick={() => getNFT(color)} disabled={isButtonDisabled}>
                    get nft with color {color}
                </button>
            </div>

        </section>
    );
}

export default Content;