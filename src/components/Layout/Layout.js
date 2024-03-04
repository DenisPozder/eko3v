const { default: Footer } = require("../Footer/Footer")
const { default: Header } = require("../Header/Header")

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout