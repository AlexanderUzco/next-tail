import Header from "@components/Layout/Header";
import styles from './layout.module.css';

const Layout: React.FC = ({children}) => {
    return(
        <div className="">
            <Header/>
            {children}
            <footer className="h-10">This is the footer</footer>

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