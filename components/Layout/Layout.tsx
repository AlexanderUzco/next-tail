import Header from "@components/Layout/Header";
import styles from './layout.module.css';

const Layout: React.FC = ({children}) => {
    return(
        <div>
            <Header/>
            {children}
            <footer>This is the footer</footer>

            {/*<style jsx>{`
                .container {
                    background: salmon;
                }

                footer {
                    background: green;
                }
            `}</style>*/}
        </div>
    );
}

export default Layout;