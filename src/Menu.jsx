import './Menu.css'

const Menu =()=>{

    return (
        <div> 
            <ul className= "nav">
                <li className = "nav-item">
                    <a className="nav-link active" href="/home">
                        Home 
                    </a>
                </li>
                 <li className = "nav-item">
                    <a className="nav-link" href="/pokeflex">
                        Pokeflex
                    </a>
                </li>
                 <li className = "nav-item">
                    <a className="nav-link" href="/pokegrid">
                        PokeGrid 
                    </a>
                </li>
                 <li className = "nav-item">
                    <a className="nav-link" href="/ViaCep">
                        ViaCep
                    </a>
                </li>
            </ul>

        </div>
    )
}
export default Menu