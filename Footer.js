import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="">

                <div className="row">

                    <div className="col-12">
                        <p>Energía App</p>
                    </div>

                    <div className="col-12">
                        <p>Copyright &copy; 2019 Ayneer Gonzalez & Karen Benedetti, todos los derechos reservados.</p>
                    </div>
                </div>

            </footer>
        )
    }
}

export default Footer;