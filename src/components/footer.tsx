function Footer({ color }: { color: string }) {
    return (
        <footer className="Footer" style={{ background: color }}>
            <p>© cornzange 2024</p>
            <div className="footer_right-container">
                <p className="footer_feedback">feedback:</p>
                <a className="footer_mail" href="mailto:cornzange@gmail.com">cornzange@gmail.com</a>
            </div>
        </footer>
    );
}

export default Footer;