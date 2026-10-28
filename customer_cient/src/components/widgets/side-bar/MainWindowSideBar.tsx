import "./MainWindowSideBar.scss"

interface MainWindowSidebarrParameters {

    isOpen : boolean
}
const MainWindowSideBar = ({isOpen}:MainWindowSidebarrParameters) => {

        return (
            <aside className={ isOpen ? "main-window-sidebar opened" : "main-window-sidebar"}>
                sidebar

                
            </aside>
        )
}

export default MainWindowSideBar;