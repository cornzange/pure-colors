import { TonConnectButton } from "@tonconnect/ui-react";

function Header({ color }: { color: string }) {
    return (
        <header className="Header" style={{ background: color }}>
            <a className="header_logo"></a>
            <TonConnectButton />
        </header>
    );
}

export default Header;