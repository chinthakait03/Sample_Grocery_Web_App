import "./MainWindowFooter.scss"

const MainWindowFooter = () => {

    const today = new Date()

    return (
        <footer className="main-window-footer">
            <p className="mb-0"> &copy; {today.getFullYear()} Fresh Mart Supermarket ERP. All Right Received.</p>
        </footer>
    )
}

export default MainWindowFooter;