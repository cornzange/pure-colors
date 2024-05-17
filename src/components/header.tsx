import { TonConnectButton } from "@tonconnect/ui-react";
import { BASE_URL } from "../constants";

function Header({ color }: { color: string }) {
    return (
        <header className="Header" style={{ background: color }}>
            <a className="header_logo" href={BASE_URL}></a>
            <TonConnectButton />
        </header>
    );
}

export default Header;